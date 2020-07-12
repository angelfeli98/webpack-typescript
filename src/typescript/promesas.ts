import './styles.css';
// import img from './assets/foto2.png';

console.log('Inicio');

const promesa = new Promise((relsolve, reject) => {
    setTimeout(() => {
        relsolve(Promise.reject('Hola'))
    }, 1000);
})

promesa.then((promesa) => {
    return promesa
}).then(console.log)
    .catch(console.log)



console.log('Final');