function drawTable(data: Array<Record<string, string | number>>): string {

  // Code here
  return "";
}
console.log(drawTable([
  { name: "Alice", city: "London" },
  { name: "Bob", city: "Paris" },
  { name: "Charlie", city: "New York" },
]));
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

console.log(drawTable([
  { gift: "Doll", quantity: 10 },
  { gift: "Book", quantity: 5 },
  { gift: "Music CD", quantity: 1 },
]));
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
