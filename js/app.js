
const text = document.querySelector(".text");
const message = document.querySelector(".message");

function btnEncryptar() {
  const encryptedText = encryptar(text.value);
  message.value = encryptedText;
  text.value = "";
}

function encryptar(encryptedString) {
  let matrixCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  encryptedString = encryptedString.toLowerCase();

  for (let i = 0; i < matrixCode.length; i++) {
    if (encryptedString.includes(matrixCode[i][0])) {
      encryptedString = encryptedString.replaceAll(
        matrixCode[i][0],
        matrixCode[i][1]
      );
    }
  }

  return encryptedString;
}


function btnDecryptar(){
  const decryptText=decryptar(text.value);
  message.value=decryptText;

  text.value="";
}
function decryptar(decryptString) {
  let matrixCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  decryptString = decryptString.toLowerCase();

  for (let i = 0; i < matrixCode.length; i++) {
    if (decryptString.includes(matrixCode[i][1])) {
      decryptString = decryptString.replaceAll(
        matrixCode[i][1],
        matrixCode[i][0]
      );
    }
  }

  return decryptString;
}

function copiar() {
  if (message.value !== "") {
    message.select();
    message.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(message.value);

   

    message.value = "";
  }
}