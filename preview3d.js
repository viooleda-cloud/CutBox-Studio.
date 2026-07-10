
function svgWrap(inner,label){
  return `<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="s"><feDropShadow dx="2" dy="3" stdDeviation="2" flood-opacity=".18"/></filter></defs>
    <g filter="url(#s)">${inner}</g>
    <text x="130" y="187" text-anchor="middle" font-size="12" fill="#5b2cff">${label}</text>
  </svg>`;
}
function box(label){
 return svgWrap(`<polygon points="70,62 168,62 192,48 94,48" fill="#f4f0ff" stroke="#222" stroke-width="1.6"/>
 <polygon points="168,62 192,48 192,132 168,150" fill="#e7dcff" stroke="#222" stroke-width="1.6"/>
 <rect x="70" y="62" width="98" height="88" fill="#fff" stroke="#222" stroke-width="2"/>`,label);
}
function vistaCajaTapa(){return svgWrap(`<polygon points="60,76 172,76 200,60 88,60" fill="#eadfff" stroke="#222" stroke-width="1.7"/>
<polygon points="172,76 200,60 200,138 172,156" fill="#ddcffd" stroke="#222" stroke-width="1.7"/>
<rect x="60" y="76" width="112" height="80" fill="#fff" stroke="#222" stroke-width="2"/>
<polygon points="54,61 178,61 207,45 83,45" fill="#fff" stroke="#222" stroke-width="2"/>`,"Caja con tapa")}
function vistaPizza(){return svgWrap(`<polygon points="38,92 186,78 226,100 77,116" fill="#f7f3ff" stroke="#222" stroke-width="1.8"/>
<polygon points="77,116 226,100 226,128 77,145" fill="#e6d9ff" stroke="#222" stroke-width="1.8"/>
<polygon points="38,92 77,116 77,145 38,119" fill="#fff" stroke="#222" stroke-width="1.8"/>
<polygon points="38,119 77,145 226,128 187,106" fill="#fff" stroke="#222" stroke-width="2"/>`,"Caja pizza cerrada")}
function vistaTaza(){return svgWrap(`<polygon points="78,42 158,42 184,58 104,58" fill="#f4f0ff" stroke="#222" stroke-width="1.6"/>
<polygon points="158,42 184,58 184,156 158,172" fill="#e7dcff" stroke="#222" stroke-width="1.6"/>
<rect x="78" y="58" width="80" height="114" fill="#fff" stroke="#222" stroke-width="2"/>
<circle cx="118" cy="110" r="24" fill="none" stroke="#5b2cff" stroke-width="1.5" opacity=".45"/>`,"Caja para taza")}
function vistaVela(){return svgWrap(`<polygon points="86,44 156,44 179,58 109,58" fill="#f4f0ff" stroke="#222" stroke-width="1.6"/>
<polygon points="156,44 179,58 179,156 156,170" fill="#e7dcff" stroke="#222" stroke-width="1.6"/>
<rect x="86" y="58" width="70" height="112" fill="#fff" stroke="#222" stroke-width="2"/>
<ellipse cx="121" cy="115" rx="22" ry="34" fill="none" stroke="#5b2cff" stroke-width="1.4" opacity=".55"/>`,"Caja vela")}
function vistaJabon(){return svgWrap(`<polygon points="50,85 178,85 205,70 78,70" fill="#f4f0ff" stroke="#222" stroke-width="1.6"/>
<polygon points="178,85 205,70 205,126 178,142" fill="#e7dcff" stroke="#222" stroke-width="1.6"/>
<rect x="50" y="85" width="128" height="57" fill="#fff" stroke="#222" stroke-width="2"/>
<path d="M82 114 q48 -30 96 0 q-48 30 -96 0" fill="#e6fff4" stroke="#5b2cff" stroke-width="1.4" opacity=".85"/>`,"Caja jabón")}
function vistaCupcake(){return svgWrap(`<polygon points="70,72 166,72 190,56 94,56" fill="#f4f0ff" stroke="#222" stroke-width="1.6"/>
<polygon points="166,72 190,56 190,144 166,160" fill="#e7dcff" stroke="#222" stroke-width="1.6"/>
<rect x="70" y="72" width="96" height="88" fill="#fff" stroke="#222" stroke-width="2"/>
<circle cx="118" cy="114" r="25" fill="#fff3fb" stroke="#5b2cff" stroke-width="1.5"/>`,"Caja cupcake")}
function vistaVisor(){return svgWrap(`<polygon points="68,54 170,54 195,40 93,40" fill="#f4f0ff" stroke="#222" stroke-width="1.6"/>
<polygon points="170,54 195,40 195,143 170,158" fill="#e7dcff" stroke="#222" stroke-width="1.6"/>
<rect x="68" y="54" width="102" height="104" fill="#fff" stroke="#222" stroke-width="2"/>
<rect x="94" y="84" width="50" height="45" rx="4" fill="#dff7ff" stroke="#5b2cff" stroke-width="1.5"/>`,"Caja con visor")}
function vistaAlmohada(){return svgWrap(`<path d="M58 68 C88 95 88 121 58 148 L202 148 C172 121 172 95 202 68 Z" fill="#fff" stroke="#222" stroke-width="2"/>
<path d="M58 68 C88 95 88 121 58 148" fill="none" stroke="#5b2cff" stroke-width="1.2" opacity=".55"/>
<path d="M202 68 C172 95 172 121 202 148" fill="none" stroke="#5b2cff" stroke-width="1.2" opacity=".55"/>`,"Caja almohada")}
function vistaBotella(){return svgWrap(`<polygon points="88,32 154,32 178,48 112,48" fill="#f4f0ff" stroke="#222" stroke-width="1.5"/>
<polygon points="154,32 178,48 178,166 154,181" fill="#e7dcff" stroke="#222" stroke-width="1.5"/>
<rect x="88" y="48" width="66" height="133" fill="#fff" stroke="#222" stroke-width="2"/>`,"Caja botella")}
function vistaTorta(){return svgWrap(`<polygon points="54,86 182,70 218,98 88,116" fill="#f7f3ff" stroke="#222" stroke-width="1.7"/>
<polygon points="88,116 218,98 195,140 72,154" fill="#e7dcff" stroke="#222" stroke-width="1.7"/>
<polygon points="54,86 88,116 72,154 47,126" fill="#fff" stroke="#222" stroke-width="1.7"/>`,"Caja porción torta")}
function vistaRegalo(){return svgWrap(`<polygon points="68,65 170,65 194,50 92,50" fill="#f4f0ff" stroke="#222" stroke-width="1.6"/>
<polygon points="170,65 194,50 194,145 170,162" fill="#e7dcff" stroke="#222" stroke-width="1.6"/>
<rect x="68" y="65" width="102" height="97" fill="#fff" stroke="#222" stroke-width="2"/>
<line x1="119" y1="65" x2="119" y2="162" stroke="#5b2cff" opacity=".55"/><line x1="68" y1="112" x2="170" y2="112" stroke="#5b2cff" opacity=".55"/>`,"Caja regalo")}
function vistaSobre(){return svgWrap(`<rect x="43" y="58" width="174" height="92" rx="4" fill="#fff" stroke="#222" stroke-width="2"/>
<path d="M43 58 L130 115 L217 58" fill="none" stroke="#555" stroke-width="1.5"/>
<path d="M43 150 L130 93 L217 150" fill="none" stroke="#777" stroke-width="1.5"/>`,"Sobre cerrado")}
function vistaEtiqueta(tipo){return tipo.includes("redonda")?svgWrap(`<circle cx="130" cy="92" r="54" fill="#fff" stroke="#222" stroke-width="2"/>
<circle cx="130" cy="92" r="42" fill="none" stroke="#5b2cff" opacity=".35"/>`,"Etiqueta redonda"):svgWrap(`<rect x="55" y="62" width="150" height="72" rx="10" fill="#fff" stroke="#222" stroke-width="2"/>
<line x1="78" y1="92" x2="182" y2="92" stroke="#5b2cff" opacity=".35"/>`,"Etiqueta rectangular")}
function vistaCerradaSVG(tipo,w,h,d){
 if(tipo&&tipo.startsWith("sobre"))return vistaSobre();
 if(tipo&&tipo.includes("etiqueta"))return vistaEtiqueta(tipo);
 if(tipo==="caja-pizza")return vistaPizza();
 if(tipo==="caja-visor")return vistaVisor();
 if(tipo==="caja-taza")return vistaTaza();
 if(tipo==="caja-cupcake")return vistaCupcake();
 if(tipo==="caja-vela")return vistaVela();
 if(tipo==="caja-jabon")return vistaJabon();
 if(tipo==="caja-pillow")return vistaAlmohada();
 if(tipo==="caja-tapa")return vistaCajaTapa();
 if(tipo==="caja-auto")return box("Caja automontable");
 if(tipo==="caja-botella-pro")return vistaBotella();
 if(tipo==="caja-torta-pro")return vistaTorta();
 if(tipo==="caja-regalo-pro")return vistaRegalo();
 return box("Caja cerrada");
}
function actualizarVistaCerrada(tipo,w,h,d){
 const cont=document.getElementById("vistaCerrada");
 if(cont)cont.innerHTML=vistaCerradaSVG(tipo,w,h,d);
}
