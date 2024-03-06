//1. Implementar ES6 para toda la estructura del código.
//2. Crear una función asíncrona para obtener los datos de la URL.

//Función asíncrona para el URL: "https://via.placeholder.com/600/92c952"

const getDatos = async () => {
    // URL de la API que proporciona los datos de los álbumes
    const url = 'https://jsonplaceholder.typicode.com/photos'; //?_limit=20
    try {
        // Realizar la solicitud a la URL usando fetch y esperar la respuesta
        const response = await fetch(url);  
        //console.log(response) 
        const datos = await response.json();  // Convertir la respuesta a formato JSON
        console.log("Informacion a procesar: ",datos);
        //Utilizar un método de iteración de arreglos (por ejemplo: forEach) para mostrar solamente los primeros 20 títulos de los datos recibidos.
       // Utilizar slice para obtener solo los primeros 20 elementos de la respuesta
       const primeros20 = datos.slice(0, 20);
        
       // Utilizar un método de iteración de arreglos (por ejemplo: forEach) para mostrar solamente los primeros 20 títulos de los datos recibidos.
       primeros20.forEach(album => {
           console.log(album.title);
       });
       
       return primeros20;
   } catch (error) {
       console.error('Error al obtener los datos:', error);
       throw error;
   }
};
//Crear una función que retorne una promesa después de tres (3) segundos utilizando setTimeout. El mensaje a retornar debe ser un string que indique: “Información Enviada”.

const enviarMensaje = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Información Enviada');
        }, 3000);
    });
};

//Crear una función asíncrona que permita recibir el mensaje de la promesa creada en el anterior requerimiento, de forma directa con await, para ser mostrado en la consola del navegador, agregando el llamado a las dos funciones principales.

//Funcion Main
const main = async () => {
    try {
        const mensaje = await enviarMensaje();
        console.log(mensaje);
        const datos = await getDatos();
        console.log(datos);
    } catch (error) {
        console.error(error);
    }
};

main();





