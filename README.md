# Wizard en 3 pasos

Ejemplo de aplicación con un pequeño Wizard para la creación de una contraseña para un usuario 👍

## Empezando con el proyecto:

> Se recomienda la instalación de la extensión de VSC [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode).

- Tras clonar o decargar el código fuente, lanzar el siguiente comando desde la terminal para instalar todas las dependencias del proyecto, pudiendo utilizar `npm` o `yarn`:

```bash
npm install
```

- Arrancar el proyecto en local, en modo desarrollo. Se puede abrir [http://localhost:3000](http://localhost:3000) para verlo en el navegador. La página se refrescará cada vez que se modifiquen los ficheros. También se podrán ver los posibles errores de código por consola.

```bash
npm run start
```

- Para ejecutar el validador de [Flow](https://flow.org/en/) en todos los ficheros del proyecto que tenga la anotación `// @flow`:

```bash
npm run flow
```

- Correr los tests del proyecto en modo interactivo de auto refresco si se modifican los ficheros del proyecto:

```bash
npm run test
```

> Se puede ver más información en [running tests](https://facebook.github.io/create-react-app/docs/running-tests)

- Para ver la cobertura de test en todos los archivos del proyecto:

```bash
npm run coverage
```

## Extras añadidos sobre el proyecto original

- Añadida dependencia [wouter](https://github.com/molefrog/wouter), como enrutador para React (Elegido por tener un peso menor a [react-router](https://github.com/ReactTraining/react-router) y mayor facilidad de uso)
- Añadida dependencia [Emotion](https://emotion.sh/docs/introduction), utilizado en su `sabor` de `Styled Components`.
- Añadida dependencia de desarrollo [Flow](https://flow.org/en/), para poder conseguir un tipado en javascript.
