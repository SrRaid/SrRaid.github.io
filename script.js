// Función para el Buscador
document.getElementById('buscador').addEventListener('input', function(e) {
    let filtro = e.target.value.toLowerCase();
    let enlaces = document.querySelectorAll('#listaH a');

    enlaces.forEach(enlace => {
        let texto = enlace.textContent.toLowerCase();
        if(texto.includes(filtro)) {
            enlace.classList.remove('hidden');
        } else {
            enlace.classList.add('hidden');
        }
    });
});

// Función para cambiar el estilo (Rojo, Azul, Verde)
function setTheme(color) {
    document.body.setAttribute('data-theme', color);
    // Guardar preferencia del usuario
    localStorage.setItem('raid-theme', color);
}

// Cargar tema guardado al iniciar
window.onload = () => {
    const savedTheme = localStorage.getItem('raid-theme') || 'red';
    setTheme(savedTheme);
};
