// Example of async operaations

// access Database

// connect to an external server

//access file system



// callaback function: is function that will be called after the asynchronous operation terminates
// promises

// async/await

const fs = require('fs');

const fspromises = require ('fs').promises;

/*fs.readFile('./file.txt','utf8', (error,data)=> {
    if(error) {
        console.log( error);
        return;
    }
    console.log(data);
})
console.log('after read file');*/
/*fspromises.readFile('./file.txt', 'utf8') //returns a promise
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.error(error.massage);
});*/
async function readFile(path) {
    try {
        const data = await fspromises.readFile(path, 'utf8');
        console.log(data);
    } catch (error) {
        console.error('Error reading file:', error.message);
    }
}
readFile('./file.txt');
 