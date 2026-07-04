function vistaCerradaSVG(tipo,w,h,d){
  const W=Math.max(70,Math.min(145,Number(w)||90));
  const H=Math.max(60,Math.min(145,Number(h)||90));
  const D=Math.max(18,Math.min(55,Number(d)||30));

  if(tipo && tipo.startsWith("sobre")){
    return `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="42" y="52" width="156" height="88" rx="4" fill="#fff" stroke="#222" stroke-width="2"/>
      <path d="M42 52 L120 106 L198 52" fill="none" stroke="#555" stroke-width="1.5"/>
      <path d="M42 140 L120 86 L198 140" fill="none" stroke="#777" stroke-width="1.5"/>
      <text x="120" y="165" text-anchor="middle" font-size="12" fill="#5b2cff">Sobre cerrado</text>
    </svg>`;
  }

  if(tipo && tipo.includes("etiqueta")){
    if(tipo.includes("redonda")){
      return `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
        <circle cx="120" cy="88" r="48" fill="#fff" stroke="#222" stroke-width="2"/>
        <text x="120" y="155" text-anchor="middle" font-size="12" fill="#5b2cff">Etiqueta</text>
      </svg>`;
    }
    return `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="55" y="58" width="130" height="65" rx="10" fill="#fff" stroke="#222" stroke-width="2"/>
      <text x="120" y="155" text-anchor="middle" font-size="12" fill="#5b2cff">Etiqueta</text>
    </svg>`;
  }

  const x=65, y=42, dx=D*0.5, dy=-D*0.35;
  return `<svg viewBox="0 0 240 190" xmlns="http://www.w3.org/2000/svg">
    <polygon points="${x},${y} ${x+W},${y} ${x+W+dx},${y+dy} ${x+dx},${y+dy}" fill="#f4f0ff" stroke="#222" stroke-width="1.5"/>
    <polygon points="${x+W},${y} ${x+W+dx},${y+dy} ${x+W+dx},${y+H+dy} ${x+W},${y+H}" fill="#e7ddff" stroke="#222" stroke-width="1.5"/>
    <rect x="${x}" y="${y}" width="${W}" height="${H}" fill="#fff" stroke="#222" stroke-width="2"/>
    <line x1="${x+10}" y1="${y+22}" x2="${x+W-10}" y2="${y+22}" stroke="#5b2cff" stroke-width="1" opacity=".45"/>
    <text x="120" y="172" text-anchor="middle" font-size="12" fill="#5b2cff">Vista cerrada aproximada</text>
  </svg>`;
}

function actualizarVistaCerrada(tipo,w,h,d){
  const cont=document.getElementById("vistaCerrada");
  if(!cont)return;
  cont.innerHTML=vistaCerradaSVG(tipo,w,h,d);
}

