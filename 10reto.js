function compile(instructions) {
  const variables = {}; // Registros

  let i = 0; // Índice de instrucción
  while (i < instructions.length) {
    const [cmd, arg1, arg2] = instructions[i].split(" ");

    // Inicializa registros no definidos
    if (isNaN(arg1) && !(arg1 in variables)) variables[arg1] = 0;
    if (arg2 && isNaN(arg2) && !(arg2 in variables)) variables[arg2] = 0;

    switch (cmd) {
      case "MOV":
        variables[arg2] = isNaN(arg1) ? variables[arg1] : parseInt(arg1, 10);
        break;
      case "INC":
        variables[arg1]++;
        break;
      case "DEC":
        variables[arg1]--;
        break;
      case "JMP":
        if (variables[arg1] === 0) {
          i = parseInt(arg2, 10);
          continue; // Salta directamente al índice
        }
        break;
      default:
        throw new Error(`Instrucción no válida: ${cmd}`);
    }
    i++; // Avanza al siguiente comando
  }

  return variables["A"] !== undefined ? variables["A"] : undefined;
}

const instructions = [
  "MOV -1 C", // copia -1 al registro 'C',
  "INC C", // incrementa el valor del registro 'C'
  "JMP C 1", // salta a la instrucción en el índice 1 si 'C' es 0
  "MOV C A", // copia el registro 'C' al registro 'a',
  "INC A", // incrementa el valor del registro 'a'
];

console.log(compile(instructions));
// -> 2
