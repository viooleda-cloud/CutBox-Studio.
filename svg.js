const A4_W = 210;
const A4_H = 297;
const MARGEN = 6;

function clamp(v,min,max){ return Math.max(min, Math.min(max, v)); }
function n(v){ return Math.round(v*100)/100; }

function centrar(totalW,totalH){
  return { x:n((A4_W-totalW)/2), y:n((A4_H-totalH)/2) };
}

function rect(x,y,w,h){ return `<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}"/>`; }
function line(x1,y1,x2,y2){ return `<line x1="${n(x1)}" y1="${n(y1)}" x2="${n(x2)}" y2="${n(y2)}"/>`; }
function poly(points){
  return `<polygon points="${points.map(p=>`${n(p[0])},${n(p[1])}`).join(" ")}"/>`;
}
function circle(cx,cy,r){ return `<circle cx="${n(cx)}" cy="${n(cy)}" r="${n(r)}"/>`; }
function ellipse(cx,cy,rx,ry){ return `<ellipse cx="${n(cx)}" cy="${n(cy)}" rx="${n(rx)}" ry="${n(ry)}"/>`; }
function path(d){ return `<path d="${d}"/>`; }

function svgInicio(){
  return `<svg xmlns="http://www.w3.org/2000/svg" width="210mm" height="297mm" viewBox="0 0 210 297">`;
}
function svgFin(){ return `</svg>`; }
function corte(content){
  return `<g id="CORTE" fill="none" stroke="black" stroke-width="0.30">${content}</g>`;
}
function pliegue(content){
  return `<g id="PLIEGUE" fill="none" stroke="red" stroke-width="0.25" stroke-dasharray="3 2">${content}</g>`;
}
function guiaA4(){
  return `<rect x="0.5" y="0.5" width="209" height="296" fill="none" stroke="#ddd" stroke-width="0.2"/>`;
}
function entraEnA4(totalW,totalH){
  return totalW <= A4_W-(MARGEN*2) && totalH <= A4_H-(MARGEN*2);
}
