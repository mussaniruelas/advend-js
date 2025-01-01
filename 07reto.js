function fixPackages(packages) {
    while (packages.includes('(')) {
        // Encuentra el paréntesis más interno usando una expresión regular
        packages = packages.replace(/\([^()]*\)/g, (match) => {
            // match es la subcadena entre paréntesis, incluyendo los paréntesis
            // match.slice(1, -1) elimina los paréntesis
            // split('').reverse().join('') invierte el contenido
            return match.slice(1, -1).split('').reverse().join('');
        });
    }
    return packages;
}

// Ejemplos
console.log(fixPackages('a(cb)de')); // ➞ "abcde"
console.log(fixPackages('a(bc(def)g)h')); // ➞ "agdefcbh"
console.log(fixPackages('abc(def(gh)i)jk')); // ➞ "abcighfedjk"
console.log(fixPackages('a(b(c))e')); // ➞ "acbe"
