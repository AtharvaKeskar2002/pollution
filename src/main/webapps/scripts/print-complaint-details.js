function printComplaintDetails(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","/Pollution-Complaint/src/main/java/jsp-pages/print-complaint-details.jsp",false);
    xmlhttp.send();
    output = xmlhttp.responseText;
    document.getElementById("print-complaint-details").innerHTML = output;
}