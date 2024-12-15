// helpers.js

/**
 * Función para formatear números a formato de moneda con separadores de miles.
 * @param {number} number - El número que se desea formatear.
 * @returns {string} El número formateado como una cadena de texto.
 */
export const formatPrice = (number) => {
    if (typeof number !== 'number') {
      return '$0.00'; // En caso de que el valor no sea un número
    }
    return `$${number.toLocaleString('es-CL')}`; // Formato chileno, puedes ajustarlo según tu localización
  };
  