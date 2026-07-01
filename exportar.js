function mostrarSVG(data,nombreArchivo){
  let svg = data.svg || data;
  let totalW = data.totalW || 0;
  let totalH = data.totalH || 0;
  let ok = entraEnA4(totalW,totalH);

  document.getElementById("resultado").innerHTML =
    svg +
    `<br><a class="descarga" download="${nombreArchivo}.svg" href="data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}">📥 Descargar SVG</a>` +
    `<div class="info ${ok?'ok':'warn'}">${ok ? 'Entra en A4' : 'Atención: puede no entrar en A4'} · Tamaño aproximado: ${n(totalW)} x ${n(totalH)} mm</div>`;
}
