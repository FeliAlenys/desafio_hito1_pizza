
# Pizzería Mamma Mia

## Descripción Hito 2
Aplicación de gestión de pizzería desarrollada con React, que incluye formularios de registro y login, navegación dinámica y diseño responsivo.

### Funcionalidades recientes
- **Formulario de registro:** Valida campos requeridos, verifica la longitud mínima de la contraseña y confirma que ambas contraseñas coincidan.
- **Formulario de login:** Valida campos requeridos y longitud mínima de la contraseña.
- **Navegación dinámica:** Los formularios de registro y login están accesibles desde el menú de navegación.
- **Nuevo ícono:** Se actualizó el ícono de la pestaña a una imagen de pizza.
- **Estado y eventos:** Manejo de estado en los formularios y mensajes de éxito/error.

### Cómo iniciar el proyecto
1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Inicia el servidor con `npm run dev`.

### Tecnologías utilizadas
- React
- React Router
- Bootstrap
- ESLint

## Descripción HITO 3
1. Se configuró el componente principal App.jsx para renderizar la barra de navegación (Navbar) y la página principal (Home).
2. Se dejaron comentados los componentes Register, Login y Footer para hitos futuros.
3. Se mantiene la estructura con React Router para manejar las rutas de la aplicación.

### Cambios realizados en Home.jsx
- Se utilizó el archivo pizzas.js como fuente de datos para cargar dinámicamente las pizzas en la página principal.
- Se reemplazó el renderizado estático de tarjetas por un mapeo dinámico que recorre el array de pizzas.
- Cada pizza muestra su nombre, precio, lista de ingredientes, descripción e imagen de manera dinámica.

### Cambios realizados en CardPizza.jsx
- Se agregó un renderizado dinámico de los ingredientes utilizando listas no ordenadas <ul>.
- Se implementó una nueva prop desc para mostrar descripciones detalladas de las pizzas en las tarjetas.
- Se utilizó PropTypes para validar las props recibidas, asegurando que los datos sean consistentes.

### Cambios realizados en Cart.jsx
- Creación de un componente dinámico para el carrito de compras.
- Uso de useState para manejar la cantidad de pizzas en el carrito.
- Implementación de botones para aumentar/disminuir cantidades y eliminación automática cuando la cantidad llega a 0.
- Cálculo y renderización del precio total del carrito.
- Inclusión de un botón "Pagar" para hitos futuros.

### Cambios realizados en pizzas.js
- Se incorpora pizzas.js a utils
- Se integró el componente Cart en las rutas principales de la aplicación.
- Se actualizó la barra de navegación para incluir un enlace al carrito.
- Se verificó la funcionalidad de navegación entre las rutas.

## Descripción HITO 4
- Utilización de la API
- Modificación del home.jsx
- Creacion y utilizacion de pizza.jsx

## Actualizaciones HITO 5

### Mejora del Componente Navbar
- Se implementó una barra de navegación responsiva utilizando React y React-Bootstrap.
- Se añadieron enlaces de navegación dinámicos basados en el estado de autenticación del usuario.
- Se integraron iconos de Font Awesome para mejorar el atractivo visual.
- Se incluyó un icono de carrito de compras con visualización del precio total.

### Flujo de Autenticación
- Se configuró la renderización condicional en el Navbar para estados de usuario conectado y desconectado.
- Se añadieron enlaces provisionales para el perfil de usuario y la funcionalidad de cierre de sesión.
- Se prepararon enlaces provisionales de inicio de sesión y registro para usuarios no autenticados.

### Integración del Carrito de Compras
- Se implementó un contexto de carrito de compras para gestionar el estado del carrito en toda la aplicación.
- Se añadió una función de cálculo del total del carrito en el Navbar.
- Se utilizó la función de utilidad `formatPrice` para mostrar precios formateados.

### Mejoras de Estilo y UI
- Se aplicaron clases de Bootstrap para un diseño responsivo y un estilo consistente.
- Se creó un archivo CSS separado (`navbar.css`) para estilos específicos del Navbar.

### Próximos Pasos
- Implementar la lógica de autenticación real para reemplazar la variable provisional `token`.
- Crear páginas/componentes de Perfil, Inicio de Sesión, Registro y Cierre de Sesión.
- Mejorar la funcionalidad del carrito de compras con características de agregar/eliminar artículos.
- Implementar una página dedicada al carrito para una vista más detallada de los artículos.