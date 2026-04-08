// Nombres de meses y días en español
const MESES = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const DIAS_SEMANA = [
    "Domingo", "Lunes", "Martes", "Miércoles",
    "Jueves", "Viernes", "Sábado"
];

// Referencias a elementos del HTML
const elGrid      = document.getElementById('dates');
const elMes       = document.getElementById('month');
const elAnio      = document.getElementById('year');
const elBtnPrev   = document.getElementById('prev-month');
const elBtnNext   = document.getElementById('next-month');
const elHoyLabel  = document.getElementById('today-label');

// Estado: mes y año que se muestra actualmente
const hoy = new Date();
let mesActual  = hoy.getMonth();
let anioActual = hoy.getFullYear();

// Feriados fijos (formato: "día-mes" donde mes va de 0 a 11)
const FERIADOS = {
    "1-0":   "Año Nuevo",
    "24-2":  "Día Nacional de la Memoria por la Verdad y la Justicia",
    "2-3":   "Día del Veterano y de los Caídos en la Guerra de Malvinas",
    "1-4":   "Día del Trabajador",
    "25-4":  "Día de la Revolución de Mayo",
    "20-5":  "Paso a la Inmortalidad del Gral. Manuel Belgrano",
    "9-6":   "Día de la Independencia",
    "17-7":  "Paso a la Inmortalidad del Gral. José de San Martín",
    "12-9":  "Día del Respeto a la Diversidad Cultural",
    "20-10": "Día de la Soberanía Nacional",
    "8-11":  "Inmaculada Concepción de María",
    "25-11": "Navidad"
};

// Devuelve true si el año es bisiesto
function esAnioBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

// Devuelve la cantidad de días de un mes
function obtenerDiasDelMes(mes, anio) {
    const diasPorMes = [31, esAnioBisiesto(anio) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return diasPorMes[mes];
}

// Dibuja todos los días del mes en la grilla
function renderizarCalendario(mes, anio) {
    elMes.textContent  = MESES[mes];
    elAnio.textContent = anio;
    elGrid.innerHTML = '';

    // Calcular en qué día de la semana cae el 1ro (ajustado para que Lunes = 0)
    let primerDia = new Date(anio, mes, 1).getDay();
    primerDia = primerDia === 0 ? 6 : primerDia - 1;

    const totalDias = obtenerDiasDelMes(mes, anio);
    const esEsteMes = (hoy.getMonth() === mes && hoy.getFullYear() === anio);

    // Celdas vacías antes del día 1
    for (let i = 0; i < primerDia; i++) {
        const celda = document.createElement('div');
        celda.classList.add('day', 'day--empty');
        elGrid.appendChild(celda);
    }

    // Crear una celda por cada día del mes
    for (let dia = 1; dia <= totalDias; dia++) {
        const celda = document.createElement('div');
        celda.classList.add('day');
        celda.textContent = dia;

        // Marcar fines de semana
        const diaSemana = (primerDia + dia - 1) % 7;
        if (diaSemana === 5 || diaSemana === 6) {
            celda.classList.add('day--weekend');
        }

        // Marcar día actual
        if (esEsteMes && dia === hoy.getDate()) {
            celda.classList.add('day--today');
        }

        // Marcar feriado y agregar tooltip
        const claveFeriado = `${dia}-${mes}`;
        if (FERIADOS[claveFeriado]) {
            celda.classList.add('day--holiday');
            const tooltip = document.createElement('span');
            tooltip.classList.add('day__tooltip');
            tooltip.textContent = FERIADOS[claveFeriado];
            celda.appendChild(tooltip);
        }

        elGrid.appendChild(celda);
    }
}

// Muestra la fecha de hoy en el subtítulo
function actualizarLabelHoy() {
    const nombreDia = DIAS_SEMANA[hoy.getDay()];
    const numeroDia = hoy.getDate();
    const nombreMes = MESES[hoy.getMonth()];
    const anio      = hoy.getFullYear();
    elHoyLabel.textContent = `Hoy es ${nombreDia}, ${numeroDia} de ${nombreMes} de ${anio}`;
}

// Navegación: mes anterior
elBtnPrev.addEventListener('click', () => {
    mesActual--;
    if (mesActual < 0) {
        mesActual = 11;
        anioActual--;
    }
    renderizarCalendario(mesActual, anioActual);
});

// Navegación: mes siguiente
elBtnNext.addEventListener('click', () => {
    mesActual++;
    if (mesActual > 11) {
        mesActual = 0;
        anioActual++;
    }
    renderizarCalendario(mesActual, anioActual);
});

// Iniciar el calendario
actualizarLabelHoy();
renderizarCalendario(mesActual, anioActual);
