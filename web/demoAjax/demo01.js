// Das globale XMLHttpRequest-Objekt wird erzeugt
var xmlHttp;
// window.onload = initAjax();
function initAjax()
{
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
        alert("Version 1");
    } else if (window.ActiveXObject) {
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            alert("Version 2");
        } catch (ex) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
                alert("Version 3");
            } catch (ex) {
            }
        }
    }
}
// Für init-Test: initAjax() wird aufgerufen und der HTTP-Request wird abgesetzt
// Schlecht programmiert! --> initAjax() sollte auf window.onload = initAjax();
//stehen!!
function startRequest() {
    initAjax();
    xmlHttp.onreadystatechange = handleStateChange;
    xmlHttp.open("GET", "../res/simpleResponse.txt", true);
    xmlHttp.send(null);
}
// Callback-Funktion

function handleStateChange() {
    if (xmlHttp.readyState === 4) {
        if (xmlHttp.status === 200) {
            alert("Antwort des Servers: " + xmlHttp.responseText;
        }
    }
}
 