const formulario = document.getElementById('contacto-form');

if (formulario) {
    formulario.addEventListener('submit', function(event) {

        if (!this.checkValidity()) {
            return;
        }

        alert("Mensaje enviado. ¡Gracias por contactarnos!");
    });
}


document.getElementById("masreseñas").onclick = function () {
    const ocultas = document.querySelectorAll(".oculto");
    
    ocultas.forEach(r => r.classList.remove("oculto"));
    
    this.style.display = "none";
};

