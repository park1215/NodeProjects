var t = 'hello world';
// console.log(t);

const os = require('os');
const url = require('url')
// console.log(os.cpus())

// console.log(url.parse('https://www.youtube.com/watch?v=9ueu3z2yu-k&list=PL9kzervdzKxy-c7UQgZbnZIr14DCPM87j&index=3'))

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(testArray)

testArray = testArray.filter((item)=>item > 4
)
// console.log(testArray)

const fs = require('fs')

const file = fs.readFileSync('2.js')
// console.log(file.toString('utf8'))

// console.log("A")
fs.readFile('2.js', 'utf8', (error, result) =>{
    // console.log(error);
    // console.log(result);
});
// console.log("B")

process.on('exit', (code) =>{
    console.log('good bye');
    console.log(code);
})

console.log('in process');

process.on('uncaughtException', (error) => {
    console.log('exception occurred');

})
error.error.error();