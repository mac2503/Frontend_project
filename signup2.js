function computepwd() {

var pwd1 = document.getElementById("inputPassword").value;
var pwd2 = document.getElementById("confirmPassword").value;
if (pwd1 === pwd2) {
  window.open("newpagesu.html");
  return false;
} else {
  alert("Password doesn't match!");
  return true;
}
}
