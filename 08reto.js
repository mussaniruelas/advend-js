/*
Este fue el mas reducide que pude crear :v 
*/

function drawRace(indices, length) {
  const result = indices.reduce((acc, val, i, a) => {
    acc += " ".repeat(a.length - i - 1);
    acc +=
      val == 0
        ? "~".repeat(length)
        : "r".padStart(((length + val) % length) + 1, "~").padEnd(length, "~");

    acc += i + 1 < a.length ? ` /${i + 1}\n` : ` /${i + 1}`;

    return acc;
  }, "");
  return result;
}

console.log(`${drawRace([0, 5, -3], 10)}`);
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log(drawRace([2, -1, 0, 5], 8));
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

console.log(drawRace([3, 7, -2], 12));
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/
