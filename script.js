let version = "Blue";

fetch("version.txt")
  .then((response) => response.text())
  .then((data) => {
    version = data.trim(); 
    actualizarContenido();
  })
  .catch((error) => {
    console.error("Error al obtener la versión:", error);
    actualizarContenido(); 
  });

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
