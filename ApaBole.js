let hasil = [];
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    hasil.push("ApaBole");
  } else if (i % 3 === 0) {
    hasil.push("Apa");
  } else if (i % 5 === 0) {
    hasil.push("Bole");
  } else {
    hasil.push(i);
  }
}
console.log(hasil.toString().split(",").join(", "));
