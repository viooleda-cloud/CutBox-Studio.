function nombreSeguro(nombre){return String(nombre||"plantilla_cutbox").toLowerCase().replaceAll(" ","_").replace(/[^a-z0-9_\-]/g,"")}
function mostrarSVG(data,nombreArchivo){
 let svg=data.svg||data,totalW=Number(data.totalW||0),totalH=Number(data.totalH||0),ev=evaluarHoja(totalW,totalH),nombre=nombreSeguro(nombreArchivo);
 document.getElementById("resultado").innerHTML=svg+`<br><a class="descarga" download="${nombre}.svg" href="data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}">📥 Descargar SVG</a><div class="info ${ev.fits?'ok':'warn'}"><b>${ev.fits?(ev.rotate?'Entra mejor rotado':'Entra en hoja'):'No entra en la hoja seleccionada'}</b><br>Hoja: ${ev.sheet.w} x ${ev.sheet.h} mm<br>Plantilla: ${Math.round(totalW*10)/10} x ${Math.round(totalH*10)/10} mm<br>Desperdicio aprox: ${ev.waste}%<br>Negro = corte · Rojo = pliegue</div>`;
 document.getElementById("estado").textContent=ev.fits?"OK":"Revisar tamaño";
}
