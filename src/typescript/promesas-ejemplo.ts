import './styles.css';
// import img from './assets/foto2.png';

const retirarDinero = (montoRetirar: number): Promise<string> => {
    let dineroActual = 1000;

    return new Promise((resolve, reject) => {
        if(montoRetirar <= dineroActual)
            resolve('Dinero retirado exitosamente')
        reject('Dinero insuficiente')
    })
}

console.log('Primero');

retirarDinero(1200).then(console.log).catch(console.log);

console.log('Fin');

