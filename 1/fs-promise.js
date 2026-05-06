const fs = require("node:fs/promises")

    console.log("Leyendo el primer archivo")
    fs.readFile("./archivo1.txt", "utf-8").then(text=>{console.log(text)})

    console.log("------> Hacer cosas mientras lee los archivos")

    console.log("Leyendo el segundo archivo")
    fs.readFile("./archivo2.txt", "utf-8").then(text=>{console.log(text)})