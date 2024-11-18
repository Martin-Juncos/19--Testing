// functionsAndTests.test.js

// Importamos las funciones que queremos probar.
import { suma, esPar, saludo } from "./functionsAndTests";

describe("Pruebas para la función suma", () => {
  // Prueba básica para la función suma
  test("Suma correctamente 2 + 3", () => {
    expect(suma(2, 3)).toBe(5); // Comprobamos que la suma sea correcta.
  });

  test("Suma correctamente números negativos", () => {
    expect(suma(-2, -3)).toBe(-5); // Comprobamos con números negativos.
  });
});

describe("Pruebas para la función esPar", () => {
  // Prueba para un número par
  test("Devuelve true para un número par (4)", () => {
    expect(esPar(4)).toBeTruthy(); // Verifica que 4 es par.
  });

  // Prueba para un número impar
  test("Devuelve false para un número impar (5)", () => {
    expect(esPar(5)).toBeFalsy(); // Verifica que 5 no es par.
  });
});

describe("Pruebas para la función saludo", () => {
  // Prueba para un saludo con un nombre válido
  test("Devuelve un saludo con el nombre proporcionado", () => {
    expect(saludo("Juan")).toBe("Hola, Juan!"); // Verifica el saludo.
  });

  // Prueba con un nombre vacío
  test("Devuelve un saludo para un nombre vacío", () => {
    expect(saludo("")).toBe("Hola, !"); // Verifica que funcione con cadenas vacías.
  });
});
