const fsPromises = require('fs').promises;

async function main() {
    const fileHandle = await fsPromises.open('testFile.txt', 'r');
    const fileData = await fileHandle.readFile('utf-8');
    const lines = fileData.split('\n');
    lines.forEach( function (value, index) {
        if (index < 1) return;
        if(!value.includes('OK')) {
            console.log('Line with error id: ', value.substr(0, 9));
        }
    });
}

try {
 main();
}
catch (e) {
 console.log("There was an error... ", e);
}