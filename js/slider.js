(function() {

    const sliders = [...document.querySelectorAll('.testimonio__body')];
    const botonSiguiente = document.querySelector('#siguiente');
    const botonAntes = document.querySelector('#antes');

    let value;

    botonSiguiente.addEventListener('click', ()=>{
        changePosition(1);
    });

    botonAntes.addEventListener('click', ()=>{
        changePosition(-1);
    })

    const changePosition = (add)=>{
        const currentTestimoniales = document.querySelector('.testimonio__body--show').dataset.id
        value = Number(currentTestimoniales);
        value+= add

        sliders[Number(currentTestimoniales)-1].classList.remove('testimonio__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('testimonio__body--show');
    }
})();

    // Formulario

    const botonEnviar = document.querySelector('.boton__campos');
    botonEnviar.addEventListener('click', function(e) {
        console.log(e);
        e.preventDefault();

        console.log('Enviando Formualario');
    });

// Inputs

const datos = {
    nombre: '',
    telefono: '',
    email: ''
}

const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');

nombre.addEventListener('input', Texto);
telefono.addEventListener('input', Texto);
email.addEventListener('input', Texto);

function Texto(e) {
    datos[e.target.id] = e.target.value;

    console.log(datos);
}    