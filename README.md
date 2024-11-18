### **Explicación de los Archivos**

1. **`functionsAndTests.js`:**

   - Contiene tres funciones simples: `suma`, `esPar`, y `saludo`.
   - Las funciones están documentadas con comentarios que explican su propósito.

2. **`functionsAndTests.test.js`:**

   - Incluye pruebas unitarias para las funciones utilizando Jest.
   - Cada prueba tiene casos básicos y casos extremos para garantizar la robustez.

3. **`componentTests.js`:**
   - Incluye un componente React simple que permite al usuario ingresar un nombre y muestra un saludo.
   - La prueba para este componente utiliza React Testing Library para simular la interacción del usuario (ingresar texto y hacer clic en un botón).

---

### **Ejecutar las Pruebas**

Para ejecutar las pruebas, asegúrate de tener Jest y React Testing Library instalados. Luego, ejecuta:

```bash
npm test
```

Esto ejecutará todas las pruebas definidas en los archivos con la extensión `.test.js`.

Made by Prof. Martin with a lot of 💖 and ☕
