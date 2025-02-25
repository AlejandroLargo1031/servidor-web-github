
document.addEventListener("DOMContentLoaded", function () {
    const versionIndicator = document.getElementById("version-indicator");

    // Detectar si estamos en la versión Blue o Green
    if (window.location.href.includes("blue")) {
        versionIndicator.textContent = "Versión: Blue";
        document.body.style.backgroundColor = "#007BFF"; // Azul
    } else {
        versionIndicator.textContent = "Versión: Green";
        document.body.style.backgroundColor = "#28A745"; // Verde
    }

    console.log("Script cargado correctamente.");
});
