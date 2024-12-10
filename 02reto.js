function createFrame(names) {
  let maxL = 0;
  names.forEach((name) => {
    if (name.length > maxL) maxL = name.length;
  });

  let ini = "*".repeat(maxL + 4);
  let marco = ini + "\n";
  names.forEach((name) => {
    let newName = `* ${name}` + " ".repeat(maxL - name.length) + " *\n";
    marco += newName;
  });

  marco += ini;

  return marco;
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']));
// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

console.log(createFrame(['midu']));
// Resultado esperado:
// ********
// * midu *
// ********

console.log(createFrame(['a', 'bb', 'ccc']));
// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

console.log(createFrame(['a', 'bb', 'ccc', 'dddd']));
// Resultado esperado:
// ********
// * a    *
// * bb   *
// * ccc  *
// * dddd *
// ********
