// componentTests.js

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// **Componente simple para pruebas**
// Este componente toma un nombre y muestra un saludo al hacer clic en un botón.
function SaludoComponent() {
  const [nombre, setNombre] = React.useState("");
  const [mensaje, setMensaje] = React.useState("");

  const manejarCambio = (e) => setNombre(e.target.value);
  const mostrarSaludo = () => setMensaje(`Hola, ${nombre}!`);

  return (
    <div>
      <label htmlFor="nombre">Nombre:</label>
      <input id="nombre" value={nombre} onChange={manejarCambio} />
      <button onClick={mostrarSaludo}>Enviar</button>
      <p>{mensaje}</p>
    </div>
  );
}

// **Pruebas para el componente SaludoComponent**
test("Permite al usuario ingresar un nombre y muestra un saludo", () => {
  render(<SaludoComponent />); // Renderiza el componente en un entorno de prueba.

  const input = screen.getByLabelText(/nombre/i); // Selecciona el input por su etiqueta.
  userEvent.type(input, "Juan"); // Escribe "Juan" en el campo de texto.

  const button = screen.getByText(/enviar/i); // Busca el botón por su texto.
  userEvent.click(button); // Simula un clic en el botón.

  expect(screen.getByText("Hola, Juan!")).toBeInTheDocument(); // Verifica que se muestre el saludo esperado.
});
