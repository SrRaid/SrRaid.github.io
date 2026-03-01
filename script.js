/* --- CONFIGURACIÓN DE PROTOCOLOS --- */
const statusNames = {
    red: "SISTEMA CRÍTICO",
    blue: "PROTOCOLO GHOST",
    green: "INFILTRACIÓN",
    purple: "SOBRECARGA NEÓN",
    gray: "MODO SIGILO",
    orange: "ALERTA NARANJA",
    cyan: "NÚCLEO FRÍO",
    pink: "FRECUENCIA VULCANO"
};

/* --- CAMBIADOR DE TEMAS TOTAL --- */
function setTheme(color) {
    // Aplicar el atributo al body (el CSS hará el resto)
    document.body.setAttribute('data-theme', color);
    
    // Guardar preferencia en el navegador
    localStorage.setItem('raid-ghost-theme', color);
    
    // Actualizar el texto de estado en el Header
    const statusText = document.getElementById('status-name');
    if (statusText) {
        statusText.innerText = statusNames[color] || "ACTIVO";
        statusText.style.color = "var(--primary)";
    }

    // Log de consola con estilo
    console.log(`%c [!] PROTOCOLO ${color.toUpperCase()} INICIADO `, `background: #222; color: ${getColorHex(color)}; font-weight: bold;`);
}

// Función auxiliar para los logs de consola
function getColorHex(color) {
    const colors = { red: '#ff0000', blue: '#0088ff', green: '#00ff44', purple: '#bc13fe', orange: '#ff8800', cyan: '#00ffff', pink: '#ff00ff' };
    return colors[color] || '#fff';
}

/* --- MOTOR DE BÚSQUEDA GHOST --- */
const buscador = document.getElementById('buscador');
const links = document.querySelectorAll('.lista a');
const counter = document.getElementById('count'); // Asegúrate de tener <span id="count"></span> en tu HTML

if (buscador) {
    buscador.addEventListener('input', () => {
        const term = buscador.value.toLowerCase().trim();
        let visibleCount = 0;

        links.forEach(link => {
            const text = link.innerText.toLowerCase();
            if (text.includes(term)) {
                link.classList.remove('hidden');
                visibleCount++;
            } else {
                link.classList.add('hidden');
            }
        });

        // Actualizar contador si existe
        if (counter) counter.innerText = visibleCount;
    });
}

/* --- CARGA INICIAL (PERSISTENCIA) --- */
window.onload = () => {
    // Recuperar el último tema usado o poner Rojo por defecto
    const savedTheme = localStorage.getItem('raid-ghost-theme') || 'red';
    setTheme(savedTheme);
    
    // Si tienes un contador inicial, esto lo actualiza
    if (counter) counter.innerText = links.length;
};

/* --- EFECTO DE SONIDO (OPCIONAL - TIPO CLICK GHOST) --- */
// Si quieres que los botones suenen, puedes añadir un audio pequeño aquí.
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        // Aquí podrías poner un sonido de "beep" muy corto
    });
});
