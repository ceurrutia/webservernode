// ----- Interacción con la API de JIKAN V4  -----
const uri = 'https://api.jikan.moe/v4/anime?q=';

var btnSearch = document.getElementById("btnSearch");
btnSearch.style.cursor="pointer";
btnSearch.addEventListener("click", getData);  
  
//document.getElementById("searchTitulo").focus();

// Llamada en el onload del <body> de index.html 
// Hago una búsqueda en falso para cargar con data el contenedor de resultado de búsquedas 
function initListAnime() {
  document.getElementById("searchTitulo").value = "Bleach";
  getData();
  document.getElementById("searchTitulo").value = "";
}
 
function getData() {
  
  // Primero que nada borro todo lo que tenga el div "list-anime", para luego crear los divs con el resultado de la búsqueda
  blanqueoDivListAnime();

  const nombrePelicula = document.getElementById("searchTitulo").value;

  const buscarPeli = uri + nombrePelicula + "&limit=3";
  //alert(buscar);
    
  fetch(buscarPeli)
    .then(response => response.json())
    .then(json => {
      if (json){
        //console.clear();
        console.log(json);
        if (json.data.length == 0){
            noHayResultados();
            //alert("No encontró nada");  
        }else{
          for (elem in json.data)
            muestroData(json.data[elem]);
        } 
    }})
  .catch(error => alert(error));
}


// Borro todo lo que tenga el div list-anime para luego crear lo nuevo con el resultado de la búsqueda  
function blanqueoDivListAnime() {
  const divResultados = document.getElementById('list-anime');
  while (divResultados.firstChild){
    try{
      divResultados.removeChild(divResultados.firstChild);
    }catch(error){
      console.log(error);
    }
  };
}

function noHayResultados()
{
  const animeDataH1 = document.createElement('h1');
  animeDataH1.textContent = "No se encontraron animes";
  document.getElementById('list-anime').appendChild(animeDataH1);
}

// Armo divs con el resultado de la búsqueda
function muestroData(elemento){
  /*
  console.log("Imagen: " + elemento.images.jpg.image_url);
  console.log("Título: " + elemento.title);        
  console.log("URL: " + elemento.url);
  console.log("ID: " + elemento.mal_id);
  console.log("Año: " + elemento.year);
  console.log("Duración: " + elemento.duration);
  console.log("Clasificación: " + elemento.rating);
  console.log("Ranking: " + elemento.rank);

  let generos = "";
  for(let i=0;i<elemento.genres.length;i++)
  {
    generos += elemento.genres[i].name + " / ";
  }
  console.log("Género/s: " + generos.substring(0,generos.length-3));

  let productores = "";
  for(let i=0;i<elemento.producers.length;i++)
  {
    productores += elemento.producers[i].name + " / ";
  }
  console.log("Productor/es: " + productores.substring(0,productores.length-3));
 
  let licencias = "";
  for(let i=0;i<elemento.licensors.length;i++)
  {
    licencias += elemento.licensors[i].name + " / ";
  }
  console.log("Licencia/s: " + licencias.substring(0,licencias.length-3));
      
  console.log("Trailer: " + elemento.trailer.embed_url);
  console.log("Resumen: " + elemento.synopsis);
  console.log("Información: " + elemento.background);
  console.log("______________________________________________");
  console.log(" ");
  */

  let estudiosPeli = "";
  for(let i=0;i<elemento.studios.length;i++)
  {
    estudiosPeli += elemento.studios[i].name + " / ";
  }
  if (estudiosPeli != "") 
    // Elimino el último " / "
    estudiosPeli = estudiosPeli.substring(0,estudiosPeli.length-3);
  else
    estudiosPeli = "Sin información";
  
  let anioPeli = "";
  if (elemento.year != null)
    anioPeli = elemento.year;
  else
    anioPeli = "Sin información";

  let trailerPeli = "";
  if (elemento.trailer.embed_url != null)
    trailerPeli = "<p><a href='" + elemento.trailer.embed_url + "' target='_blank'>Ver trailer</a></p>";
  else  
    trailerPeli = "<p>Trailer : Sin información</p>";

  const animeDataDiv = document.createElement('div');
  animeDataDiv.innerHTML = `
    <div class="card-result">
       <img src ="${elemento.images.jpg.image_url}" alt="${elemento.title}">
       <h3>${elemento.title}</h3>
       <p>Estudio/s: ${estudiosPeli}</p>
       <p>Año: ${anioPeli}</p>
       ${trailerPeli}
    </div>
    `;
  
  //alert(animeDataDiv.innerHTML);

  document.getElementById('list-anime').appendChild(animeDataDiv);

}

// ----- Fin interacción API de JIKAN -----
