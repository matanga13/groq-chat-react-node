# Matanga GPT

Matanga GPT es una aplicación de chat que utiliza la API de Groq para proporcionar respuestas inteligentes y contextuales. Esta aplicación está construida con una arquitectura de frontend en React y backend en Node.js, utilizando Vite para el desarrollo del frontend y Sequelize para la gestión de la base de datos en el backend.

## Características

- **Chat en tiempo real**: Interactúa con Matanga GPT y recibe respuestas instantáneas.
- **Gestión de conversaciones**: Guarda y recupera conversaciones anteriores.
- **Indicador de escritura**: Muestra cuando Matanga GPT está escribiendo una respuesta.
- **Interfaz de usuario intuitiva**: Diseñada para una experiencia de usuario fluida y agradable.

## Estructura del Proyecto

En el directorio `backend` se encuentra el código del servidor Node.js, mientras que en el directorio `frontend` se encuentra el código del cliente React. Cada directorio tiene su propia estructura de carpetas y archivos específicos para su funcionalidad.


## Instalación

### Backend

1. Clona el repositorio y navega al directorio [`backend`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fmngarcia%2FDocuments%2F%5B00%5DDEV%2FNODE-PROJECTS%2Fgroq-chat-react-node%2Fbackend%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/mngarcia/Documents/[00]DEV/NODE-PROJECTS/groq-chat-react-node/backend"):
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    cd backend
    ```

2. Instala las dependencias:
    ```sh
    npm install
    ```

3. Configura las variables de entorno en el archivo `.env`:
    ```env
    DATABASE_URL=<TU_DATABASE_URL>
    GROQ_API_KEY=<TU_GROQ_API_KEY>
    ```

4. Inicia el servidor:
    ```sh
    npm start
    ```

### Frontend

1. Navega al directorio [`frontend`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fmngarcia%2FDocuments%2F%5B00%5DDEV%2FNODE-PROJECTS%2Fgroq-chat-react-node%2Ffrontend%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/mngarcia/Documents/[00]DEV/NODE-PROJECTS/groq-chat-react-node/frontend"):
    ```sh
    cd frontend
    ```

2. Instala las dependencias:
    ```sh
    npm install
    ```

3. Inicia la aplicación:
    ```sh
    npm run dev
    ```

## Uso

1. Abre tu navegador y navega a `http://localhost:3000`.
2. Interactúa con Matanga GPT escribiendo mensajes en el campo de entrada y enviándolos.
3. Puedes iniciar nuevas conversaciones y ver conversaciones anteriores.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.