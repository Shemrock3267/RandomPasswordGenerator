const reloadIcon = document.querySelector(".generator-update-icon");
reloadIcon.addEventListener('click', rotateOn);

function rotateOn(){ 
  reloadIcon.classList.add("rotate");
  setTimeout(rotateOff, 800);
}

function rotateOff(){ 
  reloadIcon.classList.remove("rotate");
}

