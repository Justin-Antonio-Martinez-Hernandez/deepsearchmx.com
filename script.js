// ===============================
// CONFIGURACIÓN DEEP SEARCH
// ===============================

// Google Client ID (para login con Google si lo usas)
const googleClientId = '1060237405695-v3sgkhm66lcbeshb7tq21cs46ih8epiv.apps.googleusercontent.com';

// Configuración EmailJS
const emailJsConfig = {
    service_id: 'service_n844fiv',
    template_id: 'template_a6qb2tb',
    public_key: 'yTowpQuz0iMmDl3'
};

// ===============================
// INICIALIZAR EMAILJS
// ===============================

(function () {
    emailjs.init(emailJsConfig.public_key);
})();


// ===============================
// FORMULARIO DE CONTACTO
// ===============================

function enviarMensaje(event) {

    event.preventDefault();

    const parametros = {

        nombre: document.getElementById("nombre").value,

        email: document.getElementById("email").value,

        mensaje: document.getElementById("mensaje").value

    };

    emailjs.send(
        emailJsConfig.service_id,
        emailJsConfig.template_id,
        parametros
    )
    .then(function () {

        alert("Mensaje enviado correctamente");

        document.getElementById("contactForm").reset();

    })
    .catch(function (error) {

        alert("Error al enviar el mensaje");

        console.log(error);

    });

}
