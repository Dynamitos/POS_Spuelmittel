//Globales xmlHttp Objekt erzeugen
var xmlHttp = initAjax();

function startRequest(request) {
    xmlHttp.onreadystatechange = handleStateChange;
    xmlHttp.open("GET", "../res/states.xml", true);
    xmlHttp.send(null);
}

//Callback function
function handleStateChange() {
    if(xmlHttp.readyState === 4) {
        if(xmlHttp.status === 200) {
            //Auswertung des Übergabeparameters
            
        }
    }
}