function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
  document.getElementById("mySidepanel").style.height = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  document.getElementById("mySidepanel").style.height = "0";
}


window.onload = closeNav();