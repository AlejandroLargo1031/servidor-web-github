document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const version = body.getAttribute("data-version"); // Leer la versión desde el atributo en el HTML
    const versionText = document.getElementById("version-text");

    if (version === "Green") {
        versionText.innerHTML = "Estás viendo la versión <strong>Green</strong>";
        document.body.style.backgroundColor = "#d4edda"; // Verde claro
    } else {
        versionText.innerHTML = "Estás viendo la versión <strong>Blue</strong>";
        document.body.style.backgroundColor = "#cce5ff"; // Azul claro
    }
});
