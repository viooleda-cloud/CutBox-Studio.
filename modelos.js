function cajaSimple(w,h,d){
  let totalW=w+d+d+14,totalH=h+d+d,x=(210-totalW)/2+d,y=(297-totalH)/2+d,flap=14;
  let cut=rect(x,y,w,h)+rect(x-d,y,d,h)+rect(x+w,y,d,h)+rect(x,y-d,w,d)+rect(x,y+h,w,d);
  cut+=poly([[x+w+d,y+8],[x+w+d+flap,y+16],[x+w+d+flap,y+h-16],[x+w+d,y+h-8]]);
  let fold=line(x,y,x,y+h)+line(x+w,y,x+w,y+h)+line(x-d,y,x-d,y+h)+line(x+w+d,y,x+w+d,y+h)+line(x,y,x+w,y)+line(x,y+h,x+w,y+h);
  return svgInicio()+corte(cut)+pliegue(fold)+svgFin();
}
function cajaConTapa(w,h,d){
  let x=28,y=72,tapa=d,flap=10;
  let cut=rect(x,y,w,h)+rect(x+w,y,d,h)+rect(x-d,y,d,h)+rect(x,y-d,w,d)+rect(x,y+h,w,d)+rect(x,y-d-tapa,w,tapa)+rect(x,y+h+d,w,tapa);
  cut+=poly([[x+w+d,y+8],[x+w+d+flap,y+16],[x+w+d+flap,y+h-16],[x+w+d,y+h-8]]);
  let fold=line(x,y,x,y+h)+line(x+w,y,x+w,y+h)+line(x-d,y,x-d,y+h)+line(x+w+d,y,x+w+d,y+h)+line(x,y,x+w,y)+line(x,y+h,x+w,y+h)+line(x,y-d,x+w,y-d)+line(x,y+h+d,x+w,y+h+d);
  return svgInicio()+corte(cut)+pliegue(fold)+svgFin();
}
function sobreProfesional(w,h,solapa){
  let lat=clamp(w*0.28,18,38),sup=clamp(solapa,20,55),inf=clamp(solapa*0.75,15,42);
  let totalW=w+lat*2,totalH=h+sup+inf,x=(210-totalW)/2+lat,y=(297-totalH)/2+sup;
  let cut=rect(x,y,w,h);
  cut+=poly([[x,y],[x+w/2,y-sup],[x+w,y]])+poly([[x,y+h],[x+w/2,y+h+inf],[x+w,y+h]]);
  cut+=poly([[x,y],[x-lat,y+h/2],[x,y+h]])+poly([[x+w,y],[x+w+lat,y+h/2],[x+w,y+h]]);
  let fold=line(x,y,x+w,y)+line(x,y+h,x+w,y+h)+line(x,y,x,y+h)+line(x+w,y,x+w,y+h);
  return svgInicio()+corte(cut)+pliegue(fold)+svgFin();
}
function etiquetaRect(w,h){let x=(210-w)/2,y=(297-h)/2;return svgInicio()+corte(rect(x,y,w,h))+svgFin();}
function etiquetaRedonda(w){let r=w/2;return svgInicio()+corte(`<circle cx="105" cy="148" r="${r}"/>`)+svgFin();}
function cajaAlmohada(w,h,d){
  let x=(210-w)/2,y=(297-h)/2,c=d;
  let cut=rect(x,y,w,h)+path(`M ${x} ${y} C ${x+c} ${y+h/2}, ${x+c} ${y+h/2}, ${x} ${y+h}`)+path(`M ${x+w} ${y} C ${x+w-c} ${y+h/2}, ${x+w-c} ${y+h/2}, ${x+w} ${y+h}`);
  let fold=path(`M ${x} ${y} C ${x+c} ${y+h/2}, ${x+c} ${y+h/2}, ${x} ${y+h}`)+path(`M ${x+w} ${y} C ${x+w-c} ${y+h/2}, ${x+w-c} ${y+h/2}, ${x+w} ${y+h}`);
  return svgInicio()+corte(cut)+pliegue(fold)+svgFin();
}
