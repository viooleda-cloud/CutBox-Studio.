function cargarModelos(){
  const modelo=document.getElementById("modelo");modelo.innerHTML="";
  PLANTILLAS.forEach(p=>{const opt=document.createElement("option");opt.value=p.id;opt.textContent=p.nombre;opt.dataset.cat=p.cat;modelo.appendChild(opt);});
}
function filtrarModelos(){
  const q=document.getElementById("busqueda").value.toLowerCase();
  const cat=document.getElementById("categoria").value;
  const modelo=document.getElementById("modelo");modelo.innerHTML="";
  PLANTILLAS.filter(p=>(cat==="todas"||p.cat===cat)&&p.nombre.toLowerCase().includes(q)).forEach(p=>{const opt=document.createElement("option");opt.value=p.id;opt.textContent=p.nombre;modelo.appendChild(opt);});
}
function generarPlantilla(){
  const modelo=document.getElementById("modelo").value;
  const ancho=Number(document.getElementById("ancho").value);
  const alto=Number(document.getElementById("alto").value);
  const prof=Number(document.getElementById("prof").value);
  const material=Number(document.getElementById("material")?.value||0);
  const kerf=Number(document.getElementById("kerf")?.value||0);
  const op={material,kerf};
  let data,nombre=modelo;
  switch(modelo){
    case "caja-simple":data=cajaSimple(ancho,alto,prof,op);break;
    case "caja-tapa":data=cajaConTapa(ancho,alto,prof,op);break;
    case "caja-auto":data=cajaAutomontable(ancho,alto,prof,op);break;
    case "caja-pizza":data=cajaPizza(ancho,alto,prof,op);break;
    case "caja-pillow":data=cajaAlmohada(ancho,alto,prof,op);break;
    case "caja-taza":data=cajaTaza(ancho,alto,prof,op);break;
    case "caja-vela":data=cajaVela(ancho,alto,prof,op);break;
    case "caja-jabon":data=cajaJabon(ancho,alto,prof,op);break;
    case "caja-bombon":data=cajaBombon(ancho,alto,prof,op);break;
    case "caja-cosmetico":data=cajaCosmetico(ancho,alto,prof,op);break;
    case "caja-bandeja":data=cajaBandeja(ancho,alto,prof,op);break;
    case "caja-faja":data=cajaFaja(ancho,alto,prof,op);break;
    case "sobre":data=sobreProfesional(ancho,alto,prof);break;
    case "etiqueta-rect":data=etiquetaRect(ancho,alto);break;
    case "etiqueta-redonda":data=etiquetaRedonda(ancho);break;
    default:alert("Modelo no encontrado");return;
  }
  document.getElementById("estado").textContent="Generado";
  mostrarSVG(data,nombre);
}
function resetear(){
  document.getElementById("ancho").value=70;document.getElementById("alto").value=90;document.getElementById("prof").value=30;
  if(document.getElementById("material")) document.getElementById("material").value=0.3;
  if(document.getElementById("kerf")) document.getElementById("kerf").value=0;
  document.getElementById("resultado").innerHTML='<p class="empty">Elegí una plantilla y tocá generar.</p>';
}
window.addEventListener("load",cargarModelos);
