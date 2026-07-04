function cargarModelos(){const m=document.getElementById("modelo");m.innerHTML="";PLANTILLAS.forEach(p=>{let o=document.createElement("option");o.value=p.id;o.textContent=p.nombre;o.dataset.cat=p.cat;m.appendChild(o)})}
function filtrarModelos(){const q=(document.getElementById("busqueda")?.value||"").toLowerCase(),cat=document.getElementById("categoria").value,m=document.getElementById("modelo");m.innerHTML="";PLANTILLAS.filter(p=>(cat==="todas"||p.cat===cat)&&p.nombre.toLowerCase().includes(q)).forEach(p=>{let o=document.createElement("option");o.value=p.id;o.textContent=p.nombre;m.appendChild(o)})}
function generarPlantilla(){
 const id=document.getElementById("modelo").value,w=Number(ancho.value),h=Number(alto.value),d=Number(prof.value),op={material:Number(material?.value||0),kerf:Number(kerf?.value||0)};
 let f={"caja-simple":()=>cajaSimple(w,h,d,op),"caja-tapa":()=>cajaConTapa(w,h,d,op),"caja-auto":()=>cajaAutomontable(w,h,d,op),"caja-pizza":()=>cajaPizza(w,h,d,op),"caja-pillow":()=>cajaAlmohada(w,h,d,op),"caja-taza":()=>cajaTaza(w,h,d,op),"caja-vela":()=>cajaVela(w,h,d,op),"caja-jabon":()=>cajaJabon(w,h,d,op),"caja-visor":()=>cajaVisor(w,h,d,op),"caja-cupcake":()=>cajaCupcake(w,h,d,op),"sobre":()=>sobreProfesional(w,h,d),"etiqueta-rect":()=>etiquetaRect(w,h),"etiqueta-redonda":()=>etiquetaRedonda(w)}[id];
 if(!f){alert("Modelo no conectado");return}
 mostrarSVG(f(),id);
 actualizarVistaCerrada(id,w,h,d);
}
function resetear(){ancho.value=70;alto.value=90;prof.value=30;if(material)material.value=.3;if(kerf)kerf.value=0;resultado.innerHTML='<p class="empty">Elegí una plantilla y tocá generar.</p>';vistaCerrada.innerHTML='<p class="emptySmall">Cuando generes, acá se verá la caja o sobre cerrado.</p>';estado.textContent="Listo"}
window.addEventListener("load",()=>{cargarModelos();toggleCustomSheet()})
