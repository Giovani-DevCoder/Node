/*async function promesa(){
    return("Hola")
}

console.log(promesa())*/

/*function obtenerDatos(){
    return new Promise(resolve => {
        setTimeout(() => resolve("Datos listos"), 2000)
    })
}

async function main(){
    try{
        const data = await obtenerDatos();
        console.log(data)
    }catch (error) {
        console.log(error)
    }
}

main()*/

function obtenerUsuario(){
    return new Promise(resolve => {
        setTimeout(() => resolve("Datos del usuario encontrados"),3000)
    })
}
console.log("Buscando datos del usuario, por favor espere...")

async function main(){
    try{
        const data = await obtenerUsuario()
        console.log(data)
    }catch (error){
        console.log(error)
    }
}

main()