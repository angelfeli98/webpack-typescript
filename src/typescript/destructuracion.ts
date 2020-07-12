import './styles.css';
// import img from './assets/foto2.png';

const avenger = {
    nombre: 'Steve',
    clave: 'Capitan America',
    poder: 'Droga'
}

const pintarHerore = ({nombre, clave, poder}: any) => {
    console.log(nombre);
}

const numeros: string[] = ['uno', 'dos', 'tres', 'cuatro'];

const [uno, dos, tres] = numeros;

console.log(uno);
console.log(dos);
console.log(tres);

const {nombre} = avenger;

pintarHerore(avenger);

console.log(nombre);