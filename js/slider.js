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