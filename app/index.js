const reloadIcon = document.querySelector(".generator-update-icon");
const copyBtn = document.querySelector(".generator-copy-btn");

const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const passLength = document.querySelector('.password-length');
const slider = document.querySelector('.slider');

minusBtn.addEventListener('click', decreasePasswordLength);
plusBtn.addEventListener('click', incresePasswordLength);

showPasswordLength(slider.value);

slider.oninput = function () { 
  passLength.textContent = this.value;
}


reloadIcon.addEventListener('click', rotateOn);
copyBtn.addEventListener('click', copyPassword);

function showPasswordLength(val) {
  passLength.textContent = val;
}

function decreasePasswordLength() { 
  const val = --slider.value;
  showPasswordLength(val);
}

function incresePasswordLength() { 
  const val = ++slider.value;
  showPasswordLength(val);
}

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