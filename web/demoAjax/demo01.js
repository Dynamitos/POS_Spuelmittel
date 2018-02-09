//Globales xmlHttp Objekt
var xmlHttp = initAjax();

function startRequest() {
    xmlHttp.onreadystatechange = handleStateChange;
    xmlHttp.open("GET", "../res/simpleResponse.txt", true);
    xmlHttp.send(null);
}

//Callback function
function handleStateChange() {
    if (xmlHttp.readyState === 4) {
        if (xmlHttp.status === 200) {
            //alert("Antwort vom Server: " + xmlHttp.responseText);
            //HTML-Binding mit id-innerHtml
            document.getElementById("response").innerHTML =
                    "Antwort vom Server: " + xmlHttp.responseText;
        }
    }
}
 