const A4={w:210,h:297};
function svgInicio(){return `<svg xmlns="http://www.w3.org/2000/svg" width="210mm" height="297mm" viewBox="0 0 210 297">`;}
function svgFin(){return `</svg>`;}
function corte(c){return `<g fill="none" stroke="black" stroke-width="0.30">${c}</g>`;}
function pliegue(c){return `<g fill="none" stroke="red" stroke-width="0.25" stroke-dasharray="3 2">${c}</g>`;}
function rect(x,y,w,h){return `<rect x="${x}" y="${y}" width="${w}" height="${h}"/>`;}
function line(x1,y1,x2,y2){return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;}
function poly(p){return `<polygon points="${p.map(q=>q.join(',')).join(' ')}"/>`;}
function path(d){return `<path d="${d}"/>`;}
function clamp(v,min,max){return Math.max(min,Math.min(max,v));}
