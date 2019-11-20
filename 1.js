console.log("hello world");

const http = require('http');

// http.createServer((request, response)=>{
//     response.writeHead(200, {'Content-Type':'text/html'});
//     response.end('<h1>Hello World...!</h1>');
// }).listen(52273, function(){
//     console.log('Server running at http://127.0.0.1:52273/');
// });

let a = 10
const b = 20
console.log(a)
console.log(b)

const d = undefined

console.log(`fileName : ${__filename}`)
console.log(`dirName : ${__dirname}`)

console.time('alpha')

let output  = 1
for(let i = 0; i <=10; i++){
    console.log(output*i)
}
// console.log(`Result : ${output}`)

console.timeEnd('alpha')

console.log(process)