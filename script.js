function generarCaja(){

let w = Number(document.getElementById("ancho").value);
let h = Number(document.getElementById("alto").value);
let d = Number(document.getElementById("prof").value);

let x = 50;
let y = 70;
let solapa = 12;

let svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="210mm" height="297mm" viewBox="0 0 210 297">

<g fill="none" stroke="black" stroke-width="0.35">
<rect x="${x}" y="${y}" width="${w}" height="${h}"/>
<rect x="${x-d}" y="${y}" width="${d}" height="${h}"/>
<rect x="${x+w}" y="${y}" width="${d}" height="${h}"/>
<rect x="${x}" y="${y-d}" width="${w}" height="${d}"/>
<rect x="${x}" y="${y+h}" width="${w}" height="${d}"/>

<polygon points="${x+w+d},${y+10} ${x+w+d+solapa},${y+18} ${x+w+d+solapa},${y+h-18} ${x+w+d},${y+h-10}"/>
</g>

<g fill="none" stroke="red" stroke-width="0.25" stroke-dasharray="3 2">
<line x1="${x}" y1="${y}" x2="${x+w}" y2="${y}"/>
<line x1="${x}" y1="${y+h}" x2="${x+w}" y2="${y+h}"/>
<line x1="${x}" y1="${y}" x2="${x}" y2="${y+h}"/>
<line x1="${x+w}" y1="${y}" x2="${x+w}" y2="${y+h}"/>
<line x1="${x+w+d}" y1="${y+10}" x2="${x+w+d}" y2="${y+h-10}"/>
</g>

</svg>`;

document.getElementById("resultado").innerHTML =
svg +
'<br><br><a class="descarga" download="caja_cutbox.svg" href="data:image/svg+xml;charset=utf-8,' +
encodeURIComponent(svg) +
'">📥 Descargar SVG</a>';

}
