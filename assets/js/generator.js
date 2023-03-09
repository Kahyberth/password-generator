let generator = (length, letter, number, symbol) => {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const symbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "[",
    "]",
    "{",
    "}",
  ];

  let password = "";

  if (length >= 8 && length <= 16) {
    for (let i = 1; i <= length; i++) {
      if (number && symbol === true) {
        op = Math.floor(Math.random() * 3);
      } else if (number === true && symbol === false) {
        op = Math.floor(Math.random() * 2);
      } else if (number === false && symbol === true) {
        op = Math.floor(Math.random() * 3);
        if (op === 1) {
          op = 2;
        }
      } else {
        op = 0;
      }
      switch (op) {
        case 0:
          letter === true
            ? (password +=
                letters[
                  Math.floor(Math.random() * letters.length)
                ].toUpperCase())
            : (password += letters[Math.floor(Math.random() * letters.length)]);
          break;
        case 1:
          number === true
            ? (password += numbers[Math.floor(Math.random() * numbers.length)])
            : password;
          break;
        case 2:
          symbol === true
            ? (password += symbols[Math.floor(Math.random() * symbols.length)])
            : password;
          break;
      }
    }
  }

  return password;
};

//Document

const generateBtn = document.querySelector("#generate");

const passwordText = document.querySelector("#password");

const chk1 = document.querySelector("#letter");

const chk2 = document.querySelector("#number");

const chk3 = document.querySelector("#symbol");

const length = document.querySelector("#passwordLength");


let boolLetter = false, boolNumber = false, boolSymbol = false;
  
let c1 = 0, c2 = 0, c3 = 0;
chk1.addEventListener('click', () => {
  c1++;
  boolLetter = true;
  c1%2===0 ? boolLetter = false : boolLetter = true
});

chk2.addEventListener('click', () => {
  c2++;
  boolNumber = true;
  c2%2===0 ? boolNumber = false : boolNumber = true
})

chk3.addEventListener('click', () => {
  c3++;
  boolSymbol = true;
  c3%2===0 ? boolSymbol = false : boolSymbol = true
})


generateBtn.addEventListener("click", () => {
    
    if( parseInt(length.value) < 8 || parseInt(length.value) > 16) {
      passwordText.placeholder = "Error: Please (8 or 16 characters) "
      length.value = 0;
    } else {
      passwordText.value = generator(parseInt(length.value),boolLetter,boolNumber,boolSymbol);
    }
});
