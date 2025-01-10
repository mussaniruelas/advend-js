// function drawTable(data) {
//   if (!data.length) return "";

//   const key = Object.keys(data[0]);
//   const headers = key.map((k) => k[0].toUpperCase() + k.slice(1));
//   let largeKey1 = 0,
//     largeKey2 = 0;
//   largeKey1 = headers[0].length > largeKey1 ? headers[0].length : largeKey1;
//   largeKey2 = headers[1].length > largeKey2 ? headers[1].length : largeKey2;

//   data = data.map((e) => {
//     const a = e[key[0]].toString();
//     const b = e[key[1]].toString();

//     largeKey1 = a.length > largeKey1 ? a.length : largeKey1;
//     largeKey2 = b.length > largeKey2 ? b.length : largeKey2;
//     return [a, b];
//   });

//   let row = "+-" + "-".repeat(largeKey1) + "-+-" + "-".repeat(largeKey2) + "-+";
//   let result =
//     row +
//     "\n| " +
//     headers[0].padEnd(largeKey1, " ") +
//     " | " +
//     headers[1].padEnd(largeKey2, " ") +
//     " |\n" +
//     row +
//     "\n";

//   data.forEach((e) => {
//     result +=
//       "| " +
//       e[0].padEnd(largeKey1, " ") +
//       " | " +
//       e[1].padEnd(largeKey2, " ") +
//       " |\n";
//   });

//   result += row;

//   return result;
// }


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

console.log(
  drawTable([
    { name: "Alice", city: "London" },
    { name: "Bob", city: "Paris" },
    { name: "Charlie", city: "New York" },
  ])
);
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

console.log(
  drawTable([
    { gift: "Doll", quantity: 10 },
    { gift: "Book", quantity: 5 },
    { gift: "Music CD", quantity: 1 },
  ])
);
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
