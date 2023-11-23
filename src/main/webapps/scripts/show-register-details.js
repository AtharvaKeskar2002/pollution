function showRegisterDetails(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","/Pollution-Complaint/src/main/java/jsp-pages/show-register-details.jsp",false);
    xmlhttp.send();
    output = xmlhttp.responseText;
    document.getElementById("complaint-details").innerHTML = ""+output;
}