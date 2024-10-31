// Variables para las unidades
let distanceUnit = 'NM'; // Millas náuticas por defecto
let speedUnit = 'kt'; // Nudos por defecto
let timeUnit = 'min'; // Minutos por defecto

// Función para mostrar el formulario correspondiente
function showForm(form) {
    document.getElementById('distanceForm').style.display = 'none';
    document.getElementById('timeForm').style.display = 'none';
    document.getElementById('speedForm').style.display = 'none';

    if (form === 'distance') {
        document.getElementById('distanceForm').style.display = 'block';
    } else if (form === 'time') {
        document.getElementById('timeForm').style.display = 'block';
    } else if (form === 'speed') {
        document.getElementById('speedForm').style.display = 'block';
    }

    document.getElementById('result').textContent = 'Resultado: --';
}

// Funciones para definir las unidades seleccionadas
function setDistanceUnit(unit) {
    distanceUnit = unit;
}

function setSpeedUnit(unit) {
    speedUnit = unit;
}

function setTimeUnit(unit) {
    timeUnit = unit;
}

// Función para calcular la distancia
function calculateDistance() {
    let speed = parseFloat(document.getElementById('speedDistance').value);
    let time = parseFloat(document.getElementById('timeDistance').value);

    if (isNaN(speed) || isNaN(time) || speed <= 0 || time <= 0) {
        document.getElementById('result').textContent = 'Por favor, ingrese valores válidos.';
        return;
    }

    if (timeUnit === 'min') {
        time = time / 60; // Convertir minutos a horas
    }

    let distance = speed * time;
    document.getElementById('result').textContent = `Distancia: ${distance.toFixed(2)} ${distanceUnit}`;
}

// Función para calcular el tiempo
function calculateTime() {
    let distance = parseFloat(document.getElementById('distanceTime').value);
    let speed = parseFloat(document.getElementById('speedTime').value);

    if (isNaN(distance) || isNaN(speed) || distance <= 0 || speed <= 0) {
        document.getElementById('result').textContent = 'Por favor, ingrese valores válidos.';
        return;
    }

    let time = distance / speed;
    if (timeUnit === 'min') {
        time = time * 60; // Convertir horas a minutos
    }

    document.getElementById('result').textContent = `Tiempo: ${time.toFixed(2)} ${timeUnit}`;
}

// Función para calcular la velocidad
function calculateSpeed() {
    let distance = parseFloat(document.getElementById('distanceSpeed').value);
    let time = parseFloat(document.getElementById('timeSpeed').value);

    if (isNaN(distance) || isNaN(time) || distance <= 0 || time <= 0) {
        document.getElementById('result').textContent = 'Por favor, ingrese valores válidos.';
        return;
    }

    if (timeUnit === 'min') {
        time = time / 60; // Convertir minutos a horas
    }

    let speed = distance / time;
    document.getElementById('result').textContent = `Velocidad: ${speed.toFixed(2)} ${speedUnit}`;
}

// Función para reiniciar cálculos
function resetCalculations() {
    document.getElementById('speedDistance').value = '';
    document.getElementById('timeDistance').value = '';
    document.getElementById('distanceTime').value = '';
    document.getElementById('speedTime').value = '';
    document.getElementById('distanceSpeed').value = '';
    document.getElementById('timeSpeed').value = '';

    document.getElementById('result').textContent = 'Resultado: --';
    document.getElementById('distanceForm').style.display = 'none';
    document.getElementById('timeForm').style.display = 'none';
    document.getElementById('speedForm').style.display = 'none';
}
