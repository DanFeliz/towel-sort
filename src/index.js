
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    const resArr = [];
  for (let i = 0; i < matrix.length; i++) {
   i % 2 === 0 ? matrix[i].forEach(e1 => resArr.push(e1)) : matrix[i].reverse().forEach(e1 => resArr.push(e1));
  }
  return resArr;
}
