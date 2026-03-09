function validateForm(){

var name=document.getElementById("name").value;
var email=document.getElementById("email").value;

if(name=="" || email=="")
{
document.getElementById("msg").innerHTML="Please fill all required fields";
return false;
}

document.getElementById("msg").innerHTML="Thank you! Your enquiry has been submitted.";

return false;
}
