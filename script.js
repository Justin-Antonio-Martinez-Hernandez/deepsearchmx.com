// ===============================
// CONFIGURACIÓN DEEP SEARCH
// ===============================

const emailJsConfig = {

    service_id: "service_wkag145",

    template_id: "template_a6qb2tb",

    public_key: "WHqOPUlHcTTxGIlHt"

};


// ===============================
// INICIALIZAR EMAILJS
// ===============================

document.addEventListener("DOMContentLoaded", function(){

    emailjs.init(emailJsConfig.public_key);

});


// ===============================
// VALIDAR EMAIL
// ===============================

function esEmailValido(email){

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}


// ===============================
// SUSCRIPCIÓN PRINCIPAL
// ===============================

function suscribirse(event){

    event.preventDefault();

    const input = document.getElementById("email");

    const email = input.value.trim();

    const boton = event.target.querySelector("button");

    // Validar email

    if(!esEmailValido(email)){

        alert("Por favor ingresa un correo válido");

        return;

    }

    // Desactivar botón mientras envía

    boton.disabled = true;

    boton.innerText = "Enviando...";


    const parametros = {

        email: email,

        fecha: new Date().toLocaleString(),

        origen: "El Abismo — Suscripción"

    };


    // Enviar email

    emailjs.send(

        emailJsConfig.service_id,

        emailJsConfig.template_id,

        parametros

    )

    .then(function(){

        console.log("Correo enviado correctamente");

        // Limpiar input

        input.value = "";

        // Redirigir

        window.location.href = "gracias.html";

    })

    .catch(function(error){

        console.error("Error:", error);

        alert("Error al enviar. Intenta otra vez.");

        boton.disabled = false;

        boton.innerText = "Suscribirse";

    });

}
