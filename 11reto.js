function decodeFilename(encodedFilename) {
  // Utilizamos una expresión regular para extraer la parte importante del nombre del archivo.
  // Explicación de la expresión regular:
  // ^\d+_    -> Coincide con un número al inicio seguido de un guion bajo.
  // (.+?)    -> Captura el nombre del archivo y su extensión de manera no codiciosa.
  // \.[^\.]+$ -> Coincide con la última extensión que no necesitamos.
  const match = encodedFilename.match(/^\d+_(.+?)\.[^\.]+$/);

  // Si hay una coincidencia, devolvemos la parte importante.
  return match ? match[1] : null;
}

// Ejemplos de uso
console.log(decodeFilename("2023122512345678_sleighDesign.png.grinchwa")); // ➞ "sleighDesign.png"
console.log(decodeFilename("42_chimney_dimensions.pdf.hack2023")); // ➞ "chimney_dimensions.pdf"
console.log(decodeFilename("987654321_elf-roster.csv.tempfile")); // ➞ "elf-roster.csv"
