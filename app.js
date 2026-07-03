function cargarModelos(){
  const modelo=document.getElementById("modelo");
  modelo.innerHTML="";
  PLANTILLAS.forEach(p=>{
    const opt=document.createElement("option");
    opt.value=p.id;
    opt.textContent=p.nombre;
    opt.dataset.cat=p.cat;
    modelo.appendChild(opt);
  });
}

function filtrarModelos(){
  const q=(document.getElementById("busqueda")?.value||"").toLowerCase();
  const cat=document.getElementById("categoria")?.value||"todas";
  const modelo=document.getElementById("modelo");
  modelo.innerHTML="";
  PLANTILLAS
    .filter(p=>(cat==="todas"||p.cat===cat)&&p.nombre.toLowerCase().includes(q))
    .forEach(p=>{
      const opt=document.createElement("option");
      opt.value=p.id;
      opt.textContent=p.nombre;
      modelo.appendChild(opt);
    });
}

function generarPlantilla(){
  const modelo=document.getElementById("modelo").value;
  const ancho=Number(document.getElementById("ancho").value);
  const alto=Number(document.getElementById("alto").value);
  const prof=Number(document.getElementById("prof").value);
  const op={
    material:Number(document.getElementById("material")?.value||0),
    kerf:Number(document.getElementById("kerf")?.value||0)
  };

  const mapa={
    "caja-simple":()=>cajaSimple(ancho,alto,prof,op),
    "caja-tapa":()=>cajaConTapa(ancho,alto,prof,op),
    "caja-auto":()=>cajaAutomontable(ancho,alto,prof,op),
    "caja-pizza":()=>cajaPizza(ancho,alto,prof,op),
    "caja-pillow":()=>cajaAlmohada(ancho,alto,prof,op),
    "caja-taza":()=>cajaTaza(ancho,alto,prof,op),
    "caja-vela":()=>cajaVela(ancho,alto,prof,op),
    "caja-jabon":()=>cajaJabon(ancho,alto,prof,op),
    "caja-bombon":()=>cajaBombon(ancho,alto,prof,op),
    "caja-cosmetico":()=>cajaCosmetico(ancho,alto,prof,op),
    "caja-bandeja":()=>cajaBandeja(ancho,alto,prof,op),
    "caja-faja":()=>cajaFaja(ancho,alto,prof,op),
    "caja-perfume":()=>cajaPerfume(ancho,alto,prof,op),
    "caja-botella":()=>cajaBotella(ancho,alto,prof,op),
    "caja-visor":()=>cajaVisor(ancho,alto,prof,op),
    "caja-taza-interno":()=>cajaTazaInterno(ancho,alto,prof,op),
    "caja-vela-cilindrica":()=>cajaVelaCilindrica(ancho,alto,prof,op),
    "caja-jabon-artesanal":()=>cajaJabonArtesanal(ancho,alto,prof,op),
    "caja-chocolates":()=>cajaChocolates(ancho,alto,prof,op),
    "caja-bandeja-reforzada":()=>cajaBandejaReforzada(ancho,alto,prof,op),
    "caja-cajon-funda":()=>cajaCajonFunda(ancho,alto,prof,op),
    "caja-regalo-cierre":()=>cajaRegaloCierre(ancho,alto,prof,op),
    "caja-cierre-mariposa":()=>cajaCierreMariposa(ancho,alto,prof,op),
    "caja-cierre-corazon":()=>cajaCierreCorazon(ancho,alto,prof,op),
    "caja-milk":()=>cajaMilk(ancho,alto,prof,op),
    "caja-gable":()=>cajaGable(ancho,alto,prof,op),
    "caja-exhibidor":()=>cajaExhibidor(ancho,alto,prof,op),
    "caja-tubo-faja":()=>cajaTuboFaja(ancho,alto,prof,op),
    "caja-cupcake":()=>cajaCupcake(ancho,alto,prof,op),
    "caja-donut":()=>cajaDonut(ancho,alto,prof,op),
    "sobre":()=>sobreProfesional(ancho,alto,prof),
    "etiqueta-rect":()=>etiquetaRect(ancho,alto),
    "etiqueta-redonda":()=>etiquetaRedonda(ancho)
  };

  try{
    if(!mapa[modelo]){
      document.getElementById("resultado").innerHTML='<p class="empty">Modelo no conectado.</p>';
      return;
    }
    const data=mapa[modelo]();
    document.getElementById("estado").textContent="Generado";
    mostrarSVG(data,modelo);
  }catch(e){
    console.error(e);
    document.getElementById("estado").textContent="Error";
    document.getElementById("resultado").innerHTML='<p class="empty">Error al generar: '+e.message+'</p>';
  }
}

function resetear(){
  document.getElementById("ancho").value=70;
  document.getElementById("alto").value=90;
  document.getElementById("prof").value=30;
  if(document.getElementById("material"))document.getElementById("material").value=0.3;
  if(document.getElementById("kerf"))document.getElementById("kerf").value=0;
  document.getElementById("estado").textContent="Listo";
  document.getElementById("resultado").innerHTML='<p class="empty">Elegí una plantilla y tocá generar.</p>';
}

window.addEventListener("load",cargarModelos);
