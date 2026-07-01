function cargarModelos(){
  const modelo = document.getElementById("modelo");
  modelo.innerHTML = "";
  PLANTILLAS.forEach(p=>{
    const opt=document.createElement("option");
    opt.value=p.id;
    opt.textContent=p.nombre;
    opt.dataset.cat=p.cat;
    modelo.appendChild(opt);
  });
}
function filtrarModelos(){
  const q=document.getElementById("busqueda").value.toLowerCase();
  const cat=document.getElementById("categoria").value;
  const modelo=document.getElementById("modelo");
  modelo.innerHTML="";
  PLANTILLAS.filter(p=>(cat==="todas"||p.cat===cat) && p.nombre.toLowerCase().includes(q))
    .forEach(p=>{
      const opt=document.createElement("option");
      opt.value=p.id; opt.textContent=p.nombre; modelo.appendChild(opt);
    });
}
function generarPlantilla(){
  const modelo=document.getElementById("modelo").value;
  const ancho=Number(document.getElementById("ancho").value);
  const alto=Number(document.getElementById("alto").value);
  const prof=Number(document.getElementById("prof").value);
  let data,nombre=modelo;

  switch(modelo){
    case "caja-simple": data=cajaSimple(ancho,alto,prof); break;
    case "caja-tapa": data=cajaConTapa(ancho,alto,prof); break;
    case "caja-auto": data=cajaAutomontable(ancho,alto,prof); break;
    case "caja-pizza": data=cajaPizza(ancho,alto,prof); break;
    case "pillow": data=cajaAlmohada(ancho,alto,prof); break;
    case "piramide": data=cajaPiramide(ancho,alto,prof); break;
    case "hexagonal": data=cajaHexagonal(ancho,alto,prof); break;
    case "bolsa-asas": data=bolsaAsas(ancho,alto,prof); break;
    case "sobre": data=sobreProfesional(ancho,alto,prof); break;
    case "sobre-tarjeta": data=sobreTarjeta(ancho,alto,prof); break;
    case "sobre-cuadrado": data=sobreCuadrado(ancho,alto,prof); break;
    case "etiqueta-rect": data=etiquetaRect(ancho,alto); break;
    case "etiqueta-redonda": data=etiquetaRedonda(ancho); break;
    case "etiqueta-oval": data=etiquetaOval(ancho,alto); break;
    case "tag-perforado": data=tagPerforado(ancho,alto); break;
    default: alert("Modelo no encontrado"); return;
  }

  document.getElementById("estado").textContent = "Generado";
  mostrarSVG(data,nombre);
}
function resetear(){
  document.getElementById("ancho").value=70;
  document.getElementById("alto").value=90;
  document.getElementById("prof").value=30;
  document.getElementById("resultado").innerHTML='<p class="empty">Todavía no generaste ninguna plantilla.</p>';
}
window.addEventListener("load", cargarModelos);
