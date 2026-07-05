function svgWrap(inner,label){
  return `<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
    ${inner}
    <text x="130" y="186" text-anchor="middle" font-size="12" fill="#5b2cff">${label}</text>
  </svg>`;
}
function vistaCajaSimple(w,h,d,label="Caja cerrada"){
  const W=110,H=88,D=34,x=66,y=55,dx=D*.55,dy=-D*.35;
  return svgWrap(`<polygon points="${x},${y} ${x+W},${y} ${x+W+dx},${y+dy} ${x+dx},${y+dy}" fill="#f4f0ff" stroke="#222" stroke-width="1.5"/>
  <polygon points="${x+W},${y} ${x+W+dx},${y+dy} ${x+W+dx},${y+H+dy} ${x+W},${y+H}" fill="#e9ddff" stroke="#222" stroke-width="1.5"/>
  <rect x="${x}" y="${y}" width="${W}" height="${H}" fill="#fff" stroke="#222" stroke-width="2"/>
  <line x1="${x+10}" y1="${y+22}" x2="${x+W-10}" y2="${y+22}" stroke="#5b2cff" stroke-width="1" opacity=".45"/>`,label);
}
function vistaPizza(){return svgWrap(`<polygon points="55,65 182,55 210,78 84,91" fill="#f4f0ff" stroke="#222" stroke-width="1.5"/>
<polygon points="84,91 210,78 210,120 84,136" fill="#e9ddff" stroke="#222" stroke-width="1.5"/>
<polygon points="55,65 84,91 84,136 55,112" fill="#fff" stroke="#222" stroke-width="1.5"/>
<polygon points="55,112 84,136 210,120 181,98" fill="#fff" stroke="#222" stroke-width="2"/>`,"Caja pizza cerrada");}
function vistaVisor(){return svgWrap(`<polygon points="67,54 176,54 194,42 84,42" fill="#f4f0ff" stroke="#222" stroke-width="1.5"/>
<polygon points="176,54 194,42 194,133 176,145" fill="#e9ddff" stroke="#222" stroke-width="1.5"/>
<rect x="67" y="54" width="109" height="91" fill="#fff" stroke="#222" stroke-width="2"/>
<rect x="97" y="82" width="50" height="38" rx="3" fill="#dff7ff" stroke="#5b2cff" stroke-width="1.5"/>`,"Caja con visor");}
function vistaTaza(){return svgWrap(`<polygon points="74,45 170,45 190,58 94,58" fill="#f4f0ff" stroke="#222" stroke-width="1.5"/>
<polygon points="170,45 190,58 190,145 170,158" fill="#e9ddff" stroke="#222" stroke-width="1.5"/>
<rect x="74" y="58" width="96" height="100" fill="#fff" stroke="#222" stroke-width="2"/>
<circle cx="130" cy="105" r="22" fill="none" stroke="#5b2cff" stroke-width="1.5" opacity=".45"/>`,"Caja para taza");}
function vistaCupcake(){return svgWrap(`<polygon points="70,72 173,72 190,58 88,58" fill="#f4f0ff" stroke="#222" stroke-width="1.5"/>
<polygon points="173,72 190,58 190,138 173,152" fill="#e9ddff" stroke="#222" stroke-width="1.5"/>
<rect x="70" y="72" width="103" height="80" fill="#fff" stroke="#222" stroke-width="2"/>
<circle cx="122" cy="110" r="24" fill="#fff5fb" stroke="#5b2cff" stroke-width="1.5"/>`,"Caja cupcake");}
function vistaVela(){return svgWrap(`<polygon points="78,48 165,48 185,62 98,62" fill="#f4f0ff" stroke="#222" stroke-width="1.5"/>
<polygon points="165,48 185,62 185,150 165,164" fill="#e9ddff" stroke="#222" stroke-width="1.5"/>
<rect x="78" y="62" width="87" height="102" fill="#fff" stroke="#222" stroke-width="2"/>
<ellipse cx="122" cy="112" rx="26" ry="30" fill="none" stroke="#5b2cff" stroke-width="1.5" opacity=".6"/>`,"Caja para vela");}
function vistaJabon(){return svgWrap(`<polygon points="62,78 178,78 198,66 82,66" fill="#f4f0ff" stroke="#222" stroke-width="1.5"/>
<polygon points="178,78 198,66 198,126 178,138" fill="#e9ddff" stroke="#222" stroke-width="1.5"/>
<rect x="62" y="78" width="116" height="60" fill="#fff" stroke="#222" stroke-width="2"/>
<path d="M88 107 q32 -24 64 0 q-32 24 -64 0" fill="#e6fff4" stroke="#5b2cff" stroke-width="1.5"/>`,"Caja jabón");}
function vistaAlmohada(){return svgWrap(`<path d="M70 65 C95 88 95 112 70 135 L190 135 C165 112 165 88 190 65 Z" fill="#fff" stroke="#222" stroke-width="2"/>
<path d="M70 65 C95 88 95 112 70 135" fill="none" stroke="#5b2cff" stroke-width="1.2" opacity=".55"/>
<path d="M190 65 C165 88 165 112 190 135" fill="none" stroke="#5b2cff" stroke-width="1.2" opacity=".55"/>`,"Caja almohada");}
function vistaSobre(){return svgWrap(`<rect x="43" y="55" width="174" height="92" rx="4" fill="#fff" stroke="#222" stroke-width="2"/>
<path d="M43 55 L130 112 L217 55" fill="none" stroke="#555" stroke-width="1.5"/>
<path d="M43 147 L130 90 L217 147" fill="none" stroke="#777" stroke-width="1.5"/>`,"Sobre cerrado");}
function vistaEtiqueta(tipo){
  if(tipo.includes("redonda")) return svgWrap(`<circle cx="130" cy="92" r="52" fill="#fff" stroke="#222" stroke-width="2"/>
<circle cx="130" cy="92" r="42" fill="none" stroke="#5b2cff" stroke-width="1" opacity=".45"/>`,"Etiqueta redonda");
  return svgWrap(`<rect x="55" y="62" width="150" height="72" rx="10" fill="#fff" stroke="#222" stroke-width="2"/>
<line x1="78" y1="92" x2="182" y2="92" stroke="#5b2cff" opacity=".4"/>`,"Etiqueta terminada");
}
function vistaCerradaSVG(tipo,w,h,d){
  if(tipo && tipo.startsWith("sobre")) return vistaSobre();
  if(tipo && tipo.includes("etiqueta")) return vistaEtiqueta(tipo);
  if(tipo==="caja-pizza") return vistaPizza();
  if(tipo==="caja-visor") return vistaVisor();
  if(tipo==="caja-taza") return vistaTaza();
  if(tipo==="caja-cupcake") return vistaCupcake();
  if(tipo==="caja-vela") return vistaVela();
  if(tipo==="caja-jabon") return vistaJabon();
  if(tipo==="caja-pillow") return vistaAlmohada();
  if(tipo==="caja-tapa") return vistaCajaSimple(w,h,d,"Caja con tapa");
  if(tipo==="caja-auto") return vistaCajaSimple(w,h,d,"Caja automontable");
  return vistaCajaSimple(w,h,d,"Caja cerrada");
}
function actualizarVistaCerrada(tipo,w,h,d){
  const cont=document.getElementById("vistaCerrada");
  if(!cont)return;
  cont.innerHTML=vistaCerradaSVG(tipo,w,h,d);
}
