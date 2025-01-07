// *: Copo de nieve - Valor: 1
// o: Bola de Navidad - Valor: 5
// ^: Arbolito decorativo - Valor: 10
// #: Guirnalda brillante - Valor: 50
// @: Estrella polar - Valor: 100

function calculatePrice(ornaments) {
    // Valores de los adornos
    const values = {
      '*': 1,    // Copo de nieve
      'o': 5,    // Bola de Navidad
      '^': 10,   // Arbolito decorativo
      '#': 50,   // Guirnalda brillante
      '@': 100   // Estrella polar
    };
  
    let total = 0;
  
    for (let i = 0; i < ornaments.length; i++) {
      const current = values[ornaments[i]];
      const next = values[ornaments[i + 1]];
  
      // Si el adorno no es válido, devolvemos undefined
      if (current === undefined) {
        return undefined;
      }
  
      // Si el adorno actual está a la izquierda de uno de mayor valor, se resta
      if (next !== undefined && current < next) {
        total -= current;
      } else {
        total += current;
      }
    }
  
    return total;
  }
  
  // Ejemplos de uso
  console.log(calculatePrice('***'));   // 3
  console.log(calculatePrice('*o'));    // 4
  console.log(calculatePrice('o*'));    // 6
  console.log(calculatePrice('*o*'));   // 5
  console.log(calculatePrice('**o*'));  // 6
  console.log(calculatePrice('o***'));  // 8
  console.log(calculatePrice('*o@'));   // 94
  console.log(calculatePrice('*#'));    // 49
  console.log(calculatePrice('@@@'));   // 300
  console.log(calculatePrice('#@'));    // 50
  console.log(calculatePrice('#@Z'));   // undefined
  