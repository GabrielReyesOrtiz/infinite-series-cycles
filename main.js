function serieS(limit) {
  let sum = 4 - 4 / 3;
  let i = 5;
  let j = 7;

  console.log("4 - 4/3");
  for (let a = 0; a < limit; i += 4, j += 4, a++) {
    console.log(" + 4/", i, " - 4/", j);
    sum += 4 / i - 4 / j;
  }
  return sum;
}

console.log(serieS(5));
