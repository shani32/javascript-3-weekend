
//2.4

array = [1, 1, 2, 1, 1, 1];
function single(array) {
  return +array.filter(function (val) {
    return array.indexOf(val) == array.lastIndexOf(val)
  });
}
console.log(single(array))

