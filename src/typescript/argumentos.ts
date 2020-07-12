import './styles.css';
// import img from './assets/foto2.png';

const activar = (quien: string, momento?: string, objecto:string = "Batiseñal") =>{
    if(momento)
        console.log(`${quien} Activo la ${objecto} en la ${momento}`);
    else
        console.log(`${quien} Activo la ${objecto}`);
}

activar('Gordon', 'tarde');