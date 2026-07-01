function centrar(totalW,totalH){
  return {
    x:(210-totalW)/2,
    y:(297-totalH)/2
  };
}

function cajaSimple(w,h,d){
  let flap=14;
  let totalW=w+d+d+flap;
  let totalH=h+d+d;
  let p=centrar(totalW,totalH);
  let x=p.x+d;
  let y=p.y+d;

  let cut=
    rect(x,y,w,h)+
    rect(x-d,y,d,h)+
    rect(x+w,y,d,h)+
    rect(x,y-d,w,d)+
    rect(x,y+h,w,d)+
    poly([[x+w+d,y+8],[x+w+d+flap,y+16],[x+w+d+flap,y+h-16],[x+w+d,y+h-8]]);

  let fold=
    line(x,y,x,y+h)+
    line(x+w,y,x+w,y+h)+
    line(x-d,y,x-d,y+h)+
    line(x+w+d,y,x+w+d,y+h)+
    line(x,y,x+w,y)+
    line(x,y+h,x+w,y+h);

  return svgInicio()+corte(cut)+pliegue(fold)+svgFin();
}

function cajaConTapa(w,h,d){
  let flap=14;
  let tapa=d;
  let totalW=w+d+d+flap;
  let totalH=h+d+d+tapa+tapa;
  let p=centrar(totalW,totalH);
  let x=p.x+d;
  let y=p.y+d+tapa;

  let cut=
    rect(x,y,w,h)+
    rect(x-d,y,d,h)+
    rect(x+w,y,d,h)+
    rect(x,y-d,w,d)+
    rect(x,y+h,w,d)+
    rect(x,y-d-tapa,w,tapa)+
    rect(x,y+h+d,w,tapa)+
    poly([[x+w+d,y+8],[x+w+d+flap,y+16],[x+w+d+flap,y+h-16],[x+w+d,y+h-8]]);

  let fold=
    line(x,y,x,y+h)+
    line(x+w,y,x+w,y+h)+
    line(x-d,y,x-d,y+h)+
    line(x+w+d,y,x+w+d,y+h)+
    line(x,y,x+w,y)+
    line(x,y+h,x+w,y+h)+
    line(x,y-d,x+w,y-d)+
    line(x,y+h+d,x+w,y+h+d);

  return svgInicio()+corte(cut)+pliegue(fold)+svgFin();
}

function sobreProfesional(w,h,solapa){
  let lat=clamp(w*0.22,16,32);
  let sup=clamp(solapa,22,45);
  let inf=clamp(solapa*0.65,16,34);

  let totalW=w+lat*2;
  let totalH=h+sup+inf;
  let p=centrar(totalW,totalH);
  let x=p.x+lat;
  let y=p.y+sup;

  let cut=
    rect(x,y,w,h)+
    poly([[x,y],[x+w/2,y-sup],[x+w,y]])+
    poly([[x,y+h],[x+w/2,y+h+inf],[x+w,y+h]])+
    poly([[x,y],[x-lat,y+h/2],[x,y+h]])+
    poly([[x+w,y],[x+w+lat,y+h/2],[x+w,y+h]]);

  let fold=
    line(x,y,x+w,y)+
    line(x,y+h,x+w,y+h)+
    line(x,y,x,y+h)+
    line(x+w,y,x+w,y+h);

  return svgInicio()+corte(cut)+pliegue(fold)+svgFin();
}

function etiquetaRect(w,h){
  let p=centrar(w,h);
  return svgInicio()+corte(rect(p.x,p.y,w,h))+svgFin();
}

function etiquetaRedonda(w){
  let r=w/2;
  return svgInicio()+corte(`<circle cx="105" cy="148.5" r="${r}"/>`)+svgFin();
}

function cajaAlmohada(w,h,d){
  let p=centrar(w,h);
  let x=p.x;
  let y=p.y;
  let c=clamp(d,12,w/2);

  let cut=
    rect(x,y,w,h)+
    path(`M ${x} ${y} C ${x+c} ${y+h/2}, ${x+c} ${y+h/2}, ${x} ${y+h}`)+
    path(`M ${x+w} ${y} C ${x+w-c} ${y+h/2}, ${x+w-c} ${y+h/2}, ${x+w} ${y+h}`);

  let fold=
    path(`M ${x} ${y} C ${x+c} ${y+h/2}, ${x+c} ${y+h/2}, ${x} ${y+h}`)+
    path(`M ${x+w} ${y} C ${x+w-c} ${y+h/2}, ${x+w-c} ${y+h/2}, ${x+w} ${y+h}`);

  return svgInicio()+corte(cut)+pliegue(fold)+svgFin();
}
function cajaAutomontable(w,h,d){
  return cajaConTapa(w,h,d);
}
