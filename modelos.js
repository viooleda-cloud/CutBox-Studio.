const PLANTILLAS=[
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
{id:"caja-perfume",nombre:"Caja para perfume",cat:"cajas"},
{id:"caja-botella",nombre:"Caja para botella chica",cat:"cajas"},
{id:"caja-visor",nombre:"Caja con visor",cat:"cajas"},
{id:"caja-taza-interno",nombre:"Caja taza con traba interna",cat:"cajas"},
{id:"caja-vela-cilindrica",nombre:"Caja vela cilíndrica",cat:"cajas"},
{id:"caja-jabon-artesanal",nombre:"Caja jabón artesanal",cat:"cajas"},
{id:"caja-chocolates",nombre:"Caja chocolates divisiones",cat:"cajas"},
{id:"caja-bandeja-reforzada",nombre:"Bandeja reforzada",cat:"cajas"},
{id:"caja-cajon-funda",nombre:"Caja cajón + funda",cat:"cajas"},
{id:"caja-regalo-cierre",nombre:"Caja regalo cierre superior",cat:"regalos"},
{id:"caja-cierre-mariposa",nombre:"Caja cierre mariposa",cat:"regalos"},
{id:"caja-cierre-corazon",nombre:"Caja cierre corazón",cat:"regalos"},
{id:"caja-milk",nombre:"Caja milk carton",cat:"cajas"},
{id:"caja-gable",nombre:"Caja gable con manija",cat:"cajas"},
{id:"caja-exhibidor",nombre:"Exhibidor inclinado",cat:"cajas"},
{id:"caja-cupcake",nombre:"Caja cupcake",cat:"cajas"},
{id:"caja-donut",nombre:"Caja donut",cat:"cajas"},
{id:"sobre",nombre:"Sobre profesional",cat:"sobres"},
{id:"etiqueta-rect",nombre:"Etiqueta rectangular",cat:"etiquetas"},
{id:"etiqueta-redonda",nombre:"Etiqueta redonda",cat:"etiquetas"}
];

function ajustar(v,kerf){return v+kerf;}
function safe(v,min,max){return clamp(v,min,max);}
function info(svg,totalW,totalH){return {svg,totalW,totalH};}

function cajaCruz(w,h,d,op={}){
 let kerf=op.kerf||0,flap=op.flap||14,top=op.top||0,bottom=op.bottom||0;
 w=ajustar(w,kerf);h=ajustar(h,kerf);d=ajustar(d,kerf);
 let totalW=w+d+d+flap,totalH=h+d+d+top+bottom,p=centrar(totalW,totalH),x=p.x+d,y=p.y+d+top;
 let cut=rect(x,y,w,h)+rect(x-d,y,d,h)+rect(x+w,y,d,h)+rect(x,y-d,w,d)+rect(x,y+h,w,d);
 cut+=poly([[x+w+d,y+8],[x+w+d+flap,y+16],[x+w+d+flap,y+h-16],[x+w+d,y+h-8]]);
 if(top>0)cut+=rect(x,y-d-top,w,top);
 if(bottom>0)cut+=rect(x,y+h+d,w,bottom);
 let fold=line(x,y,x,y+h)+line(x+w,y,x+w,y+h)+line(x-d,y,x-d,y+h)+line(x+w+d,y,x+w+d,y+h)+line(x,y,x+w,y)+line(x,y+h,x+w,y+h);
 if(top>0)fold+=line(x,y-d,x+w,y-d);
 if(bottom>0)fold+=line(x,y+h+d,x+w,y+h+d);
 return info(svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(),totalW,totalH);
}
function cajaSimple(w,h,d,op){return cajaCruz(w,h,d,{...op,flap:14});}
function cajaConTapa(w,h,d,op){return cajaCruz(w,h,d,{...op,top:d,bottom:d,flap:14});}
function cajaAutomontable(w,h,d,op){return cajaCruz(w,h,d,{...op,top:12,bottom:12,flap:12});}
function cajaPizza(w,h,d,op){return cajaCruz(w,h,d,{...op,top:d,bottom:0,flap:8});}
function cajaAlmohada(w,h,d,op={}){
 let p=centrar(w,h),x=p.x,y=p.y,c=clamp(d,12,w/2);
 let c1=`M ${x} ${y} C ${x+c} ${y+h/2}, ${x+c} ${y+h/2}, ${x} ${y+h}`;
 let c2=`M ${x+w} ${y} C ${x+w-c} ${y+h/2}, ${x+w-c} ${y+h/2}, ${x+w} ${y+h}`;
 return info(svgInicio()+guiaA4()+corte(rect(x,y,w,h)+path(c1)+path(c2))+pliegue(path(c1)+path(c2))+svgFin(),w,h);
}
function cajaTaza(w,h,d,op){return cajaCruz(safe(w,75,120),safe(h,90,150),safe(d,35,55),{...op,top:d,bottom:d,flap:16});}
function cajaVela(w,h,d,op){return cajaCruz(safe(w,50,90),safe(h,70,130),safe(d,40,70),{...op,top:d,bottom:d,flap:14});}
function cajaJabon(w,h,d,op){return cajaCruz(safe(w,55,100),safe(h,35,70),safe(d,18,40),{...op,top:8,bottom:8,flap:10});}
function cajaBombon(w,h,d,op){return cajaCruz(safe(w,70,140),safe(h,45,90),safe(d,15,35),{...op,top:15,bottom:15,flap:8});}
function cajaCosmetico(w,h,d,op){return cajaCruz(safe(w,35,70),safe(h,100,180),safe(d,25,55),{...op,top:d,bottom:d,flap:12});}
function cajaBandeja(w,h,d,op={}){let totalW=w+d+d,totalH=h+d+d,p=centrar(totalW,totalH),x=p.x+d,y=p.y+d,cut=rect(x,y,w,h)+rect(x-d,y,d,h)+rect(x+w,y,d,h)+rect(x,y-d,w,d)+rect(x,y+h,w,d),fold=line(x,y,x,y+h)+line(x+w,y,x+w,y+h)+line(x,y,x+w,y)+line(x,y+h,x+w,y+h);return info(svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(),totalW,totalH);}
function cajaFaja(w,h,d,op={}){let totalW=w*2+d*2,totalH=h,p=centrar(totalW,totalH),x=p.x,y=p.y,cut=rect(x,y,totalW,h),fold=line(x+w,y,x+w,y+h)+line(x+w+d,y,x+w+d,y+h)+line(x+w+d+w,y,x+w+d+w,y+h);return info(svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(),totalW,totalH);}
function cajaPerfume(w,h,d,op){return cajaCruz(safe(w,45,75),safe(h,120,190),safe(d,25,55),{...op,top:d,bottom:d,flap:12});}
function cajaBotella(w,h,d,op){return cajaCruz(safe(w,55,85),safe(h,150,220),safe(d,45,75),{...op,top:d,bottom:d,flap:16});}
function cajaVisor(w,h,d,op={}){let base=cajaCruz(w,h,d,{...op,top:d,bottom:d,flap:14}),p=centrar(w+d+d+14,h+d+d+d+d),x=p.x+d,y=p.y+d+d,visor=rect(x+w*.2,y+h*.18,w*.6,h*.42);return {...base,svg:base.svg.replace("</svg>",corte(visor)+"</svg>")};}
function cajaTazaInterno(w,h,d,op={}){let base=cajaTaza(w,h,d,op),ww=safe(w,75,120),dd=safe(d,35,55),hh=safe(h,90,150),p=centrar(ww+dd*2+16,hh+dd*4),x=p.x+dd,y=p.y+dd*2,insert=rect(x+10,y+20,ww-20,18)+line(x+10,y+29,x+ww-10,y+29);return {...base,svg:base.svg.replace("</svg>",corte(insert)+"</svg>")};}
function cajaVelaCilindrica(w,h,d,op={}){let base=cajaVela(w,h,d,op),ww=safe(w,50,90),dd=safe(d,40,70),hh=safe(h,70,130),p=centrar(ww+dd*2+14,hh+dd*4),x=p.x+dd,y=p.y+dd*2,hole=circle(x+ww/2,y+hh/2,ww*.18);return {...base,svg:base.svg.replace("</svg>",corte(hole)+"</svg>")};}
function cajaJabonArtesanal(w,h,d,op={}){let base=cajaJabon(w,h,d,op),ww=safe(w,55,100),dd=safe(d,18,40),p=centrar(ww+dd*2+10,safe(h,35,70)+dd*2+16),x=p.x+dd,y=p.y+dd+8,vent=path(`M ${x+12} ${y+12} Q ${x+ww/2} ${y-4} ${x+ww-12} ${y+12} Q ${x+ww/2} ${y+30} ${x+12} ${y+12}`);return {...base,svg:base.svg.replace("</svg>",corte(vent)+"</svg>")};}
function cajaChocolates(w,h,d,op={}){let base=cajaBombon(w,h,d,op),ww=safe(w,70,140),hh=safe(h,45,90),dd=safe(d,15,35),p=centrar(ww+dd*2,hh+dd*3),x=p.x+dd,y=p.y+dd*2,div=line(x+ww/3,y,x+ww/3,y+hh)+line(x+2*ww/3,y,x+2*ww/3,y+hh)+line(x,y+hh/2,x+ww,y+hh/2);return {...base,svg:base.svg.replace("</svg>",pliegue(div)+"</svg>")};}
function cajaBandejaReforzada(w,h,d,op={}){let base=cajaBandeja(w,h,d,op),p=centrar(w+d+d,h+d+d),x=p.x+d,y=p.y+d,ref=rect(x+4,y+4,w-8,h-8);return {...base,svg:base.svg.replace("</svg>",pliegue(ref)+"</svg>")};}
function cajaCajonFunda(w,h,d,op={}){return cajaBandeja(w,h,d,op);}
function cajaRegaloCierre(w,h,d,op={}){let base=cajaAutomontable(w,h,d,op),p=centrar(w+d+d+24,h+d+d+20),x=p.x+d,y=p.y+d+10,cierre=poly([[x+w*.35,y-d-8],[x+w*.65,y-d-8],[x+w*.58,y-d-18],[x+w*.42,y-d-18]]);return {...base,svg:base.svg.replace("</svg>",corte(cierre)+"</svg>")};}
function cajaCierreMariposa(w,h,d,op={}){let base=cajaAutomontable(w,h,d,op),p=centrar(w+d+d+24,h+d+d+24),x=p.x+d,y=p.y+d+12,mar=poly([[x+w*.25,y-d-8],[x+w*.5,y-d-20],[x+w*.75,y-d-8],[x+w*.5,y-d+4]]);return {...base,svg:base.svg.replace("</svg>",corte(mar)+"</svg>")};}
function cajaCierreCorazon(w,h,d,op={}){let base=cajaAutomontable(w,h,d,op),p=centrar(w+d+d+24,h+d+d+24),x=p.x+d+w/2,y=p.y+d-10,cor=path(`M ${x} ${y+10} C ${x-20} ${y-5}, ${x-8} ${y-22}, ${x} ${y-10} C ${x+8} ${y-22}, ${x+20} ${y-5}, ${x} ${y+10} Z`);return {...base,svg:base.svg.replace("</svg>",corte(cor)+"</svg>")};}
function cajaMilk(w,h,d,op={}){let base=cajaCruz(w,h,d,{...op,top:d*1.4,bottom:d,flap:12});let p=centrar(w+d+d+12,h+d+d+d*1.4),x=p.x+d,y=p.y+d+d*1.4;let roof=line(x,y-d,x+w/2,y-d-d*.6)+line(x+w,y-d,x+w/2,y-d-d*.6);return {...base,svg:base.svg.replace("</svg>",pliegue(roof)+"</svg>")};}
function cajaGable(w,h,d,op={}){let base=cajaCruz(w,h,d,{...op,top:d*1.8,bottom:d,flap:14});let p=centrar(w+d+d+14,h+d+d+d*1.8),x=p.x+d,y=p.y+d+d*1.8;let handle=path(`M ${x+w*.35} ${y-d*1.25} Q ${x+w/2} ${y-d*1.55} ${x+w*.65} ${y-d*1.25}`);return {...base,svg:base.svg.replace("</svg>",corte(handle)+"</svg>")};}
function cajaExhibidor(w,h,d,op={}){let totalW=w+d+d,totalH=h+d+35,p=centrar(totalW,totalH),x=p.x+d,y=p.y+35;let cut=rect(x,y,w,h)+rect(x-d,y,d,h)+rect(x+w,y,d,h)+rect(x,y+h,w,d)+path(`M ${x} ${y} Q ${x+w/2} ${y-35} ${x+w} ${y}`);let fold=line(x,y,x,y+h)+line(x+w,y,x+w,y+h)+line(x,y+h,x+w,y+h);return info(svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(),totalW,totalH);}
function cajaTuboFaja(w,h,d,op={}){return cajaFaja(w,h,d,op);}
function cajaCupcake(w,h,d,op={}){let base=cajaCruz(safe(w,65,95),safe(h,60,100),safe(d,45,70),{...op,top:d,bottom:d,flap:14});let ww=safe(w,65,95),dd=safe(d,45,70),hh=safe(h,60,100),p=centrar(ww+dd*2+14,hh+dd*4),x=p.x+dd,y=p.y+dd*2,hole=circle(x+ww/2,y+hh/2,ww*.23);return {...base,svg:base.svg.replace("</svg>",corte(hole)+"</svg>")};}
function cajaDonut(w,h,d,op={}){return cajaCupcake(safe(w,75,120),safe(h,35,65),safe(d,55,85),op);}
function sobreProfesional(w,h,solapa){let lat=safe(w*.20,14,32),sup=safe(solapa,18,48),inf=safe(solapa*.65,14,34),totalW=w+lat*2,totalH=h+sup+inf,p=centrar(totalW,totalH),x=p.x+lat,y=p.y+sup,cut=rect(x,y,w,h)+poly([[x,y],[x+w/2,y-sup],[x+w,y]])+poly([[x,y+h],[x+w/2,y+h+inf],[x+w,y+h]])+poly([[x,y],[x-lat,y+h/2],[x,y+h]])+poly([[x+w,y],[x+w+lat,y+h/2],[x+w,y+h]]),fold=line(x,y,x+w,y)+line(x,y+h,x+w,y+h)+line(x,y,x,y+h)+line(x+w,y,x+w,y+h);return info(svgInicio()+guiaA4()+corte(cut)+pliegue(fold)+svgFin(),totalW,totalH);}
function etiquetaRect(w,h){let p=centrar(w,h);return info(svgInicio()+guiaA4()+corte(rect(p.x,p.y,w,h))+svgFin(),w,h);}
function etiquetaRedonda(w){let r=w/2;return info(svgInicio()+guiaA4()+corte(circle(105,148.5,r))+svgFin(),w,w);}
