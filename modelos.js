const PLANTILLAS = [
  {id:"caja-simple",nombre:"Caja simple",cat:"cajas"},
  {id:"caja-tapa",nombre:"Caja con tapa reforzada",cat:"cajas"},
  {id:"caja-auto",nombre:"Caja automontable con cierre",cat:"cajas"},
  {id:"caja-pizza",nombre:"Caja tipo pizza",cat:"cajas"},
  {id:"caja-pillow",nombre:"Caja almohada",cat:"cajas"},
  {id:"caja-taza",nombre:"Caja para taza",cat:"cajas"},
  {id:"caja-vela",nombre:"Caja para vela",cat:"cajas"},
  {id:"caja-jabon",nombre:"Caja para jabón",cat:"cajas"},
  {id:"caja-bombon",nombre:"Caja bombones",cat:"cajas"},
  {id:"caja-cosmetico",nombre:"Caja cosmético",cat:"cajas"},
  {id:"caja-bandeja",nombre:"Bandeja simple",cat:"cajas"},
  {id:"caja-faja",nombre:"Faja envolvente",cat:"cajas"},
  {id:"sobre",nombre:"Sobre profesional",cat:"sobres"},
  {id:"etiqueta-rect",nombre:"Etiqueta rectangular",cat:"etiquetas"},
  {id:"etiqueta-redonda",nombre:"Etiqueta redonda",cat:"etiquetas"}
];

function ajustar(v,kerf){ return v + kerf; }

function cajaCruz(w,h,d,op={}){
  let kerf=op.kerf||0, mat=op.material||0, flap=op.flap||14, top=op.top||0, bottom=op.bottom||0;
  w=ajustar(w,kerf); h=ajustar(h,kerf); d=ajustar(d,kerf);
  let totalW=w+d+d+flap,totalH=h+d+d+top+bottom;
  let p=centrar(totalW,totalH),x=p.x+d,y=p.y+d+top;

  let cut=rect(x,y,w,h)+rect(x-d,y,d,h)+rect(x+w,y,d,h)+rect(x,y-d,w,d)+rect(x,y+h,w,d);
  cut+=poly([[x+w+d,y+8],[x+w+d+flap,y+16],[x+w+d+flap,y+h-16],[x+w+d,y+h-8]]);
  if(top>0) cut+=rect(x,y-d-top,w,top);
  if(bottom>0) cut+=rect(x,y+h+d,w,bottom);

  let fold=line(x,y,x,y+h)+line(x+w,y,x+w,y+h)+line(x-d,y,x-d,y+h)+line(x+w+d,y,x+w+d,y+h)+line(x,y,x+w,y)+line(x,y+h,x+w,y+h);
  if(top>0) fold+=line(x,y-d,x+w,y-d);
  if(bottom>0) fold+=line(x,y+h+d,x+w,y+h+d);

  return {svg:svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(),totalW,totalH};
}

function cajaSimple(w,h,d,op){return cajaCruz(w,h,d,{...op,flap:14});}
function cajaConTapa(w,h,d,op){return cajaCruz(w,h,d,{...op,top:d,bottom:d,flap:14});}

function cajaAutomontable(w,h,d,op={}){
  let kerf=op.kerf||0, flap=12, lock=10;
  w=ajustar(w,kerf); h=ajustar(h,kerf); d=ajustar(d,kerf);
  let totalW=w+d+d+flap+lock,totalH=h+d+d+lock*2,p=centrar(totalW,totalH),x=p.x+d,y=p.y+d+lock;
  let cut=rect(x,y,w,h)+rect(x-d,y,d,h)+rect(x+w,y,d,h)+rect(x,y-d,w,d)+rect(x,y+h,w,d);
  cut+=poly([[x+w+d,y+8],[x+w+d+flap,y+14],[x+w+d+flap,y+h-14],[x+w+d,y+h-8]]);
  cut+=poly([[x+10,y-d],[x+w-10,y-d],[x+w-18,y-d-lock],[x+18,y-d-lock]]);
  cut+=poly([[x+12,y+h+d],[x+w-12,y+h+d],[x+w-20,y+h+d+lock],[x+20,y+h+d+lock]]);
  let fold=line(x,y,x,y+h)+line(x+w,y,x+w,y+h)+line(x-d,y,x-d,y+h)+line(x+w+d,y,x+w+d,y+h)+line(x,y,x+w,y)+line(x,y+h,x+w,y+h);
  return {svg:svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(),totalW,totalH};
}

function cajaPizza(w,h,d,op={}){
  let kerf=op.kerf||0; w=ajustar(w,kerf); h=ajustar(h,kerf); d=ajustar(d,kerf);
  let totalW=w+d+d,totalH=h+d+d+d,p=centrar(totalW,totalH),x=p.x+d,y=p.y+d+d;
  let cut=rect(x,y,w,h)+rect(x-d,y,d,h)+rect(x+w,y,d,h)+rect(x,y-d,w,d)+rect(x,y+h,w,d)+rect(x,y-d-d,w,d);
  cut+=poly([[x-d,y],[x-d-8,y+8],[x-d-8,y+h-8],[x-d,y+h]])+poly([[x+w+d,y],[x+w+d+8,y+8],[x+w+d+8,y+h-8],[x+w+d,y+h]]);
  let fold=line(x,y,x+w,y)+line(x,y+h,x+w,y+h)+line(x,y,x,y+h)+line(x+w,y,x+w,y+h)+line(x,y-d,x+w,y-d);
  return {svg:svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(),totalW,totalH};
}

function cajaAlmohada(w,h,d,op={}){
  let p=centrar(w,h),x=p.x,y=p.y,c=clamp(d,12,w/2);
  let c1=`M ${x} ${y} C ${x+c} ${y+h/2}, ${x+c} ${y+h/2}, ${x} ${y+h}`;
  let c2=`M ${x+w} ${y} C ${x+w-c} ${y+h/2}, ${x+w-c} ${y+h/2}, ${x+w} ${y+h}`;
  return {svg:svgInicio()+guiaA4()+corte(rect(x,y,w,h)+path(c1)+path(c2))+pliegue(path(c1)+path(c2))+svgFin(),totalW:w,totalH:h};
}

function cajaTaza(w,h,d,op){return cajaCruz(clamp(w,75,120),clamp(h,90,150),clamp(d,35,55),{...op,top:d,bottom:d,flap:16});}
function cajaVela(w,h,d,op){return cajaCruz(clamp(w,50,90),clamp(h,70,130),clamp(d,40,70),{...op,top:d,bottom:d,flap:14});}
function cajaJabon(w,h,d,op){return cajaCruz(clamp(w,55,100),clamp(h,35,70),clamp(d,18,40),{...op,top:8,bottom:8,flap:10});}
function cajaBombon(w,h,d,op){return cajaPizza(clamp(w,70,140),clamp(h,45,90),clamp(d,15,35),op);}
function cajaCosmetico(w,h,d,op){return cajaCruz(clamp(w,35,70),clamp(h,100,180),clamp(d,25,55),{...op,top:d,bottom:d,flap:12});}

function cajaBandeja(w,h,d,op={}){
  let totalW=w+d+d,totalH=h+d+d,p=centrar(totalW,totalH),x=p.x+d,y=p.y+d;
  let cut=rect(x,y,w,h)+rect(x-d,y,d,h)+rect(x+w,y,d,h)+rect(x,y-d,w,d)+rect(x,y+h,w,d);
  let fold=line(x,y,x,y+h)+line(x+w,y,x+w,y+h)+line(x,y,x+w,y)+line(x,y+h,x+w,y+h);
  return {svg:svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(),totalW,totalH};
}

function cajaFaja(w,h,d,op={}){
  let totalW=w*2+d*2,totalH=h,p=centrar(totalW,totalH),x=p.x,y=p.y;
  let cut=rect(x,y,totalW,h);
  let fold=line(x+w,y,x+w,y+h)+line(x+w+d,y,x+w+d,y+h)+line(x+w+d+w,y,x+w+d+w,y+h);
  return {svg:svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(),totalW,totalH};
}

function sobreProfesional(w,h,solapa){
  let lat=clamp(w*0.20,14,32),sup=clamp(solapa,18,48),inf=clamp(solapa*0.65,14,34);
  let totalW=w+lat*2,totalH=h+sup+inf,p=centrar(totalW,totalH),x=p.x+lat,y=p.y+sup;
  let cut=rect(x,y,w,h)+poly([[x,y],[x+w/2,y-sup],[x+w,y]])+poly([[x,y+h],[x+w/2,y+h+inf],[x+w,y+h]])+poly([[x,y],[x-lat,y+h/2],[x,y+h]])+poly([[x+w,y],[x+w+lat,y+h/2],[x+w,y+h]]);
  let fold=line(x,y,x+w,y)+line(x,y+h,x+w,y+h)+line(x,y,x,y+h)+line(x+w,y,x+w,y+h);
  return {svg:svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(),totalW,totalH};
}

function etiquetaRect(w,h){let p=centrar(w,h);return {svg:svgInicio()+guiaA4()+corte(rect(p.x,p.y,w,h))+svgFin(),totalW:w,totalH:h};}
function etiquetaRedonda(w){let r=w/2;return {svg:svgInicio()+guiaA4()+corte(circle(105,148.5,r))+svgFin(),totalW:w,totalH:w};}
function etiquetaRedonda(w){
  let r=w/2;
  return {svg:svgInicio()+guiaA4()+corte(circle(105,148.5,r))+svgFin(), totalW:w,totalH:w};
}
function etiquetaOval(w,h){
  return {svg:svgInicio()+guiaA4()+corte(ellipse(105,148.5,w/2,h/2))+svgFin(), totalW:w,totalH:h};
}
function tagPerforado(w,h){
  let p=centrar(w,h),x=p.x,y=p.y;
  let cut=rect(x,y,w,h)+circle(x+w/2,y+10,3);
  return {svg:svgInicio()+guiaA4()+corte(cut)+svgFin(), totalW:w,totalH:h};
}
