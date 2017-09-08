var fs = require('fs');

fs.readFile('big.txt', 'utf-8', function (err, data) {
    console.log('Big text ended');
});

fs.readFile('small.txt', 'utf-8', function (err, data) {
    console.log('Small text ended');
});

fs.readFile('medium.txt', 'utf-8', function (err, data) {
    console.log('medium text ended');
});