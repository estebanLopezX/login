const formulario = document.getElementById('formulario');
const correoInput = document.getElementById('correo');
const contrasenaInput = document.getElementById('password');
const mensajeDiv = document.getElementById('mensaje');

const correoCorrecto = 'S.ddocumentalsas@gmail.com';
const contrasenaCorrecta = 'G.documental2024*';

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
   
    const correo = correoInput.value.trim();
    const contrasena = contrasenaInput.value.trim();

    if (correo === correoCorrecto && contrasena === contrasenaCorrecta) {
        mensajeDiv.textContent = 'BIENVENIDO'
        mensajeDiv.style.color = 'green'
        window.location.href = 'principal.html';
    } else {
        mensajeDiv.textContent = 'INCORRECTO!!';
        mensajeDiv.style.color = 'red';
    }
    return false;
});