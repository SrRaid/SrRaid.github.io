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
    // Aplicar el atributo al body (el CSS hará el resto con el logo y colores)
    document.body.setAttribute('data-theme', color);
    
    // Guardar preferencia en el navegador
    localStorage.setItem('raid-ghost-theme', color);
    
    // Actualizar el texto de estado en el Header
    const statusText = document.getElementById('status-name');
    if (statusText) {
        statusText.innerText = statusNames[color] || "ACTIVO";
    }

    // Log de consola con estilo (Opcional, se ve cool en F12)
    console.log(`%c [!] PROTOCOLO ${color.toUpperCase()} INICIADO `, `background: #222; color: ${getColorHex(color)}; font-weight: bold;`);
}

// Función auxiliar para los colores de la consola
function getColorHex(color) {
    const colors = { red: '#ff0000', blue: '#0088ff', green: '#00ff44', purple: '#bc13fe', orange: '#ff8800', cyan: '#00ffff', pink: '#ff00ff', gray: '#ffffff' };
    return colors[color] || '#fff';
}

/* --- MOTOR DE BÚSQUEDA GHOST --- */
const buscador = document.getElementById('buscador');
const links = document.querySelectorAll('.lista a');
const counter = document.getElementById('count'); 

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

        // Actualizar el número del contador en tiempo real
        if (counter) counter.innerText = visibleCount;
    });
}

/* --- CARGA INICIAL (PERSISTENCIA) --- */
window.addEventListener('DOMContentLoaded', () => {
    // Recuperar el último tema usado o poner Rojo por defecto
    const savedTheme = localStorage.getItem('raid-ghost-theme') || 'red';
    setTheme(savedTheme);
    
    // Inicializar el contador con el total de links
    if (counter && links.length > 0) {
        counter.innerText = links.length;
    }
});

/* --- EFECTO VISUAL EXTRA (OPCIONAL) --- */
// Añade un pequeño glitch visual al azar cuando pasas el mouse por los links
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.filter = "hue-rotate(90deg) brightness(1.5)";
        setTimeout(() => {
            link.style.filter = "none";
        }, 100);
    });
});
