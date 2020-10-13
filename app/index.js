const reloadIcon = document.querySelector(".generator-update-icon");
const copyBtn = document.querySelector(".generator-copy-btn");
const password = document.querySelector(".generator-password");

const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
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

showPasswordLength(slider.value);

function showPasswordLength(val) {
  return passLength.textContent = val;
}

function decreasePasswordLength() { 
  const val = --slider.value;
  slider.oninput();
  showPasswordLength(val);
}

function incresePasswordLength() { 
  const val = ++slider.value;
  slider.oninput();
  showPasswordLength(val);
}

function rotateOn() {
  copyPasswordReset();
  reloadIcon.classList.add("rotate");
  setTimeout(rotateOff, 800);
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
  const result = generateFourNumbers(number);
  createPasswordString(result);
}

// function to generate random digits. num variable will be random in future.
// parseInt((Math.random() * 9 + 1) * Math.pow(10, num - 1), 10);
function getNumber() { 
  return parseInt((Math.random() * 9 + 1));
}

function getUpperCaseLetter() { 
  return String.fromCharCode(65 + Math.floor(Math.random() * 26))
}

function getLowerCaseLetter() { 
  return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

function getSymbol() { 
  const symbols = '~!@#$%^&*()_+{}":?><;.,';
	return symbols[Math.floor(Math.random() * symbols.length)];
}

function generateFourNumbers(num) { 
  const max = num;
  const r1 = randomNumberBetween(1, max-3);
  const r2 = randomNumberBetween(1, max-2-r1);
  const r3 = randomNumberBetween(1, max-1-r1-r2);
  const r4 = max - r1 - r2 - r3;

  function randomNumberBetween(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  return {
    lowerCase: r1,
    upperCase: r2,
    numbers: r3,
    symbols: r4
  }
}

function createPasswordString(obj) { 
  let finalPassword = '';
  const randomFour = () => { return Math.floor(Math.random() * 4 + 1) };
  const initSwitch = () => { 
    let num = randomFour();
    
  }
  // switch case with 4 options:
  // 1 - getLowerCase(), 2 - getUpperCase(), 3 - getNumber(), 4 - getSymbol()
  // function to generate random number from 1 to 4 aand pass it into switch in
  // order to init specific function and add it's result to pass string until 
  // max number is reached, where max is 
  // lowerCase: r1,
  // upperCase: r2,
  // numbers: r3,
  // symbols: r4

  switch (num) { 
    case "1": { getLowerCaseLetter(); }
    case "2": { getUpperCaseLetter(); }
    case "3": { getNumber(); }
    case "4": { getSymbol(); }
    default: break;
  }
}