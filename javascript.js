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


document.getElementById("stylebarbero1").onclick = function () {
    document.getElementById("barbero1").style.border = "1px solid #FFC107";
    document.getElementById("barbero1").style.boxShadow = "0 6px 20px rgba(255, 193, 7, 0.879)";
};

document.getElementById("stylebarbero2").onclick = function () {
    document.getElementById("barbero2").style.border = "1px solid #FFC107";
    document.getElementById("barbero2").style.boxShadow = "0 6px 20px rgba(255, 193, 7, 0.879)";
};

document.getElementById("stylebarbero3").onclick = function () {
    document.getElementById("barbero3").style.border = "1px solid #FFC107";
    document.getElementById("barbero3").style.boxShadow = "0 6px 20px rgba(255, 193, 7, 0.879)";
};