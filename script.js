// function encrypt() {
//     const inputText = document.getElementById('inputText').value;
//     const shift = parseInt(document.getElementById('shift').value);

//     const encryptedText = shiftText(inputText, shift);

//     document.getElementById('outputText').value = encryptedText;
// }

// function shiftText(text, shift) {
//     return text.replace(/[a-zA-Z]/g, (char) => {
//         let code = char.charCodeAt(0);
//         let offset = code >= 65 && code <= 90 ? 65 : 97;
//         return String.fromCharCode(((code - offset + shift) % 26) + offset);
//     });
// }

function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);

    const encryptedText = shiftText(inputText, shift);
    document.getElementById('outputText').value = encryptedText;
    document.getElementById('inputText').value = '';
}

function decrypt() {
    const inputText = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);

    // Para desencriptar, usamos el desplazamiento negativo
    const decryptedText = shiftText(inputText, -shift);
    document.getElementById('outputText').value = decryptedText;
}

function shiftText(text, shift) {
    return text.replace(/[a-zA-Z]/g, (char) => {
        let code = char.charCodeAt(0);

        // Determine if it's uppercase (65-90) or lowercase (97-122)
        let base = code >= 65 && code <= 90 ? 65 : 97;

        // Calculate new code, ensuring it wraps around using modulo
        let shiftedCode = ((code - base + shift + 26) % 26) + base;

        return String.fromCharCode(shiftedCode);
    });
}

