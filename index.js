// console.log('Hello world');

/* RUNTINE */
// global.luckyNum = '23';

// console.log(global.luckyNum);
// console.log(process.platform);
// console.log(process.env.USER);

/* EVENTS */
// const { EventEmitter } = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('my_event', () => {
//   console.log('data received successfully.');
// });

// eventEmitter.emit('my_event');
// eventEmitter.emit('my_event');
// eventEmitter.emit('my_event');
// eventEmitter.emit('my_event');

/* FILE SYSTEM */
/*Example 1 
const { readFile, readFileSync } = require('fs');

const txt = readFileSync('./hello.txt', 'utf-8')

readFile('./hello.txt', 'utf-8', (err, txt) =>{
    console.log(txt);
})

console.log("Lo haré pronto");*/
/*Example 2
const { readFile } = require('fs').promises;

async function hello() {
    const file = await readFile('./hello.txt', 'utf-8');
    console.log(file)

}

hello();*/

/* MODULES */

// const myModule = require('./my-module');

// console.log(myModule);

const express = require('express');
const { readFile } = require('fs').promises;

const app = express();

app.get('/', async (request, response) =>{
    response.send(await readFile('/home.html', 'utf-8'));
    // readFile('./home.html', 'utf-8', (err, html)=>{
    //     if(err){
    //         response.status(500).send('Sorry, no funciona')
    //         console.log(err);
    //     }
    //     response.send(await readFile('/home.html', 'utf-8'));
    // })
})

app.listen(process.env.PORT || 3000, ()=> console.log('App available on http://localhost:3000'))