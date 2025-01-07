// *: Copo de nieve - Valor: 1
// o: Bola de Navidad - Valor: 5
// ^: Arbolito decorativo - Valor: 10
// #: Guirnalda brillante - Valor: 50
// @: Estrella polar - Valor: 100
function calculatePrice(ornaments) {
  const values = {
    "*": 1, // Copo de nieve
    o: 5, // Bola de Navidad
    "^": 10, // Arbolito decorativo
    "#": 50, // Guirnalda brillante
    "@": 100, // Estrella polar
  };
  if (!(ornaments[ornaments.length - 1] in values)) {
    return undefined;
  }
  let valTree = values[ornaments[ornaments.length - 1]];


  for (let i = 0; i < ornaments.length - 1; i++) {

    if (!(ornaments[i] in values && ornaments[i + 1] in values)) {
      return undefined;
    }

    valTree +=
      values[ornaments[i + 1]] > values[ornaments[i]]
        ? -values[ornaments[i]]
        : values[ornaments[i]];
  }

  return valTree;
}
console.log(calculatePrice("***")); // 3   (1 + 1 + 1)
console.log(calculatePrice("*o")); // 4   (5 - 1)
console.log(calculatePrice("o*")); // 6   (5 + 1)
console.log(calculatePrice("*o*")); // 5  (-1 + 5 + 1)
console.log(calculatePrice("**o*")); // 6  (1 - 1 + 5 + 1)
console.log(calculatePrice("o***")); // 8   (5 + 3)
console.log(calculatePrice("*o@")); // 94  (-5 - 1 + 100)
console.log(calculatePrice("*#")); // 49  (-1 + 50)
console.log(calculatePrice("@@@")); // 300 (100 + 100 + 100)
console.log(calculatePrice("#@")); // 50  (-50 + 100)
console.log(calculatePrice("#@Z")); // undefined (Z es desconocido)
