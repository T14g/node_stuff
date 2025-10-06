import { readFile as readfile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Will be paused until the file is read
// Promises are cleaner than callbacks
// Use async/await when you can
async function readFiles() { 
    try {
        const greet = await readfile(__dirname + '/greet.txt', 'utf8');
        console.log(greet)
    }catch(err) {
        console.log('Error: ', err);
    }
}

readFiles();
// Using promises and async/await
console.log('Done!'); // this will execute before the asynchronous file read is complete