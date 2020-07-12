//import './styles.css';
// import img from './assets/foto2.png';

//class Avenger{
//
//    private nombre: string;
//    private edad: number;
//    private poder: string;
//
//    constructor(private nombre: string,
//                private edad: number,
//                private poder: string
//     ){}
//
//    public get saludo(){
//        return `Hola soy ${this.nombre}`
//    }
//}

class Avenger{

    private nombre: string;
    private edad: number;
    private poder: string;

    constructor(nombre: string, edad: number, poder: string){
        this.nombre = nombre;
        this.edad = edad;
        this.poder = poder;
    }

    public get saludo(){
        return `Hola soy ${this.nombre}`
    }
}

const antman = new Avenger('Atman', 21, 'Cambiar de tamaño');

const saludo = antman.saludo
console.log(saludo)

console.log(Avenger.prototype);