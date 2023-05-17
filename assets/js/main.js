const mensaje1 = () => console.log("Primer llamado desde js")
const mensaje2 = () => console.log("Segundo llamado desde js")
const mensaje3 = () => console.log("Tercer llamado desde js")


// setTimeout(mensaje1, 8000)
// setTimeout(mensaje2, 1000)
// setTimeout(mensaje3, 5000)//funcion para intervalos de segundo
    

// mensaje1()
// mensaje2()
// mensaje3()

//Peticion que tarda 6 segundos en responder
const promesa1 = () => {
    return new Promise((resolve, reject) => {    //resolve: caso exitoso   reject: caso no exitoso
        setTimeout(() => {
            resolve("Resultado Promesa 1")
        }, 6000);
    });

}

//Peticion que tarda 10 segundos en responder
    const promesa2 = () => {
        return new Promise((resolve, reject) => {    //resolve: caso exitoso   reject: caso no exitoso
            setTimeout(() => {
                resolve("Resultado Promesa 2")
            }, 10000);
        });
    }

    //Peticion que tarda 1 segundos en responder
        const promesa3 = () => {
            return new Promise((resolve, reject) => {    //resolve: caso exitoso   reject: caso no exitoso
                setTimeout(() => {
                    resolve("Resultado Promesa 3")
                }, 1000);
            });    
}


// Ejemplo de proceso síncrono
const procesoSincrono = async () => {
    const resPromesa1 = await promesa1()
    console.log(resPromesa1);

    const resPromesa2 = await promesa2()
    console.log(resPromesa2);

    const resPromesa3 = await promesa3()
    console.log(resPromesa3);

    return { resPromesa1, resPromesa2, resPromesa3}
}
/// const promesas = procesoSincrono()
// promesas.then(respuesta => {
//     console.log(respuesta);
// })
// console.log("Promesas",promesas);

// Ejemplo de proceso Asíncrono
// const resPromesa1 = promesa1()
// promesa2().then((respuesta) => {
//     console.log(respuesta);
// })

// promesa3().then((respuesta) => {
//     console.log(respuesta);
// })

// // Then funciona para promesas con respuesta exitosa
// resPromesa1.then((respuesta) => {
//     console.log(respuesta);
// })


// Ejemplo de proceso Asíncrono con Promise All
const resPromesa1 = promesa1() //6segundos
const resPromesa2 = promesa2() //12segundos
const resPromesa3 = promesa3() //1segundo


Promise.all([resPromesa1, resPromesa2, resPromesa3]).then(respuesta => {
    console.log(respuesta);
})




