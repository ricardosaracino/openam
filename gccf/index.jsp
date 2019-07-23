<%@ page contentType="text/html; charset=utf8" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<link rel="schema.dcterms" href="http://purl.org/dc/terms/" />

	<!-- Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
	Terms and conditions of use: http://tbs-sct.ircan.gc.ca/projects/gcwwwtemplates/wiki/Terms
	Conditions régissant l'utilisation : http://tbs-sct.ircan.gc.ca/projects/gcwwwtemplates/wiki/Conditions
	-->

	<!-- Title begins / Début du titre -->
	<title>IDP Simulator</title>
	<!-- Title ends / Fin du titre -->

	<!-- Favicon (optional) begins / Début du favicon (optionnel) -->
	<!-- <link rel="shortcut icon" href="images/favicon.ico" /> -->
	<!-- Favicon (optional) ends / Find du favicon (optionnel) -->

	<!-- Meta-data begins / Début des métadonnées -->
	<meta name="dcterms.description" content="English description / Description en anglais" />
	<meta name="description" content="English description / Description en anglais" />
	<meta name="keywords" content="English keywords / Mots-clés en anglais" />
	<meta name="dcterms.creator" title="Titles of Federal Organizations" content="English name of the content author / Nom en anglais de l'auteur du contenu" />
	<meta name="dcterms.title" content="English title / Titre en anglais" />
	<meta name="dcterms.issued" title="W3CDTF" content="Date published (YYYY-MM-DD) / Date de publication (AAAA-MM-JJ)" />
	<meta name="dcterms.modified" title="W3CDTF" content="Date modified (YYYY-MM-DD) / Date de modification (AAAA-MM-JJ)" />
	<meta name="dcterms.subject" title="scheme" content="English subject terms / Termes de sujet en anglais" />
	<meta name="dcterms.language" title="ISO639-2" content="eng" />
	<!-- Meta-data ends / Fin des métadonnées -->

	<!-- WET scripts/CSS begin / Début des scripts/CSS de la BOEW --><!--[if IE 6]><![endif]-->
	<link href="css/base.css" rel="stylesheet" type="text/css" />
	<!--[if IE 8]><link href="css/base-ie8.css" rel="stylesheet" type="text/css" /><![endif]-->
	<!--[if IE 7]><link href="css/base-ie7.css" rel="stylesheet" type="text/css" /><![endif]-->
	<!--[if lte IE 6]><link href="css/base-ie6.css" rel="stylesheet" type="text/css" /><![endif]-->
	<link href="css/util.css" rel="stylesheet" type="text/css" />
<!-- clf2-nsi2 theme begins / Début du thème clf2-nsi2 -->
	<link href="css/theme-clf2-nsi2.css" rel="stylesheet" type="text/css" />
	<!--[if IE 7]><link href="css/theme-clf2-nsi2-ie7.css" rel="stylesheet" type="text/css" /><![endif]-->
	<!--[if lte IE 6]><link href="css/theme-clf2-nsi2-ie6.css" rel="stylesheet" type="text/css" /><![endif]-->
<!-- clf2-nsi2 theme ends / Fin du thème clf2-nsi2 -->
	<!-- WET scripts/CSS end / Fin des scripts/CSS de la BOEW -->

	<!-- Progressive enhancement begins / Début de l'amélioration progressive -->
	<script src="js/lib/jquery.min.js" type="text/javascript"></script>
	
	<script  language="JavaScript" type="text/javascript">			
			
		    	//var domain_name = ".domain.net";
		    	var domain_name = "##DOMAIN_NAME##";
			    
				function htmlEncode(value){
				    if (value) {
				        return jQuery('<div />').text(value).html();
				    } else {
				        return '';
				    }
				}
				
		        function setCookie(name, value, domain, secure, handler) {
		            document.cookie = name + "=" + value + ";path=/;domain=" + domain;
		        }

		        function getCookie(name) {
		            var nameEQ = name + "=", ca = document.cookie.split(';'), i = 0, c;
		            for (; i < ca.length; i++) {
		                c = ca[i];
		                while (c[0] == ' ') c = c.substring(1);
		                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length);
		            }
		            return null;
		        }

		        function switch_to_fra() {
		        	
	                $("#lilang").html("<b title=\"English - English version of the Web page\">English</b>");
		        	$("#cn-banner-text").html("Simulateur de fournisseur d'identité");
				        	
	                $("#cn-cmb2").html("<a href=\"#\" title=\"Accueil - Page principale du site Web\">Accueil</a>");
	                $("#cn-cmb3").html("<a href=\"http://www.tpsgc-pwgsc.gc.ca/apropos-about/fi-fs/its-sct-fra.html\" " 
	                		+ "title=\"Contactez-nous - Coordonnées importantes\">Contactez-nous</a>");
	                $("#cn-cmb4").html("<a href=\"http://www.tpsgc-pwgsc.gc.ca/apropos-about/fi-fs/its-sct-fra.html\" "
	                		+ "title=\"Aide - Renseignements sur la façon d'utiliser le site Web\">Aide</a>");
	                $("#cn-cmb5").html("<a rel=\"search\" href=\"#\" title=\"Recherche - Recherche dans le site Web\">Recherche</a>");
	                $("#cn-cmb6").html("<a rel=\"external\" href=\"http://www.canada.gc.ca/accueil.html\" "
	                		+ "title=\"canada.gc.ca - Site Web du gouvernement du Canada\">canada.gc.ca</a>");

	                $("#cn-bcrumb").html("<h2>Fil d'Ariane</h2> "
		                	+ "<ol>"
		                	+ "<li><a rel=\"up up u\" href=\"#\" title=\"Accueil - Page principale du site Web\">Accueil</a>&#160;&#62;</li> "
		                	+ "</ol>"
	                	);
	                
	                $("#cn-centre-col-inner").html(
	                		  "<section> "
		                	+ "<!-- Content title begins / Début du titre du contenu -->"
		                	+ "<header> "
		                	+ "<h1 id=\"cn-cont\">Bienvenue</h1>"
		                	+ "</header>"
		                	+ "<!-- Content Title ends / Fin du titre du contenu -->"
		                	+ "<!-- clf2-nsi2 theme begins / Début du thème clf2-nsi2 -->"
		                	+ "<p>"
		                	+ "Si vous voyez ce que vous avez démarré avec succès le IDP Simulateur."
		                	+ "</p>"
		                	+ "<section>"
		                	+ "<header>"
		                	+ "<h3>Prochaines étapes</h3>"
		                	+ "<header>"
		                	+ "<p>"
		                	+ "Vous pouvez télécharger les IDP métadonnées utilisant <a href=\"cats2-signed.xml\">ce lien</a>."
		                	+ "</p>"
		                	+ "<p> Vous pouvez télécharger le certificat SSL auto-signé dans format "
		                	+ "<a href=\"tomcat.crt\">PEM</a> ou "
		                	+ "<a href=\"tomcat.p12\">pkcs12</a>. "
		                	+ "</section>"
		                	+ "<section>"
		                	+ "<header>"
		                	+ "<h3>Informations administration</h3>"
		                	+ "<header>"
		                	+ "<p>"
		                	+ "Utilisez le menu de gauche pour accéder aux consoles d'administration Tomcat et OpenAM. Les crendentials par défaut pour le faire sont:"
		                	+ "</p>"
		                	+ "<table class=\"results\">"
		                	+ "<tr><td class=\"label\">Console</td><td class=\"label\">Le nom d'utilisateur</td><td class=\"label\">Mot de passe</td></tr>"
		                	+ "<tr><td class=\"content\">Open AM</td><td class=\"content\">amadmin</td><td class=\"content\">SAMLTest1</td></tr>"
		                	+ "<tr><td class=\"content\">Tomcat</td><td class=\"content\">testmgr</td><td class=\"content\">SAMLTest1</td></tr>"
		                	+ "</table>"
		                	+ "<br/>"
		                	+ "</section>"
		                	+ "</section>"
	                	);

	                $("#cn-left-col-inner").html(
	                		  "<section>"
		                	+ "<h2 id=\"cn-nav\">Navigation principale (colonne de gauche)</h2>"
		                	+ "<div class=\"cn-left-col-default\">"
		                	+ "<nav role=\"navigation\">"
		                	+ "<!-- clf2-nsi2 theme begins / Début du thème clf2-nsi2 -->"
		                	+ "<section>"
		                	+ "<h3>Consoles d'administration</h3>"
		                	+ "<ul>"
		                	+ "<li><a href=\"opensso/\">OpenAM</a></li>"
		                	+ "<li><a href=\"manager/\">Apache Tomcat</a></li>"
		                	+ "</ul>"
		                	+ "</section>"
		                	+ "<section>"
		                	+ "<h3>IDP Functions</h3>"
		                	+ "<ul>"
		                	+ "<li><a href=\"opensso/saml2/jsp/idpSingleLogoutInit.jsp?binding=urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect\">Single Logout</a></li>"
		                	+ "</ul>"
		                	+ "</section>"
		                	+ "<section>"
		                	+ "<h3>Tomcat Logs</h3>"
		                	+ "<ul>"
		                	+ "<li><a href=\"catalina-daemon.out\">Server Log</a></li>"
		                	+ "</ul>"
		                	+ "</section>"
		                	+ "<section>"
		                	+ "<h3>OpenAM Logs</h3>"
		                	+ "<ul>"
		                	+ "<li><a href=\"SAML2.access\">SAML Access Log</a></li>"
		                	+ "<li><a href=\"SAML2.error\">SAML Error Log</a></li>"
		                	+ "<li><a href=\"Federation\">SAML Debug Log</a></li>"
		                	+ "</ul>"
		                	+ "</section>"
		                	+ "<!-- clf2-nsi2 theme ends / Fin du thème clf2-nsi2 -->"
		                	+ "</nav>"
		                	+ "</div>"
		                	+ "</section>"
		                );
				}
		        
		        function switch_to_eng() {
	                $("#lilang").html("<b title=\"Français - Version française de cette page\">Français</b>");
		        	$("#cn-banner-text").html("IDP Simulator");
				        	
	                $("#cn-cmb2").html("<a href=\"#\" title=\"Home - Main page of the Web site\">Home</a>");
	                $("#cn-cmb3").html("<a href=\"#\" " 
	                		+ "title=\"Contact Us - Important contact information\">Contact Us</a>");
	                $("#cn-cmb4").html("<a href=\"http://www.tpsgc-pwgsc.gc.ca/apropos-about/fi-fs/its-sct-eng.html\" "
	                		+ "title=\"Help - Information about using the Web site\">Help</a>");
	                $("#cn-cmb5").html("<a rel=\"search\" href=\"#\" title=\"Search - Search the Web site\">Search</a>");
	                $("#cn-cmb6").html("<a rel=\"external\" href=\"http://www.canada.gc.ca/home.html\" "
	                		+ "title=\"canada.gc.ca - Government of Canada Web site\">canada.gc.ca</a>");
	                
	                $("#cn-bcrumb").html("<h2>Breadcrumb</h2> "
		                	+ "<ol>"
		                	+ "<li><a rel=\"up up u\" href=\"#\" title=\"Home - Main page of the Web site\">Home</a>&#160;&#62;</li> "
		                	+ "</ol>"
	                	);

	                $("#cn-centre-col-inner").html(
	                		  "<section> "
		                	+ "<!-- Content title begins / Début du titre du contenu -->"
		                	+ "<header> "
		                	+ "<h1 id=\"cn-cont\">Congratulations</h1>"
		                	+ "</header>"
		                	+ "<!-- Content Title ends / Fin du titre du contenu -->"
		                	+ "<!-- clf2-nsi2 theme begins / Début du thème clf2-nsi2 -->"
		                	+ "<p>"
		                	+ "If you are seeing this you have sucessfully started the IDP Simulator."
		                	+ "</p>"
		                	+ "<section>"
		                	+ "<header>"
		                	+ "<h3>Next Steps</h3>"
		                	+ "<header>"
		                	+ "<p>"
		                	+ "You can download the IDP metadata using <a href=\"cats2-signed.xml\">this link</a>."
		                	+ "</p>"
		                	+ "<p> You can download the self-signed SSL certificate in either "
		                	+ "<a href=\"tomcat.crt\">PEM format</a> or "
		                	+ "<a href=\"tomcat.p12\">pkcs12 format</a>. "
		                	+ "</section>"
		                	+ "<section>"
		                	+ "<header>"
		                	+ "<h3>Administration Information</h3>"
		                	+ "<header>"
		                	+ "<p>"
		                	+ "Use the left menu to access the Tomcat and OpenAM administration consoles. The default crendentials for doing so are:"
		                	+ "</p>"
		                	+ "<table class=\"results\">"
		                	+ "<tr><td class=\"label\">Console</td><td class=\"label\">Username</td><td class=\"label\">Password</td></tr>"
		                	+ "<tr><td class=\"content\">Open AM</td><td class=\"content\">amadmin</td><td class=\"content\">SAMLTest1</td></tr>"
		                	+ "<tr><td class=\"content\">Tomcat</td><td class=\"content\">testmgr</td><td class=\"content\">SAMLTest1</td></tr>"
		                	+ "</table>"
		                	+ "<br/>"
		                	+ "</section>"
		                	+ "</section>"
	                	);
	                
	                $("#cn-left-col-inner").html(
	                		  "<section>"
		                	+ "<h2 id=\"cn-nav\">Primary navigation (left column)</h2>"
		                	+ "<div class=\"cn-left-col-default\">"
		                	+ "<nav role=\"navigation\">"
		                	+ "<!-- clf2-nsi2 theme begins / Début du thème clf2-nsi2 -->"
		                	+ "<section>"
		                	+ "<h3>Admin Consoles</h3>"
		                	+ "<ul>"
		                	+ "<li><a href=\"opensso/\">OpenAM</a></li>"
		                	+ "<li><a href=\"manager/\">Apache Tomcat</a></li>"
		                	+ "</ul>"
		                	+ "</section>"
		                	+ "<section>"
		                	+ "<h3>IDP Functions</h3>"
		                	+ "<ul>"
		                	+ "<li><a href=\"opensso/saml2/jsp/idpSingleLogoutInit.jsp?binding=urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect\">Single Logout</a></li>"
		                	+ "</ul>"
		                	+ "</section>"
		                	+ "<section>"
		                	+ "<h3>Tomcat Logs</h3>"
		                	+ "<ul>"
		                	+ "<li><a href=\"catalina-daemon.out\">Server Log</a></li>"
		                	+ "</ul>"
		                	+ "</section>"
		                	+ "<section>"
		                	+ "<h3>OpenAM Logs</h3>"
		                	+ "<ul>"
		                	+ "<li><a href=\"SAML2.access\">SAML Access Log</a></li>"
		                	+ "<li><a href=\"SAML2.error\">SAML Error Log</a></li>"
		                	+ "<li><a href=\"Federation\">SAML Debug Log</a></li>"
		                	+ "</ul>"
		                	+ "</section>"
		                	+ "<!-- clf2-nsi2 theme ends / Fin du thème clf2-nsi2 -->"
		                	+ "</nav>"
		                	+ "</div>"
		                	+ "</section>"
		                );
		        }
		        
		        function init() {
		        	
		            var field = getCookie('_gc_lang');
		            //var field = 'eng';

		            if (field == 'fra') {
		            	switch_to_fra();
		            } else {
		            	switch_to_eng();

		                if (field != 'eng') {
		                    setCookie('_gc_lang', 'eng', domain_name, 'n', function (result) {
		                        $.each(result, function (i, field) {
		                            //$("li").append(field + " ");
		                        });
		                    });
		                }
		            }
		        }

		        $(init);

		        $(document).ready(function () {

		            $("#lilang").toggle(
		               function () {
 		            	   switch_to_fra();
		                   setCookie('_gc_lang', 'fra', domain_name, 'n', function (result) {
		                       $.each(result, function (i, field) {
		                           //$("li").append(field + " ");
		                       });
		                   });
		                   
		               }, function () {
 		            	   switch_to_eng();
		                   setCookie('_gc_lang', 'eng', domain_name, 'n', function (result) {
		                       $.each(result, function (i, field) {
		                           //$("li").append(field + " ");
		                       });
		                   });
		               });		            
		        });
					
	</script>
	
	<script src="js/pe-ap.js" type="text/javascript" id="progressive"></script>
	<script type="text/javascript">
	/* <![CDATA[ */
		var params = {
		};
		PE.progress(params);
	/* ]]> */
	</script>
	<!-- Progressive enhancement ends / Fin de l'amélioration progressive -->

	<!-- Custom scripts/CSS begin / Début des scripts/CSS personnalisés -->
	<link href="css/theme-cats.css" rel="stylesheet" type="text/css" />
	<!-- Custom scripts/CSS end / Fin des scripts/CSS personnalisés -->

	<!-- WET print CSS begins / Début du CSS de la BOEW pour l'impression -->
	<link href="css/pf-if.css" rel="stylesheet" media="print" type="text/css" />
<!-- clf2-nsi2 theme begins / Début du thème clf2-nsi2 -->
	<link href="css/pf-if-theme-clf2-nsi2.css" rel="stylesheet" media="print" type="text/css" />
<!-- clf2-nsi2 theme ends / Fin du thème clf2-nsi2 -->
	<!-- WET print CSS ends / Fin du CSS de la BOEW pour l'impression -->
</head>
<body>
<!-- Two column layout begins / Début de la mise en page de deux colonnes -->
<div id="cn-body-inner-2col">
	<!-- Skip header begins / Début du saut de l'en-tête -->
	<div id="cn-skip-head">
	<nav>
		<ul id="cn-tphp">
			<li id="cn-sh-link-1"><a href="#cn-cont">Skip to main content</a></li>
			<li id="cn-sh-link-2"><a href="#cn-nav">Skip to primary navigation</a></li>
		</ul>
	</nav>
	</div>
	<!-- Skip header ends / Fin du saut de l'en-tête -->

	<!-- Header begins / Début de l'en-tête -->
	<div id="cn-head"><div id="cn-head-inner">
	<header>
<!-- clf2-nsi2 theme begins / Début du thème clf2-nsi2 -->
		<div id="cn-sig"><img src="images/sig-eng.gif" width="372" height="20" alt="Government of Canada" title="Government of Canada" /></div>
		<div id="cn-wmms"><img src="images/wmms.gif" width="83" height="20" alt="Symbol of the Government of Canada" title="Symbol of the Government of Canada" /></div>

		<!-- Banner begins / Début de la bannière -->
		<div id="cn-leaf"></div>
		<div id="cn-banner" role="banner">
			<p id="cn-banner-text">IDP Simulator</p>
			<p><%= request.getScheme() + "://" + request.getServerName() %></p>
		</div>
		<!-- Banner ends / Fin de la bannière -->

		<nav role="navigation">
			<!-- Common menu bar begins / Début de la barre de menu commune -->
			<div id="cn-cmb">
				<h2>Common menu bar</h2>
				<ul>
					<!-- 
					<li id="cn-cmb1"><a href="#" lang="fr" title="Français - Version française de cette page">Français</a></li>
					 -->
					<li id="lilang" style="margin-right: 2px; cursor: pointer; color: white;"><b title="Français - Version française de cette page">Français</b></li>
					<li id="cn-cmb2"><a href="#" title="Home - Main page of the Web site">Home</a></li>
					<li id="cn-cmb3"><a href="#" title="Contact Us - Important contact information">Contact Us</a></li>
					<li id="cn-cmb4"><a href="#" title="Help - Information about using the Web site">Help</a></li>
					<li id="cn-cmb5"><a rel="search" href="#" title="Search - Search the Web site">Search</a></li>
					<li id="cn-cmb6"><a rel="external" href="http://www.canada.gc.ca/home.html" title="canada.gc.ca - Government of Canada Web site">canada.gc.ca</a></li>
				</ul>
			</div>
			<!-- Common menu bar ends / Fin de la barre de menu commune -->

			<!-- Breadcrumb begins / Début du fil d'Ariane -->
			<div id="cn-bcrumb">
				<h2>Breadcrumb</h2>
				<ol>
					<li><a rel="up up up" href="#" title="Home - Main page of the Web site">Home</a>&#160;&#62;</li>
				</ol>
			</div>
			<!-- Breadcrumb ends / Fin du fil d'Ariane -->
		</nav>
<!-- clf2-nsi2 theme ends / Fin du thème clf2-nsi2 -->
	</header>
	</div></div>
	<!-- Header ends / Fin de l'en-tête -->

	<div id="cn-cols">
	<!-- Main content begins / Début du contenu principal -->
	<div id="cn-centre-col-gap"></div>
	<div id="cn-centre-col" role="main"><div id="cn-centre-col-inner">
	<section>
		<!-- Content title begins / Début du titre du contenu -->
		<header>
			<h1 id="cn-cont">Congratulations</h1>
		</header>
		<!-- Content Title ends / Fin du titre du contenu -->

<!-- clf2-nsi2 theme begins / Début du thème clf2-nsi2 -->
		<p>
			If you are seeing this you have sucessfully started the IDP Simulator.
		</p>
		<section>
		<header>
			<h3>Next Steps</h3>
		<header>
		<p>
		    You can download the IDP metadata using <a href="cats2-signed.xml">this link</a>.
		</p>
		<p> You can download the self-signed SSL certificate in either
		<a href="tomcat.crt">PEM format</a> or
		<a href="tomcat.p12">pkcs12 format</a>.
		</section>
		<section>
		<header>
			<h3>Administration Information</h3>
		<header>
		<p>
		    Use the left menu to access the Tomcat and OpenAM administration consoles. The default crendentials for doing so are:
		</p>
		<table class="results">
		   <tr><td class="label">Console</td><td class="label">Username</td><td class="label">Password</td></tr>
		   <tr><td class="content">Open AM</td><td class="content">amadmin</td><td class="content">SAMLTest1</td></tr>
		   <tr><td class="content">Tomcat</td><td class="content">testmgr</td><td class="content">SAMLTest1</td></tr>
                </table>
                <br/>
		</section>

<!-- clf2-nsi2 theme ends / Fin du thème clf2-nsi2 -->
	</section>
	</div></div>
	<!-- Main content ends / Fin du contenu principal -->

	<!-- Primary navigation (left column) begins / Début de la navigation principale (colonne gauche) -->
	<div id="cn-left-col-gap"></div>
	<div id="cn-left-col">
	<div id="cn-left-col-inner">
	<section>
		<h2 id="cn-nav">Primary navigation (left column)</h2>
		<div class="cn-left-col-default">
		<nav role="navigation">
<!-- clf2-nsi2 theme begins / Début du thème clf2-nsi2 -->
			<section>
				<h3>Admin Consoles</h3>
				<ul>
					<li><a href="opensso/">OpenAM</a></li>
					<li><a href="manager/">Apache Tomcat</a></li>
				</ul>
			</section>
			<section>
				<h3>IDP Functions</h3>
				<ul>
					<li><a href="opensso/saml2/jsp/idpSingleLogoutInit.jsp?binding=urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect">Single Logout</a></li>
				</ul>
			</section>
			<section>
				<h3>Tomcat Logs</h3>
				<ul>
					<li><a href="catalina-daemon.out">Server Log</a></li>
				</ul>
			</section>
			<section>
				<h3>OpenAM Logs</h3>
				<ul>
					<li><a href="SAML2.access">SAML Access Log</a></li>
					<li><a href="SAML2.error">SAML Error Log</a></li>
					<li><a href="Federation">SAML Debug Log</a></li>
				</ul>
			</section>
<!-- clf2-nsi2 theme ends / Fin du thème clf2-nsi2 -->
		</nav>
		</div>
	</section>
	</div></div>
	<!-- Primary navigation (left column) ends / Fin de la navigation principale (colonne gauche) -->
	</div>

	<!-- Footer begins / Début du pied de page -->
	<div id="cn-foot"><div id="cn-foot-inner">
	<footer>
		<h2>Footer</h2>
<!-- clf2-nsi2 theme begins / Début du thème clf2-nsi2 -->
		<div id="cn-in-pd">
			<dl id="cn-doc-dates" role="contentinfo">
				<dt>Date Modified:</dt>
				<dd><span><time>2012-03-19</time></span></dd>
			</dl>
			<div id="cn-toppage-foot"><a href="#cn-tphp" title="Return to Top of Page">Top of Page</a></div>
			<div id="cn-in-pd-links">
				<ul>
					<li id="cn-inotices-link"><a href="#" rel="license">Important Notices</a></li>
				</ul>
			</div>
		</div>
<!-- clf2-nsi2 theme ends / Fin du thème clf2-nsi2 -->
	</footer>
	</div></div>
	<!-- Footer ends / Fin du pied de page -->
</div>
<!-- Two column layout ends / Fin de la mis en page de deux colonnes -->
</body>
</html>