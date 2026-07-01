function generarCaja(){

let w=Number(document.getElementById("ancho").value);
let h=Number(document.getElementById("alto").value);
let d=Number(document.getElementById("prof").value);

let x=60;
let y=80;

let svg=`
<svg xmlns="http://www.w3.org/2000/svg"
width="210mm"
height="297mm"
viewBox="0 0 210 297">

<g fill="none" stroke="black" stroke-width="0.35">
<rect x="${x}" y="${y}" width="${w}" height="${h}"/>
<rect x="${x-d}" y="${y}" width="${d}" height="${h}"/>
<rect x="${x+w}" y="${y}" width="${d}" height="${h}"/>
<rect x="${x}" y="${y-d}" width="${w}" height="${d}"/>
<rect x="${x}" y="${y+h}" width="${w}" height="${d}"/>
</g>

<g fill="none" stroke="red" stroke-width="0.25" stroke-dasharray="
