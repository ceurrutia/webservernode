// ----- Armo el HEADER para todas las páginas, incluye btn y menu hamburguesa para máximo 768px -----
var elem = document.getElementById("idheader");
elem.innerHTML = `
  <div class="header">
    <div id="logo">
        <a href="index.html"><img src="img/logo.png" alt="logo" width="220vw"></a>
    </div>
    <div class="btn-hamb">
      <div class="menu-toggle">
        <div class="menu-icon">
          <div class="line line-1"></div>
          <div class="line line-2"></div>
          <div class="line line-3"></div>
        </div>
      </div>
    </div>    
    <nav>
        <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="https://ceurrutia.github.io/TIF-frontend/" target="_blank">Tienda</a></li>
        <li><a href="novedades.html">Novedades</a></li>
        <li><a href="contacto.html">Contacto</a></li>
        </ul>
    </nav>
  </div>
`

// ----- Para menú hamburguesa activo/no activo -----------
const menuToggle = document.querySelector('.menu-toggle');
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuIcon.classList.toggle('active');
});

menu.addEventListener('click', () => {
  menu.classList.remove('active');
  menuIcon.classList.remove('active');
});


// ----- Armo el FOOTER para todas las páginas -----
var elem = document.getElementById("idfooter");
elem.innerHTML = `
  
<p><strong>Codo a Codo 4.0 -Primer cuatrimestre 2023 - Cecilia Urrutia, Fernando Jaleh</strong></p>
`


// ----- Validación para la pagina de contacto -----
function validarEmail() {
  let valor = document.getElementById('InputEmail').value;
  // Expresión regular para validar el correo electrónico
  var regex = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*[.]([a-z]{2,3})$/;
  if (regex.test(valor)){
    //alert("La dirección de email " + valor + " es correcta.");
    return true;
  } else {
    document.getElementById('InputEmail').focus();
    alert("La dirección de email " + valor + " es incorrecta.");
    return false;
  }
}


