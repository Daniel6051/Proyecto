// Simular datos desde "base de datos"
const datosTurno = {
  nombre: "Juan Pérez",
  profesional: "Dra. Laura Gómez",
  especialidad: "Cardiología",
  valor: "$2500",
  ubicacion: "Clínica San Martín, Mendoza"
};

// Cargar los datos en el formulario
window.onload = () => {
  document.getElementById('nombre').value = datosTurno.nombre;
  document.getElementById('profesional').value = datosTurno.profesional;
  document.getElementById('especialidad').value = datosTurno.especialidad;
  document.getElementById('valor').value = datosTurno.valor;
  document.getElementById('ubicacion').value = datosTurno.ubicacion;
};

// Descargar turno como PDF (requiere html2pdf)
function descargarTurno() {
  const contenido = `
    <h3>Turno Confirmado</h3>
    <p><strong>Nombre:</strong> ${datosTurno.nombre}</p>
    <p><strong>Profesional:</strong> ${datosTurno.profesional}</p>
    <p><strong>Especialidad:</strong> ${datosTurno.especialidad}</p>
    <p><strong>Valor:</strong> ${datosTurno.valor}</p>
    <p><strong>Ubicación:</strong> ${datosTurno.ubicacion}</p>
  `;

  const elemento = document.createElement("div");
  elemento.innerHTML = contenido;

  html2pdf().from(elemento).save("turno-confirmado.pdf");
}
