function generarPlantilla(){
    const modelo=document.getElementById("modelo").value;

    const ancho=Number(document.getElementById("ancho").value);
    const alto=Number(document.getElementById("alto").value);
    const prof=Number(document.getElementById("prof").value);

    let svg="";

    switch(modelo){

        case "caja-simple":
            svg=cajaSimple(ancho,alto,prof);
            mostrarSVG(svg,"caja_simple");
            break;

        case "caja-tapa":
            alert("Próximamente");
            break;

        case "sobre":
            svg=sobreProfesional(ancho,alto);
            mostrarSVG(svg,"sobre");
            break;

        case "etiqueta-rect":
            alert("Próximamente");
            break;

        case "etiqueta-redonda":
            alert("Próximamente");
            break;

        default:
            alert("Modelo no encontrado");

    }

}
