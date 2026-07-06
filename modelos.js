const PLANTILLAS=[
{id:"caja-simple",nombre:"Caja simple PRO",cat:"cajas"},
{id:"caja-tapa",nombre:"Caja con tapa PRO",cat:"cajas"},
{id:"caja-auto",nombre:"Caja automontable PRO",cat:"cajas"},
{id:"caja-pizza",nombre:"Caja pizza PRO",cat:"cajas"},
{id:"caja-pillow",nombre:"Caja almohada PRO",cat:"cajas"},
{id:"caja-taza",nombre:"Caja taza PRO",cat:"cajas"},
{id:"caja-vela",nombre:"Caja vela PRO",cat:"cajas"},
{id:"caja-jabon",nombre:"Caja jabón PRO",cat:"cajas"},
{id:"caja-visor",nombre:"Caja con visor PRO",cat:"cajas"},
{id:"caja-cupcake",nombre:"Caja cupcake PRO",cat:"cajas"},
{id:"sobre",nombre:"Sobre profesional",cat:"sobres"},
{id:"etiqueta-rect",nombre:"Etiqueta rectangular",cat:"etiquetas"},
{id:"etiqueta-redonda",nombre:"Etiqueta redonda",cat:"etiquetas"}
];

function ajustar(v,k){return v+(k||0)}
function data(svg,w,h){return{svg,totalW:w,totalH:h};}
function pestañaPegado(x,y,h,flap){return poly([[x,y+6],[x+flap,y+14],[x+flap,y+h-14],[x,y+h-6]])}
function orejaSuperior(x,y,w,tipo){if(tipo==='traba')return poly([[x+10,y],[x+w-10,y],[x+w-20,y-10],[x+20,y-10]]);if(tipo==='redonda')return path(`M ${x} ${y} Q ${x+w/2} ${y-18} ${x+w} ${y}`);return rect(x,y,w,10)}
function orejaInferior(x,y,w,tipo){if(tipo==='traba')return poly([[x+12,y],[x+w-12,y],[x+w-22,y+10],[x+22,y+10]]);if(tipo==='redonda')return path(`M ${x} ${y} Q ${x+w/2} ${y+18} ${x+w} ${y}`);return rect(x,y,w,10)}

function cajaPro(w,h,d,op={}){
 let k=op.kerf||0,flap=op.flap||12,top=(op.top===undefined?d:op.top),bottom=(op.bottom===undefined?d:op.bottom),topTipo=op.topTipo||'recta',bottomTipo=op.bottomTipo||'recta';
 w=ajustar(w,k);h=ajustar(h,k);d=ajustar(d,k);
 let totalW=w+d+d+flap,totalH=h+d+d+top+bottom,p=centrar(totalW,totalH),x=p.x+d,y=p.y+d+top;
 let cut=rect(x,y,w,h)+rect(x-d,y,d,h)+rect(x+w,y,d,h)+rect(x,y-d,w,d)+rect(x,y+h,w,d)+pestañaPegado(x+w+d,y,h,flap);
 if(top>0)cut+=orejaSuperior(x,y-d,w,topTipo);
 if(bottom>0)cut+=orejaInferior(x,y+h+d,w,bottomTipo);
 let fold=line(x,y,x,y+h)+line(x+w,y,x+w,y+h)+line(x-d,y,x-d,y+h)+line(x+w+d,y,x+w+d,y+h)+line(x,y,x+w,y)+line(x,y+h,x+w,y+h);
 if(top>0)fold+=line(x,y-d,x+w,y-d);
 if(bottom>0)fold+=line(x,y+h+d,x+w,y+h+d);
 return data(svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(),totalW,totalH)
}

function cajaSimple(w,h,d,op){return cajaPro(w,h,d,{...op,flap:14,topTipo:'recta',bottomTipo:'recta'})}
function cajaConTapa(w,h,d,op){return cajaPro(w,h,d,{...op,flap:14,topTipo:'traba',bottomTipo:'traba'})}
function cajaAutomontable(w,h,d,op){return cajaPro(w,h,d,{...op,flap:12,topTipo:'traba',bottomTipo:'traba'})}
function cajaPizza(w,h,d,op){return cajaPro(w,h,d,{...op,top:d,bottom:0,flap:10,topTipo:'traba'})}
function cajaTaza(w,h,d,op){return cajaPro(clamp(w,75,120),clamp(h,90,150),clamp(d,35,55),{...op,flap:16,topTipo:'traba',bottomTipo:'traba'})}
function cajaVela(w,h,d,op){return cajaPro(clamp(w,50,90),clamp(h,70,130),clamp(d,40,70),{...op,flap:14,topTipo:'redonda',bottomTipo:'traba'})}
function cajaJabon(w,h,d,op){return cajaPro(clamp(w,55,100),clamp(h,35,70),clamp(d,18,40),{...op,top:12,bottom:12,flap:10,topTipo:'redonda',bottomTipo:'redonda'})}

function cajaAlmohada(w,h,d,op={}){
 let p=centrar(w,h),x=p.x,y=p.y,c=clamp(d,12,w/2),c1=`M ${x} ${y} C ${x+c} ${y+h/2}, ${x+c} ${y+h/2}, ${x} ${y+h}`,c2=`M ${x+w} ${y} C ${x+w-c} ${y+h/2}, ${x+w-c} ${y+h/2}, ${x+w} ${y+h}`;
 return data(svgInicio()+guiaA4()+corte(rect(x,y,w,h)+path(c1)+path(c2))+pliegue(path(c1)+path(c2))+svgFin(),w,h)
}
function agregar(base,extra,t='corte'){return{...base,svg:base.svg.replace('</svg>',(t==='pliegue'?pliegue(extra):corte(extra))+'</svg>')}}
function cajaVisor(w,h,d,op={}){let base=cajaConTapa(w,h,d,op),p=centrar(w+d+d+14,h+d+d+d+d),x=p.x+d,y=p.y+d+d;return agregar(base,rect(x+w*.2,y+h*.18,w*.6,h*.42))}
function cajaCupcake(w,h,d,op={}){let base=cajaPro(clamp(w,65,95),clamp(h,60,100),clamp(d,45,70),{...op,topTipo:'traba',bottomTipo:'traba',flap:14}),ww=clamp(w,65,95),dd=clamp(d,45,70),hh=clamp(h,60,100),p=centrar(ww+dd*2+14,hh+dd*4),x=p.x+dd,y=p.y+dd*2;return agregar(base,circle(x+ww/2,y+hh/2,ww*.23))}
function sobreProfesional(w,h,s){let lat=clamp(w*.20,14,32),sup=clamp(s,18,48),inf=clamp(s*.65,14,34),totalW=w+lat*2,totalH=h+sup+inf,p=centrar(totalW,totalH),x=p.x+lat,y=p.y+sup,cut=rect(x,y,w,h)+poly([[x,y],[x+w/2,y-sup],[x+w,y]])+poly([[x,y+h],[x+w/2,y+h+inf],[x+w,y+h]])+poly([[x,y],[x-lat,y+h/2],[x,y+h]])+poly([[x+w,y],[x+w+lat,y+h/2],[x+w,y+h]]),fold=line(x,y,x+w,y)+line(x,y+h,x+w,y+h)+line(x,y,x,y+h)+line(x+w,y,x+w,y+h);return data(svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(),totalW,totalH)}
function etiquetaRect(w,h){let p=centrar(w,h);return data(svgInicio()+guiaA4()+corte(rect(p.x,p.y,w,h))+svgFin(),w,h)}
function etiquetaRedonda(w){let r=w/2,s=getSheetSize(),cx=s.w/2,cy=s.h/2;return data(svgInicio()+guiaA4()+corte(circle(cx,cy,r))+svgFin(),w,w)}
