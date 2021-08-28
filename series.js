export default class Series {


  function serieS(limit) {
    let sum = 4 - 3 / 4;
    let i = 5;
    let j = 7;

    for (let a = 0; a <= limit; i += 4, j += 4, a++) {
      sum = sum + 4 / i - 4 / j;
    }
    return sum;
  }
}
