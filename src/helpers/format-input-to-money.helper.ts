export const formatInputToMoney = (value: string) => {
    // Eliminar caracteres no numéricos excepto el punto decimal
    value = value.replace(/[^0-9.]/g, "");
  
    // Asegurar que solo haya un punto decimal
    const decimalPointIndex = value.indexOf(".");
    if (decimalPointIndex >= 0) {
      value =
        value.slice(0, decimalPointIndex + 1) +
        value.slice(decimalPointIndex + 1).replace(/\./g, "");
    }
  
    // Separar parte entera y decimal
    const [parteEntera, parteDecimal] = value.split(".");
  
    // Añadir separadores de miles a la parte entera
    const regex = /\B(?=(\d{3})+(?!\d))/g;
    const parteEnteraConSeparadores = parteEntera.replace(regex, ",");
  
    // Unir la parte entera y decimal con el separador decimal (si existe)
    const valueFormateado =
      parteDecimal !== undefined
        ? `${parteEnteraConSeparadores}.${parteDecimal}`
        : parteEnteraConSeparadores;
  
    // Establecer el valor formateado en el campo de entrada
    return valueFormateado;
  };