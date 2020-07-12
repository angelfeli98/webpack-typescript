import './styles.css';
// import img from './assets/foto2.png';

const getEdad = (edad: number) => {
    return edad + 10;
}

const nombre  = 'Felipe';
const edad = 21;
const apellido = 'Regalado';

const salidas = `
${nombre}
${apellido}
(${getEdad(edad)})`;

console.log(salidas);