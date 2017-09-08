var fs = require('fs');

console.log('Hello from start of file');
var text = fs.readFileSync('text.txt', 'utf-8');
console.log('Hello from middle of file');
console.log(text);


