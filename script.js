// --- LÓGICA DEL BUSCADOR ---
const buscador = document.getElementById('buscador');
const links = document.querySelectorAll('#listaH a');

buscador.addEventListener('input', () => {
    const val = buscador.value.toLowerCase();
    
    links.forEach(link => {
        const text = link.innerText.toLowerCase();
        if (text.includes(val)) {
            link.classList.remove('hidden');
            // Efecto de parpadeo al aparecer (opcional)
            link.style.animation = "text-flicker 0.3s ease";
        } else {
            link.classList.add('hidden');
            link.style.animation = "none";
        }
    });
});

// --- SISTEMA DE TEMAS (GHOST COLORS) ---
function setTheme(color) {
    // Aplicamos el atributo al body para que el CSS cambie las variables --primary
    document.body.setAttribute('data-theme', color);
    
    // Guardamos la elección en el navegador del usuario
    localStorage.setItem('ghost-protocol-theme', color);
    
    // Log de consola estilo terminal (puedes verlo con F12)
    console.log(`:: PROTOCOLO ${color.toUpperCase()} INICIALIZADO ::`);
}

// --- CARGA INICIAL ---
window.onload = () => {
    // Si el usuario ya había elegido un color antes, lo ponemos
    const savedTheme = localStorage.getItem('ghost-protocol-theme') || 'red';
    setTheme(savedTheme);
    
    // Pequeño efecto visual: Imprimir en consola que el sistema está listo
    console.log("%c:: RAID GHOST SYSTEM READY ::", `color: ${savedTheme === 'red' ? 'red' : savedTheme}; font-weight: bold;`);
};
