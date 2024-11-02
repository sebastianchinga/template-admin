document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
})

function iniciarApp() {
    dropDown();
    ocultarAside();
}

function dropDown() {
    const boton = document.querySelector('#perfil');
    const card = document.querySelector('#tarjeta');
    boton.addEventListener('click', function() {
        card.classList.toggle('d-none');
        card.classList.toggle('perfil');
        
    })
    
}

function ocultarAside() {
    const menu = document.querySelector('#menu');
    const aside = document.querySelector('#aside');
    menu.addEventListener('click', function() {
        aside.classList.toggle('aside');
        aside.classList.toggle('d-none');
    })
    
}