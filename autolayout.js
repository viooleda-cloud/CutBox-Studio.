const DEFAULT_MARGIN=8;

function getSheetSize(){
 const t=document.getElementById("tamHoja")?.value||"A4";
 const map={
  A4:{w:210,h:297},
  A3:{w:297,h:420},
  LETTER:{w:216,h:279},
  LEGAL:{w:216,h:356},
  "12x12":{w:305,h:305},
  "12x24":{w:305,h:610}
 };
 if(t==="CUSTOM"){
  return {
   w:Number(document.getElementById("sheetW")?.value||210),
   h:Number(document.getElementById("sheetH")?.value||297)
  };
 }
 return map[t]||map.A4;
}

function evaluarHoja(totalW,totalH){
 const s=getSheetSize();
 const m=DEFAULT_MARGIN;
 const normal=(totalW<=s.w-m*2 && totalH<=s.h-m*2);
 const rotado=(totalH<=s.w-m*2 && totalW<=s.h-m*2);
 return {
   sheet:s,
   fits:normal||rotado,
   rotate:(!normal&&rotado),
   waste:Math.max(0,100-Math.round((totalW*totalH)/(s.w*s.h)*100))
 };
}

