function generarPlantilla(){
  const modelo=document.getElementById("modelo").value;
  const ancho=Number(document.getElementById("ancho").value);
  const alto=Number(document.getElementById("alto").value);
  const prof=Number(document.getElementById("prof").value);
  if(!ancho||!alto||!prof){alert("Completá las medidas.");return;}
  let svg="",nombre="plantilla_cutbox";
  if(modelo==="caja-simple"){svg=cajaSimple(ancho,alto,prof);nombre="caja_simple_cutbox";}
  if(modelo==="caja-tapa"){svg=cajaConTapa(ancho,alto,prof);nombre="caja_con_tapa_cutbox";}
  if(modelo==="sobre"){svg=sobreProfesional(ancho,alto,prof);nombre="sobre_profesional_cutbox";}
  if(modelo==="etiqueta-rect"){svg=etiquetaRect(ancho,alto);nombre="etiqueta_rectangular_cutbox";}
  if(modelo==="etiqueta-redonda"){svg=etiquetaRedonda(ancho);nombre="etiqueta_redonda_cutbox";}
  if(modelo==="pillow"){svg=cajaAlmohada(ancho,alto,prof);nombre="caja_almohada_cutbox";}
  if(modelo==="auto"){svg=cajaAutomontable(ancho,alto,prof);nombre="caja_automontable_cutbox";}
  mostrarSVG(svg,nombre);
}
