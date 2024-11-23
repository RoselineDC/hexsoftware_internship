const codeElement = document.querySelector('.code');

// Sample code lines to simulate typing
const codeLines = [
    "const user = 'Roseline';",
    "function code() {",
    "  console.log('Coding in progress...');",
    "}",
    "code();",
];

// Add lines to the screen dynamically
let currentLine = 0;

function typeCode() {
    if (currentLine < codeLines.length) {
        codeElement.innerHTML += codeLines[currentLine] + '\n';
        currentLine++;
        setTimeout(typeCode, 800); // Adjust speed of typing
    }
}

window.onload = typeCode;

