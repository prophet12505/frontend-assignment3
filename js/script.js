/* Set the width of the side navigation to 250px */
openNavSwitch=true;
function openNav() {
  console.log("open nav!");
  document.getElementsByTagName("nav")[0].style.display = "block";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementsByTagName("nav")[0].style.display = "none";
}

function switchNav(){
  if(openNavSwitch){
    openNav();

  }
  else{
    closeNav();
  }
  openNavSwitch=!openNavSwitch;
}