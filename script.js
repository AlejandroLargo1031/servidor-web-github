const version = "Blue";  // Cambia a "Green" en el deploy

function actualizarContenido() {
    const versionText = document.getElementById("version-text");

    if (version === "Green") {
        versionText.innerHTML = "Estás viendo la versión <strong>Green</strong>";
        document.body.style.backgroundColor = "#d4edda"; // Verde claro
    } else {
        versionText.innerHTML = "Estás viendo la versión <strong>Blue</strong>";
        document.body.style.backgroundColor = "#cce5ff"; // Azul claro
    }
}

actualizarContenido();
