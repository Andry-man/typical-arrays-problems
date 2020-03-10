
exports.min = function min (matrix) { //минимальное значение массива
  const arr = matrix;
  let answer = [];
if ( arr === undefined) {//для ошибок
  return 0;
}
  if ( arr.length == 0) {//для ошибок
  return 0;
}
arr.sort(function(a, b) {
  return a - b;
});
return arr[0]
}

exports.max = function max (matrix) {//максимальное значение массива
  const arr = matrix;
  let answer = [];
if ( arr === undefined) {//для ошибок
  return 0;
}
  if ( arr.length == 0) {//для ошибок
  return 0;
}
arr.sort(function(a, b) {
  return a - b;
});
let len = arr.length-1
return arr[len]
}

exports.avg = function avg (matrix) {//среднее значение массива
  const arr = matrix;
if ( arr === undefined) {//для ошибок
  return 0;
}
  if ( arr.length == 0) {//для ошибок
  return 0;
}
var ans = 0;
let leng = arr.length
for (let i = 0; i < arr.length; i++) {
ans+=Number(arr[i])
}
return ans/leng
}
