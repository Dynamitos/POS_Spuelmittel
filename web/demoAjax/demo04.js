var xmlHttp = initAjax();

function createQueryString() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var birthday = document.getElementById("birthday").value;
    var queryString = "firstName=" + firstName
            + "&lastName=" + lastName
            + "&birthday=" + birthday;
    return queryString;
}
function doRequestUsingGET() {
    xmlHttp.open("GET", "../PersonServlet?" + createQueryString(), true);
    xmlHttp.onreadystatechange = handleStateChange;
    xmlHttp.send(null);
}
function doRequestUsingPOST() {
    xmlHttp.open("POST", "../PersonServlet?", true);
    xmlHttp.onreadystatechange = handleStateChange;
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded",
            "charset=UTF-8");
    xmlHttp.send(createQueryString());
}
function handleStateChange() {
    if (xmlHttp.readyState === 4) {
        if (xmlHttp.status === 200) {
            var responseDiv = document.getElementById("serverResponse");
            responseDiv.innerHTML = xmlHttp.responseText;
        }
    }
}