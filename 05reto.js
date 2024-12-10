function organizeShoes(shoes) {
  const counts = {};
  let pairs = [];

  for (const { type, size } of shoes) {
    if (!(size in counts)) {
      counts[size] = { I: 0, R: 0 };
    }

    counts[size][type]++;

    if (counts[size].I > 0 && counts[size].R > 0) {
      pairs.push(size);
      counts[size].I--;
      counts[size].R--;
    }
  }

  return pairs;
}

const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];

console.log(organizeShoes(shoes));
// [38, 42]

const shoes2 = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "R", size: 38 },
];

console.log(organizeShoes(shoes2));
// [38, 38]

const shoes3 = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 43 },
];

console.log(organizeShoes(shoes3));
// []
