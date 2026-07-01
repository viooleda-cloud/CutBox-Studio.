function cajaSimple(ancho,alto,prof){

let x=50;
let y=70;

return iniciarSVG()+`

<rect x="${x}" y="${y}"
width="${ancho}"
height="${alto}"/>

<rect x="${x-prof}" y="${y}"
width="${prof}"
height="${alto}"/>

<rect x="${x+ancho}" y="${y}"
width="${prof}"
height="${alto}"/>

<rect x="${x}" y="${y-prof}"
width="${ancho}"
height="${prof}"/>

<rect x="${x}" y="${y+alto}"
width="${ancho}"
height="${prof}"/>

`+cerrarSVG();

}

function sobreProfesional(ancho,alto){

let x=55;
let y=90;

return iniciarSVG()+`

<rect x="${x}" y="${y}"
width="${ancho}"
height="${alto}"/>

<polygon points="
${x},${y}
${x+ancho/2},${y-40}
${x+ancho},${y}"/>

<polygon points="
${x},${y+alto}
${x+ancho/2},${y+alto+30}
${x+ancho},${y+alto}"/>

`+cerrarSVG();

}
