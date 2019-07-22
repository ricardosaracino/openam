/*
 * Copyright 2011-2017 ForgeRock AS. All Rights Reserved
 *
 * Use of this code requires a commercial software license with ForgeRock AS.
 * or with one of its affiliates. All use shall be exclusively subject
 * to such license between the licensee and ForgeRock AS.
 */

function hideHelp(num) {
    if(document.getElementById("help"+num) && document.getElementById("helpImg"+num)) {
        document.getElementById("help"+num).style.display = "none";   
        setSrcURL("helpImg"+num, "/console/images/help/info.gif");
    }
}

function showHelp(num) {
  if (document.getElementById("help"+num).style.display != "block") {
    setSrcURL("helpImg"+num, "/console/images/help/info-selected.gif");

    document.getElementById("help"+num).style.display = "block";
    document.getElementById("close"+num).focus();
  }
  else if (document.getElementById("help"+num).style.display = "block"){
    document.getElementById("help"+num).style.display = "none";
    setSrcURL("helpImg"+num, "/console/images/help/info-hover.gif");
  }
}

// Hover Functions
function hoverHelp(num) {
  if (document.getElementById("help"+num).style.display != "block") {
    setSrcURL("helpImg"+num, "/console/images/help/info-hover.gif");
  }
  else { 
    setSrcURL("helpImg"+num, "/console/images/help/info-selected.gif");
  }
}
function outHelp(num) {
  if (document.getElementById("help"+num).style.display != "block") {
    setSrcURL("helpImg"+num, "/console/images/help/info.gif");
  }
  else {
    setSrcURL("helpImg"+num, "/console/images/help/info-selected.gif");
  }
}

function setSrcURL(id, newPath) {
   var tmp = document.getElementById(id);
   tmp.src = amContextRoot + newPath;
}
