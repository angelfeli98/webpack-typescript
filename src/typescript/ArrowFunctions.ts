import './styles.css';
// import img from './assets/foto2.png';

const sumar = (a: number, b: number) => a + b;

console.log(sumar(3, 4));

const hulk = {
    nombre: 'Hulk',
    smash(){
        setTimeout(() => {
            console.log(`${this.nombre} smash`);
        }, 1000);
    }
}

hulk.smash();