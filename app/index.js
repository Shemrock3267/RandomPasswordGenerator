const reloadIcon = document.querySelector(".generator-update-icon");
const copyBtn = document.querySelector(".generator-copy-btn");

reloadIcon.addEventListener('click', rotateOn);
copyBtn.addEventListener('click', copyPassword);

function rotateOn(){ 
  reloadIcon.classList.add("rotate");
  setTimeout(rotateOff, 800);
}

function rotateOff(){ 
  reloadIcon.classList.remove("rotate");
}

function copyPassword() { 
  copyBtn.textContent = 'copied';
}