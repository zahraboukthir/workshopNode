// console.log('hello')
// console.log(global)
// console.log(__filename)
// console.log(__dirname)

//path
// const path=require("path")
// console.log(path.extname(__filename))
// console.log(path.dirname(__filename))
// console.log(path.parse(__filename))

// file system
// const fs=require("fs")
// console.log(fs)
// Sync
// console.log("start...")
// // const data=fs.readFileSync("file.txt",{encoding:"utf-8"})
// const data=fs.readFileSync("file.txt")
// console.log(data.toString())
// console.log("finish")

//Asyn
// console.log("start...")
// // const data=fs.readFileSync("file.txt",{encoding:"utf-8"})
// fs.readFile("file.txt", (err,data)=>{
// err ? console.log(err):console.log(data.toString())
// })

// console.log("finish...")


// os

const os=require("os")
// console.log(os.cpus())
// console.log(os.arch())
// console.log(os.totalmem())
// console.log(os.freemem())