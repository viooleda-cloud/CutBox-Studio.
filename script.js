function generarCaja() {

  let w = Number(document.getElementById("ancho").value);
  let h = Number(document.getElementById("alto").value);
  let d = Number(document.getElementById("prof").value);

  let svg = `
<svg xmlns="http://www.w3.org/2000/svg"
width="210mm"
height="297mm"
viewBox="0 0 210 297">

<g fill="none" stroke="black" stroke-width="0.3">

<rect x="50" y="70" width="${w}" height="${h}"/>

<rect x="${50-d}" y="70" width="${d}" height="${h}"/>

<rect x="${50+w}" y="70" width="${d}" height="${h}"/>

<rect x="50" y="${70-d}" width="${w}" height="${d}"/>

<rect x="50" y="${70+h}" width="${w}" height="${d}"/>

<polygon points="
${50+w+d},70
${50+w+d+12},82
${50+w+d+12},${70+h-12}
${50+w+d},${70+h}
"/>

</g>

<g stroke="red" stroke-width="0.25" stroke-dasharray="3 2">

<line x1="50" y1="70" x2="50" y2="${70+h}"/>

<line x1="${50+w}" y1="70" x2="${50+w}" y2="${70+h}"/>

<line x1="${50+w+d}" y1="70" x2="${50+w+d}" y2="${70+h}"/>

<line x1="50" y1="70" x2="${50+w}" y2="70"/>

<line x1="50" y1="${70+h}" x2="${50+w}" y2="${70+h}"/>

</g>

</svg>`;

  document.getElementById("resultado").innerHTML =
    svg +
    "<br><a download='caja_cutbox.svg' href='data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(svg) +
    "'>📥 Descargar SVG</a>";

}
