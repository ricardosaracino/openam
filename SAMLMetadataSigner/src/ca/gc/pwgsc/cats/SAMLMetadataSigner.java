package ca.gc.pwgsc.cats;

import javax.xml.crypto.dsig.*;
import javax.xml.crypto.dsig.dom.DOMSignContext;
import javax.xml.crypto.dsig.keyinfo.*;
import javax.xml.crypto.dsig.spec.*;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.security.*;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Enumeration;
import java.util.List;
import java.util.UUID;

import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.*;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

/**
 * This is a utility for generating an Enveloped XML Signature using the
 * JSR 105 API.
 */
public class SAMLMetadataSigner {

	// Synopsis: java SAMLMetadataSigner [document] [output] [keystore] [password]

	public static void main(String[] args) throws Exception {

		String inFileName, outFileName, keyFileName, keyPass;
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		if (args.length != 4) {
			System.out.print("Enter the source location of your unsigned metadata: ");
			inFileName = br.readLine();
			System.out.print("Enter the destination location for the new signed metadata file: ");
			outFileName = br.readLine();
			System.out.print("Enter the path of your private key (.p12) file: ");
			keyFileName = br.readLine();
			System.out.print ("Enter the password for the key file: ");
			keyPass = br.readLine();
		} else {
			inFileName = args[0];
			outFileName = args[1];
			keyFileName = args[2];
			keyPass = args[3];
		}
		
		// Load the private signing key
		KeyStore ks = KeyStore.getInstance("pkcs12");
		ks.load(new FileInputStream(keyFileName), keyPass.toCharArray());
		
		int keyIndex;
		if (ks.size() > 1) {
			System.out.println ("Multiple Key entries found: ");
			Enumeration<String> aliases = ks.aliases();
			for (int i = 1; aliases.hasMoreElements(); i++) {
				System.out.println(i + ":" + aliases.nextElement());
			}
		
			do {
				System.out.print("Please identify the signing key: ");
				try {
					keyIndex = Integer.parseInt(br.readLine());
				} catch (NumberFormatException e) {
					keyIndex = 0;
				}
			} while (keyIndex < 1 || keyIndex > ks.size());
		} else
			keyIndex = 1;
				
		String keyAlias = "";
		Enumeration<String> aliases = ks.aliases();
		for (int i = 1; i <= keyIndex; i++) {
			keyAlias = aliases.nextElement();
		}

		KeyStore.PrivateKeyEntry keyEntry = (KeyStore.PrivateKeyEntry) ks
				.getEntry(keyAlias, new KeyStore.PasswordProtection(keyPass.toCharArray()));

		// Instantiate the document to be signed
		DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
		dbf.setNamespaceAware(true);
		Document doc = dbf.newDocumentBuilder().parse(
				new FileInputStream(inFileName));

		// Sign the Metadata
		sign(doc, keyEntry);
		
		// output the resulting document
		OutputStream os = new FileOutputStream(outFileName);

		TransformerFactory tf = TransformerFactory.newInstance();
		Transformer trans = tf.newTransformer();
		trans.transform(new DOMSource(doc), new StreamResult(os));
		
		System.out.println("Done.");
	}
	
	// Method to do the XML signing
	@SuppressWarnings({ "rawtypes", "unchecked" })
	private static void sign (Document doc, KeyStore.PrivateKeyEntry privateKey) throws Exception {
		Element docElement = doc.getDocumentElement();

		// Add an Id attribute to the Entity Descriptor if needed
		if (docElement.getAttribute("ID").equals("")) {
			docElement.setAttribute("ID", '_' + UUID.randomUUID().toString().replace("-", ""));
		}
		docElement.setIdAttribute("ID", true);
		
		// Create a DOMSignContext and specify the Private Key and
		// location of the resulting Signature
		X509Certificate cert = (X509Certificate) privateKey.getCertificate();
		DOMSignContext dsc = new DOMSignContext(privateKey.getPrivateKey(), doc
				.getDocumentElement(), doc.getDocumentElement().getFirstChild());

		// Create a DOM XMLSignatureFactory that will be used to generate the
		// enveloped signature
		XMLSignatureFactory fac = XMLSignatureFactory.getInstance("DOM");

		// Create a Reference to the enveloped document
		// (using the ID attribute) and also specify the
		// SHA1 digest algorithm and the ENVELOPED Transform.
		List<Transform> transforms = new ArrayList(2);
		
		transforms.add(fac.newTransform(Transform.ENVELOPED,
				(TransformParameterSpec) null));
		transforms.add(fac.newCanonicalizationMethod(
				CanonicalizationMethod.EXCLUSIVE, 
				(C14NMethodParameterSpec) null));
		
		Reference ref = fac.newReference('#' + docElement.getAttribute("ID"),
				fac.newDigestMethod(DigestMethod.SHA256, null), transforms, null, null);

		// Create the SignedInfo
		SignedInfo si = fac
				.newSignedInfo(fac.newCanonicalizationMethod(
						CanonicalizationMethod.EXCLUSIVE,
						(C14NMethodParameterSpec) null),
						fac.newSignatureMethod("http://www.w3.org/2001/04/xmldsig-more#rsa-sha256", null),
						Collections.singletonList(ref));

		// Create the KeyInfo containing the X509Data.
		KeyInfoFactory kif = fac.getKeyInfoFactory();
		List x509Content = new ArrayList();
		x509Content.add(cert.getSubjectX500Principal().getName());
		x509Content.add(cert);
		X509Data xd = kif.newX509Data(x509Content);
		KeyInfo ki = kif.newKeyInfo(Collections.singletonList(xd));

		// Create the XMLSignature (but don't sign it yet)
		XMLSignature signature = fac.newXMLSignature(si, ki);

		// Marshal, generate (and sign) the enveloped signature
		signature.sign(dsc);
	}
}
