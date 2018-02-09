//Globales xmlHttp Objekt erzeugen
var xmlHttp = initAjax();

var requestType = null;

function startRequest(requestType) {
    this.requestType = requestType;

    xmlHttp.onreadystatechange = handleStateChange;
    xmlHttp.open("GET", "../res/states.xml", true);
    xmlHttp.send(null);
}

//Callback function
function handleStateChange() {
    if (xmlHttp.readyState === 4) {
        if (xmlHttp.status === 200) {
            //Auswertung des Übergabeparameters
            if (requestType === "north") {
                listNorthStates();
            } else if (requestType === "all") {
                lsitAllStates();
            }

        }
    }
}

//BL
function listNorthStates() {
    //Ergebnis als XML-Document
    var xmlDoc = xmlHttp.responseXML;

    //XML-JDOM: aus gesamten xmlDoc -> NodeList mit tag "north"
    var northNodes = xmlDoc.getElementsByTagName("north")[0]; //erster Node aus Nodelist
    var northStates = northNodes.getElementsByTagName("state");
    outputList("Nordstaaten im XML-Dokument:", northStates);
}

    //todo: list all states

function outputList(title, states) {
    var out = title;
    var currentState = null;
    //XML-JDOM: nodeList states durchlaufen
    for(var i = 0; i < states.length; i++) {
        currentState = states[i];
        out += "\n-" + currentState.childNodes[0].nodeValue;
    }
    alert(out);
    
    //todo: als HTML-Inhalt setzen -> Data-Binding
}