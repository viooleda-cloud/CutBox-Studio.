const SHEETS={
A4:{w:210,h:297},
A3:{w:297,h:420},
LETTER:{w:216,h:279},
LEGAL:{w:216,h:356},
"12x12":{w:305,h:305},
"12x24":{w:305,h:610}
};

function hojaActual(){
 const t=document.getElementById("tamHoja")?.value||"A4";
 if(t==="CUSTOM"){
   return {
     w:Number(document.getElementById("sheetW")?.value||210),
     h:Number(document.getElementById("sheetH")?.value||297)
   };
 }
 return SHEETS[t]||SHEETS.A4;
}
