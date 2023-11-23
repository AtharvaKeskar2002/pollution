function displayPoliceStationRecord(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","/Pollution-Complaint/src/main/java/jsp-pages/display-police-station-record.jsp",false);
    xmlhttp.send();
    output = xmlhttp.responseText;
    document.getElementById("print-complaint-details").innerHTML = output;
}
