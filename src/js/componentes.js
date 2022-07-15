import '../css/componentes.css';
// import jslogo from '../assets/img/logo-js.png';

export const saludar = (nombre) => {
    console.log('Creando h1');

    const h1 = document.createElement('h1');

    h1.innerText = `Hola ${nombre}`;

    document.body.append(h1);

    //img
   /*  const img = document.createElement('img');
    img.src = jslogo;
    document.body.append(img); */


}