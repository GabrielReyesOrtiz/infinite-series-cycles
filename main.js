function serieS(limit) {
  let sum = 0;
  let i = 1;
  let j = 3;

  for (let a = 0; a < limit; i += 4, j += 4, a++) {
    console.log(" + 4/", i, " - 4/", j);
    sum += 4 / i - 4 / j;
  }
  return sum;
}

console.log("Resultado S = " + serieS(6));
//-------------------------------------------------------------------------
function serieE(limit) {
  let e = 0;
  for (let i = 0; i < limit; i++) {
    console.log("1/" + i + "!");
    e = e + 1 / fac(i);
  }
  return e;
}

function fac(factorial) {
  let facReal = 1;
  for (let i = factorial; i >= 1; i--) {
    facReal = facReal * i;
  }
  return facReal;
}

console.log(serieE(2));
