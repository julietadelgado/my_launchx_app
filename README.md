# My Launch App

### Pasos para la creación de este proyecto JS

1. npm init (Crear proyecto JS)
2. npm install --save-dev jest (Agregar dependencia jest para pruebas unitarias)
3. Crear .gitignore y agregar la ruta **/node_modules esto para prevenir que git versione esta carpeta
4. Crear carpeta app
5. Dentro de la carpeta app crear el archivo missionCommander.js con su correspondiente código
6. En la raíz crear el archivo index.js con su correspondiente código
7. Agregar en package.json dentro de los scripts "start": "node index.js", esto para habilitar el comando npm start
8. Ejecutar en la terminal npm start para validar que funciona el proyecto JS

### Pasos para la creación de una prueba de unidad del proyecto JS
1. Crear carpeta test
2. Dentro de la carpeta crear el archivo missionCommander.test.js y agregar el código de la prueba
3. En el archivo package.json modificar la línea "test" por lo siguiente (esto es para poder ejecutar el comando npm test): 
    - Para entorno Linux: "test": "node ./node_modules/.bin/jest"
    - Para entorno Windows: "test": "node ./node_modules/jest/bin/jest.js"
4. Ejecutar en la terminal el comando npm test test/missionCommander.test.js (test/missionCommander.test.js es la ruta del archivo de prueba)
5. Es recomendable hacer una prueba fallida y después una prueba valida.