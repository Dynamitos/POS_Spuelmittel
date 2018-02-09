// Das globale XMLHttpRequest-Objekt wird erzeugt
var xmlHttp;
// window.onload = initAjax();
function initAjax()
{
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
        //alert("Version 1");
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
    return xmlHttp;
}
