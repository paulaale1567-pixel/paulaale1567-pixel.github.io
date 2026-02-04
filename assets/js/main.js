// Efecto de scroll suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mensaje de bienvenida en consola (un detalle para reclutadores que miren el código)
console.log("¡Hola! Gracias por visitar mi portafolio. Soy Alejandra, futura Estadística.");