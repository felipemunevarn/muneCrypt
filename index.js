let charsToEncrypt = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}

let charsToDecrypt = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
}

let inputText = document.querySelector(".input");
let outputText = document.querySelector(".output");

function encrypt(e) {
    let string = inputText.value;
    string = string.replace(/[aeiou]/g, m => charsToEncrypt[m]);
    outputText.value = string;
    e.preventDefault();
}

function decrypt(e) {
    let string = inputText.value;
    string = string.replace(/ai|enter|imes|ober|ufat/g, m => charsToDecrypt[m]);
    outputText.value = string;
    e.preventDefault();
}

function copy(e) {
    outputText.select();
    navigator.clipboard.writeText(outputText.value);
    e.preventDefault();
}

let encryptButton = document.querySelector(".encrypt");
encryptButton.onclick = encrypt;

let decryptButton = document.querySelector(".decrypt");
decryptButton.onclick = decrypt;

let copyButton = document.querySelector(".copyButton");
copyButton.onclick = copy;