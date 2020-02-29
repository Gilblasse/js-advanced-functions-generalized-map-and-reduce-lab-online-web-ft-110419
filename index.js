// Add your functions here
function map(array, func) {
  let result = [];
  array.forEach(num => result.push(func(num)));
  return result;
}

function reduce(array, func, startingPoint) {
  let start = startingPoint || array[0];
  array.forEach(elmt => (start = func(elmt, start)));
  return typeof start == "number"
    ? !!startingPoint
      ? start
      : start - array[0]
    : start;
}
