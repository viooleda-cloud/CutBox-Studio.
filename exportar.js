function nombreSeguro(nombre){
  return String(nombre || "plantilla_cutbox")
    .toLowerCase()
    .replaceAll(" ","_")
    .replace(/[^a-z0-9_\-]/g,"");
}

function entraNormal(w,h){
  return w <= (A4_W - MARGEN*2) && h <= (A4_H - MARGEN*2);
}

function entraRotado(w,h){
  return h <= (A4_W - MARGEN*2) && w <= (A4_H - MARGEN*2);
}

function estadoA4(w,h){
  if(!w || !h) return {texto:"Sin datos de tamaño", clase:"warn"};
  if(entraNormal(w,h)) return {texto:"Entra en A4", clase:"ok"};
  if(entraRotado(w,h)) return {texto:"Entra mejor rotado", clase:"warn"};
  return {texto:"No entra en A4 con estas medidas", clase:"warn"};
}

function mostrarSVG(data,nombreArchivo){
  let svg = data.svg || data;
  let totalW = Number(data.totalW || 0);
  let totalH = Number(data.totalH || 0);
  let estado = estadoA4(totalW,totalH);
  let area = totalW && totalH ? Math.round((totalW*totalH)/(210*297)*100) : 0;
  let nombre = nombreSeguro(nombreArchivo);

  document.getElementById("resultado").innerHTML =
    svg +
    `<br><a class="descarga" download="${nombre}.svg" href="data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}">📥 Descargar SVG</a>` +
    `<div class="info ${estado.clase}">
      <b>${estado.texto}</b><br>
      Tamaño aproximado: ${Math.round(totalW*10)/10} x ${Math.round(totalH*10)/10} mm<br>
      Uso estimado de hoja: ${area}%<br>
      Negro = corte · Rojo punteado = pliegue
    </div>`;

  let estadoTag = document.getElementById("estado");
  if(estadoTag) estadoTag.textContent = estado.texto;
}
