import './styles.css';
// import img from './assets/foto2.png';

interface Xmen{
    nombre: String,
    edad: number,
    poder ?: String
}

const enviarMision = (xmen : Xmen) => {
    console.log(`Enviando ${xmen.nombre} a la mision`);
}

const regresarMison = (xmen: Xmen) => {
    console.log(`${xmen.nombre} ha regresado de la mision mision`);
}

const xmen: Xmen = {
    nombre: 'Logan',
    edad: 60
}

enviarMision(xmen);

const crearXmen = (nombre: string, edad: number, poder?:string) => {
    const nuevoXmen: Xmen = {
        nombre ,
        edad,
        poder
    }

    return nuevoXmen;
}

