/* 
    aun que esta solucion no funcionaria con 
    #####
    ##*##
    #####

    o 

    #####
    ** ##
    #####
*/

function inBox(box) {
  for (let i = 1; i < box.length - 1; i++) {
    const split = box[i].split("#");
    //console.log(split);
    
    if (split[1].includes("*")) return true;
  }

  return false;
}

const a1 = inBox(["###", "#*#", "###"]); // ➞ true
console.log(a1);

const a2 = inBox(["####", "#* #", "#  #", "####"]); // ➞ true
console.log(a2);

const a3 = inBox(["#####", "#   #", "#  #*", "#####"]); // ➞ false
console.log(a3);

const a4 = inBox(["#####", "#   #", "#   #", "#   #", "#####"]); // ➞ false
console.log(a4);
