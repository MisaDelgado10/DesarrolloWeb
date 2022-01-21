let fs = require("fs")
fs.writeFile("movies.txt","Pelicula1,Pelicula2,Pelicula3",(error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("Archivo creado")
    }
})