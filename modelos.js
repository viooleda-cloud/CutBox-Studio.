const PLANTILLAS = [
  {id:"caja-simple", nombre:"Caja simple", cat:"cajas"},
  {id:"caja-tapa", nombre:"Caja con tapa", cat:"cajas"},
  {id:"caja-auto", nombre:"Caja automontable", cat:"cajas"},
  {id:"caja-pizza", nombre:"Caja tipo pizza", cat:"cajas"},
  {id:"pillow", nombre:"Caja almohada", cat:"cajas"},
  {id:"piramide", nombre:"Caja piramidal", cat:"regalos"},
  {id:"hexagonal", nombre:"Caja hexagonal", cat:"regalos"},
  {id:"bolsa-asas", nombre:"Bolsa con asas", cat:"regalos"},
  {id:"sobre", nombre:"Sobre profesional", cat:"sobres"},
  {id:"sobre-tarjeta", nombre:"Sobre tarjeta", cat:"sobres"},
  {id:"sobre-cuadrado", nombre:"Sobre cuadrado", cat:"sobres"},
  {id:"etiqueta-rect", nombre:"Etiqueta rectangular", cat:"etiquetas"},
  {id:"etiqueta-redonda", nombre:"Etiqueta redonda", cat:"etiquetas"},
  {id:"etiqueta-oval", nombre:"Etiqueta ovalada", cat:"etiquetas"},
  {id:"tag-perforado", nombre:"Tag perforado", cat:"etiquetas"}
];

function cajaSimple(w,h,d){
  let flap=14,totalW=w+d+d+flap,totalH=h+d+d,p=centrar(totalW,totalH),x=p.x+d,y=p.y+d;
  let cut=rect(x,y,w,h)+rect(x-d,y,d,h)+rect(x+w,y,d,h)+rect(x,y-d,w,d)+rect(x,y+h,w,d);
  cut+=poly([[x+w+d,y+8],[x+w+d+flap,y+16],[x+w+d+flap,y+h-16],[x+w+d,y+h-8]]);
  let fold=line(x,y,x,y+h)+line(x+w,y,x+w,y+h)+line(x-d,y,x-d,y+h)+line(x+w+d,y,x+w+d,y+h)+line(x,y,x+w,y)+line(x,y+h,x+w,y+h);
  return {svg:svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(), totalW, totalH};
}

function cajaConTapa(w,h,d){
  let flap=14,tapa=d,totalW=w+d+d+flap,totalH=h+d+d+tapa+tapa,p=centrar(totalW,totalH),x=p.x+d,y=p.y+d+tapa;
  let cut=rect(x,y,w,h)+rect(x-d,y,d,h)+rect(x+w,y,d,h)+rect(x,y-d,w,d)+rect(x,y+h,w,d)+rect(x,y-d-tapa,w,tapa)+rect(x,y+h+d,w,tapa);
  cut+=poly([[x+w+d,y+8],[x+w+d+flap,y+16],[x+w+d+flap,y+h-16],[x+w+d,y+h-8]]);
  let fold=line(x,y,x,y+h)+line(x+w,y,x+w,y+h)+line(x-d,y,x-d,y+h)+line(x+w+d,y,x+w+d,y+h)+line(x,y,x+w,y)+line(x,y+h,x+w,y+h)+line(x,y-d,x+w,y-d)+line(x,y+h+d,x+w,y+h+d);
  return {svg:svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(), totalW,totalH};
}

function cajaAutomontable(w,h,d){
  let flap=12,lock=10,totalW=w+d+d+flap+lock,totalH=h+d+d,p=centrar(totalW,totalH),x=p.x+d,y=p.y+d;
  let cut=rect(x,y,w,h)+rect(x-d,y,d,h)+rect(x+w,y,d,h)+rect(x,y-d,w,d)+rect(x,y+h,w,d);
  cut+=poly([[x+w+d,y+8],[x+w+d+flap,y+14],[x+w+d+flap,y+h-14],[x+w+d,y+h-8]]);
  cut+=poly([[x+10,y-d],[x+w-10,y-d],[x+w-18,y-d-lock],[x+18,y-d-lock]]);
  cut+=poly([[x+12,y+h+d],[x+w-12,y+h+d],[x+w-20,y+h+d+lock],[x+20,y+h+d+lock]]);
  let fold=line(x,y,x,y+h)+line(x+w,y,x+w,y+h)+line(x-d,y,x-d,y+h)+line(x+w+d,y,x+w+d,y+h)+line(x,y,x+w,y)+line(x,y+h,x+w,y+h);
  return {svg:svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(), totalW,totalH};
}

function cajaPizza(w,h,d){
  let totalW=w+d+d,totalH=h+d+d+d,p=centrar(totalW,totalH),x=p.x+d,y=p.y+d;
  let cut=rect(x,y,w,h)+rect(x-d,y,d,h)+rect(x+w,y,d,h)+rect(x,y-d,w,d)+rect(x,y+h,w,d)+rect(x,y-d-d,w,d);
  let fold=line(x,y,x+w,y)+line(x,y+h,x+w,y+h)+line(x,y,x,y+h)+line(x+w,y,x+w,y+h)+line(x,y-d,x+w,y-d);
  return {svg:svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(), totalW,totalH};
}

function cajaAlmohada(w,h,d){
  let p=centrar(w,h),x=p.x,y=p.y,c=clamp(d,12,w/2);
  let curva1=`M ${x} ${y} C ${x+c} ${y+h/2}, ${x+c} ${y+h/2}, ${x} ${y+h}`;
  let curva2=`M ${x+w} ${y} C ${x+w-c} ${y+h/2}, ${x+w-c} ${y+h/2}, ${x+w} ${y+h}`;
  let cut=rect(x,y,w,h)+path(curva1)+path(curva2);
  let fold=path(curva1)+path(curva2);
  return {svg:svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(), totalW:w,totalH:h};
}

function cajaPiramide(w,h,d){
  let side=w, totalW=side*2, totalH=side*2, p=centrar(totalW,totalH),x=p.x+side/2,y=p.y+side/2;
  let cut=rect(x,y,side,side);
  cut+=poly([[x,y],[x+side/2,y-h],[x+side,y]]);
  cut+=poly([[x+side,y],[x+side+h,y+side/2],[x+side,y+side]]);
  cut+=poly([[x,y+side],[x+side/2,y+side+h],[x+side,y+side]]);
  cut+=poly([[x,y],[x-h,y+side/2],[x,y+side]]);
  let fold=line(x,y,x+side,y)+line(x+side,y,x+side,y+side)+line(x,y+side,x+side,y+side)+line(x,y,x,y+side);
  return {svg:svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(), totalW,totalH};
}

function cajaHexagonal(w,h,d){
  let r=w/2, cx=105, cy=148.5, pts=[];
  for(let i=0;i<6;i++){let a=Math.PI/3*i+Math.PI/6;pts.push([cx+r*Math.cos(a),cy+r*Math.sin(a)]);}
  let cut=poly(pts);
  let fold="";
  pts.forEach((p,i)=>{let q=pts[(i+1)%6]; fold+=line(p[0],p[1],q[0],q[1]);});
  return {svg:svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(), totalW:w,totalH:w};
}

function bolsaAsas(w,h,d){
  let totalW=w+d+d,totalH=h+d+20,p=centrar(totalW,totalH),x=p.x+d,y=p.y+20;
  let cut=rect(x,y,w,h)+rect(x-d,y,d,h)+rect(x+w,y,d,h)+rect(x,y+h,w,d);
  cut+=path(`M ${x+w/2-16} ${y} C ${x+w/2-10} ${y-20}, ${x+w/2+10} ${y-20}, ${x+w/2+16} ${y}`);
  let fold=line(x,y,x,y+h)+line(x+w,y,x+w,y+h)+line(x,y+h,x+w,y+h);
  return {svg:svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(), totalW,totalH};
}

function sobreProfesional(w,h,solapa){
  let lat=clamp(w*0.22,16,32),sup=clamp(solapa,22,45),inf=clamp(solapa*0.65,16,34);
  let totalW=w+lat*2,totalH=h+sup+inf,p=centrar(totalW,totalH),x=p.x+lat,y=p.y+sup;
  let cut=rect(x,y,w,h)+poly([[x,y],[x+w/2,y-sup],[x+w,y]])+poly([[x,y+h],[x+w/2,y+h+inf],[x+w,y+h]])+poly([[x,y],[x-lat,y+h/2],[x,y+h]])+poly([[x+w,y],[x+w+lat,y+h/2],[x+w,y+h]]);
  let fold=line(x,y,x+w,y)+line(x,y+h,x+w,y+h)+line(x,y,x,y+h)+line(x+w,y,x+w,y+h);
  return {svg:svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(), totalW,totalH};
}

function sobreTarjeta(w,h,s){return sobreProfesional(w,h,clamp(s,20,35));}
function sobreCuadrado(w,h,s){let size=Math.min(w,h);return sobreProfesional(size,size,clamp(s,20,40));}

function etiquetaRect(w,h){
  let p=centrar(w,h);
  return {svg:svgInicio()+guiaA4()+corte(rect(p.x,p.y,w,h))+svgFin(), totalW:w,totalH:h};
}
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
