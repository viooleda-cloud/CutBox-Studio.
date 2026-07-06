function nombreSeguro(nombre){return String(nombre||"plantilla_cutbox").toLowerCase().replaceAll(" ","_").replace(/[^a-z0-9_\-]/g,"")}
let ultimaProduccion=null;
function calcProduccion(ev,totalW,totalH){
 const cantidad=Math.max(1,Number(document.getElementById("cantidad")?.value||1));
 const precioHoja=Math.max(0,Number(document.getElementById("precioHoja")?.value||0));
 const tCorte=Math.max(0,Number(document.getElementById("tiempoCorte")?.value||0));
 const tArmado=Math.max(0,Number(document.getElementById("tiempoArmado")?.value||0));
 const porHoja=Math.max(1,ev.units||1);
 const hojas=Math.ceil(cantidad/porHoja);
 const costoTotal=hojas*precioHoja;
 const costoUnidad=costoTotal/cantidad;
 const tiempoTotal=(hojas*tCorte)+(cantidad*tArmado);
 return{cantidad,precioHoja,porHoja,hojas,costoTotal,costoUnidad,tiempoTotal,tCorte,tArmado,totalW,totalH,ev};
}
function money(v){return Number(v||0).toLocaleString("es-AR",{maximumFractionDigits:2})}
function actualizarProduccion(ev,totalW,totalH){
 const p=calcProduccion(ev,totalW,totalH); ultimaProduccion=p;
 const box=document.getElementById("datosProduccion"); if(!box)return;
 box.innerHTML=`<b>Datos de producción</b>
 <p><b>Hoja:</b> ${ev.sheet.name} · ${ev.sheet.w} x ${ev.sheet.h} mm</p>
 <p><b>Plantilla:</b> ${Math.round(totalW*10)/10} x ${Math.round(totalH*10)/10} mm</p>
 <p><b>Unidades por hoja:</b> ${p.porHoja}</p>
 <p><b>Hojas necesarias:</b> ${p.hojas} para ${p.cantidad} unidades</p>
 <p><b>Uso estimado:</b> ${ev.usage}% · <b>desperdicio:</b> ${ev.waste}%</p>
 <p><b>Costo total:</b> ${money(p.costoTotal)} · <b>unidad:</b> ${money(p.costoUnidad)}</p>
 <p><b>Tiempo estimado:</b> ${Math.round(p.tiempoTotal)} min</p>`;
}
function mostrarSVG(data,nombreArchivo){
 let svg=data.svg||data,totalW=Number(data.totalW||0),totalH=Number(data.totalH||0),ev=evaluarHoja(totalW,totalH),nombre=nombreSeguro(nombreArchivo);
 document.getElementById("resultado").innerHTML=svg+`<br><a class="descarga" download="${nombre}.svg" href="data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}">📥 Descargar SVG</a><div class="info ${ev.fits?'ok':'warn'}"><b>${ev.fits?(ev.rotate?'Entra mejor rotado':'Entra en hoja'):'No entra en la hoja seleccionada'}</b><br>Hoja: ${ev.sheet.w} x ${ev.sheet.h} mm<br>Plantilla: ${Math.round(totalW*10)/10} x ${Math.round(totalH*10)/10} mm<br>Unidades por hoja: ${ev.units}<br>Uso: ${ev.usage}% · Desperdicio: ${ev.waste}%</div>`;
 document.getElementById("estado").textContent=ev.fits?"OK":"Revisar tamaño";
 actualizarProduccion(ev,totalW,totalH);
}
