
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

## Actualizaciones HITO 6

### Implementación del Contexto del Carrito
- Se creó un nuevo contexto `CartContext` para manejar el estado global del carrito.
- Se implementó `useCart` hook para acceder fácilmente a las funciones del carrito en los componentes.
- Se añadieron funciones para agregar, remover, actualizar cantidad y limpiar el carrito.
- Se implementó la persistencia del carrito en el almacenamiento local (localStorage).

### Mejoras en el Componente Home
- Se actualizó la importación de `useCart` para utilizar el nuevo contexto del carrito.
- Se pasó la función `addToCart` como prop al componente `CardPizza`.

### Actualización del Componente CardPizza
- Se modificó para utilizar la función `addToCart` del contexto del carrito.
- Se actualizó el botón "Añadir" para utilizar la nueva funcionalidad del carrito.

### Creación del Componente Cart
- Se desarrolló un nuevo componente `Cart` para mostrar los items en el carrito.
- Se implementaron funcionalidades para mostrar, actualizar cantidad y remover items del carrito.
- Se añadió el cálculo del total de la compra.
- Se incluyeron botones para vaciar el carrito e ir a pagar (funcionalidad futura).

### Actualizaciones en la Estructura del Proyecto
- Se reorganizaron los archivos para una mejor estructura del proyecto.
- Se actualizaron las importaciones en varios componentes para reflejar la nueva estructura.

### Correcciones y Mejoras
- Se resolvieron problemas de importación duplicada en el componente Home.
- Se realizaron ajustes en el estilo y la presentación de los componentes para mejorar la experiencia del usuario.

### Próximos Pasos
- Implementar la funcionalidad de pago.
- Mejorar la interfaz de usuario del carrito.
- Añadir más validaciones y manejo de errores.
- Optimizar el rendimiento de la aplicación.

## Actualizaciones HITO 8

### Implementacion de JWT
- implementa los métodos para hacer login y register, consumiendo las rutas /api/auth/login y /api/auth/register
-  implementa un método para hacer logout
-  implementa un método para obtener el perfil del usuario autenticado
- implementa el método para enviar el carrito de compras al backend, consumiendo la ruta /api/checkouts.