function drawTable(data) {
    if (!data.length) return '';
  
    // Obtener las claves (columnas) y capitalizarlas
    const keys = Object.keys(data[0]);
    const headers = keys.map(key => key.charAt(0).toUpperCase() + key.slice(1));
  
    // Calcular el ancho máximo de cada columna
    const columnWidths = keys.map(key =>
      Math.max(
        key.length, // Longitud de la cabecera
        ...data.map(row => String(row[key]).length) // Longitud máxima de los valores
      )
    );
  
    // Función para crear una fila de texto con un borde específico
    const createRow = (values) =>
      '| ' +
      values.map((value, i) => value.toString().padEnd(columnWidths[i])).join(' | ') +
      ' |';
  
    // Crear el borde horizontal de la tabla
    const horizontalBorder = '+' + columnWidths.map(width => '-'.repeat(width + 2)).join('+') + '+';
  
    // Construir la tabla
  
    return [
        horizontalBorder,
        createRow(headers), // Cabecera
        horizontalBorder,
        ...data.map(row => createRow(keys.map(key => row[key]))), // Filas de datos
        horizontalBorder
      ].join('\n');
  }
  