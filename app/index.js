const reloadIcon = document.querySelector('.generator-update-icon');
const copyBtn = document.querySelector('.generator-copy-btn');
const password = document.querySelector('.generator-password');
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const passLength = document.querySelector('.password-length');
const slider = document.querySelector('.slider');

minusBtn.addEventListener('click', decreasePasswordLength);
plusBtn.addEventListener('click', incresePasswordLength);

reloadIcon.addEventListener('click', rotateOn);
copyBtn.addEventListener('click', copyPassword);

// getting value of slider thumb on drag
slider.oninput = function() { 
  passLength.textContent = this.value;
  generatePassword(+passLength.textContent);
}

// initial representation of password length
showPasswordLength(slider.value);

// initial password on load
slider.oninput();

function showPasswordLength(val) {
  return passLength.textContent = val;
}

function decreasePasswordLength() { 
  const val = --slider.value;
  if (val < 1) { 
    val = 1;
  }
  slider.oninput();
  showPasswordLength(val);
}

function incresePasswordLength() { 
  const val = ++slider.value;
  if (val > 30) { 
    val = 30;
  }
  slider.oninput();
  showPasswordLength(val);
}

function rotateOn() {
  copyPasswordReset();
  reloadIcon.classList.add("rotate");
  setTimeout(rotateOff, 800);
  slider.oninput();
}

function rotateOff(){ 
  reloadIcon.classList.remove("rotate");
}

function copyPassword() { 
  const range = document.createRange();
  range.selectNode(password);
  copyBtn.textContent = 'copied';

  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}

function copyPasswordReset() { 
  copyBtn.textContent = 'copy';
}

function generatePassword(number) { 
  password.textContent = createPasswordString(number);
}

function createPasswordString(num) { 
  const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; 
  const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"]; 
  const allUniqueChars = [..."~!@#$%^&*()_+-=[]{}|;:'\",./<>?"];
  const allNumbers = [..."0123456789"];

  const base = [...allCapsAlpha, ...allNumbers, ...allLowerAlpha, ...allUniqueChars];

  const generator = (base, len) => {
    return [...Array(len)]
      .map(i => base[Math.random()*base.length|0])
      .join('');
  };

  return generator(base, num);
}