let menuVisible = false;
//funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList ="";
    menuVisible = false;
}
//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades= document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Javascript");
        habilidades[1].classList.add("Htmlcss");
        habilidades[2].classList.add("ManejodeCRMyBasesdeDatos");
        habilidades[3].classList.add("AtencionalClienteyFidelización");
        habilidades[4].classList.add("AnálisisFinanciero");
        habilidades[5].classList.add("TrabajoenEquipo");
        habilidades[6].classList.add("Dedicación");
        habilidades[7].classList.add("EstrategiasdeVentayNegociación");
        habilidades[8].classList.add("AprendizajeenProgramación");
        habilidades[9].classList.add("Creatividad");
    }
}

//detecto de scrolling para la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades()
}

document.getElementById('enviar-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
    
    // Obtener los valores de los campos
    let nombre = document.getElementById('nombre').value;
    let telefono = document.getElementById('telefono').value;
    let correo = document.getElementById('correo').value;
    let tema = document.getElementById('tema').value;
    let mensaje = document.getElementById('mensaje').value;

    // Validaciones simples
    if (nombre === '' || telefono === '' || correo === '' || tema === '' || mensaje === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }
     

    // Validación de teléfono (solo números)
    let telefonoRegex = /^[0-9]+$/;
    if (!telefonoRegex.test(telefono)) {
        alert('El teléfono solo debe contener números.');
        return;
    }

    // Validación de correo
    let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
        alert('Por favor, ingrese un correo válido.');
        return;
    }

    // Si todo está bien, mostrar mensaje de éxito
    alert('Mensaje enviado correctamente.');
    
    // Limpiar el formulario después de enviar
    document.getElementById('nombre').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('tema').value = '';
    document.getElementById('mensaje').value = '';
});
