/**
 * Capitaliza la primera letra de una cadena.
 * @param {string} string - La cadena de texto a capitalizar.
 * @returns {string} - La cadena con la primera letra capitalizada.
 */
export const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};
