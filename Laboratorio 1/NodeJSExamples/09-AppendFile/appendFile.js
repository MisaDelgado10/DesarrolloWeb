let fs = require("fs")

let text = process.argv[2]

fs.appendFile("ejemplo.txt",text+",",(error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(text)
    }
})