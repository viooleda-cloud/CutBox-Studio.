function mostrarSVG(svg, nombreArchivo){
    document.getElementById("resultado").innerHTML =
        svg +
        "<br><br><a class='descarga' download='" +
        nombreArchivo +
        ".svg' href='data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(svg) +
        "'>📥 Descargar SVG</a>";

}
