// Generated by CoffeeScript 1.6.2
var mathObject, square;

console.log("Hello CoffeeScript");

square = function(x) {
  return x * x;
};

mathObject = {
  sqrt: Math.sqrt,
  square: square,
  cube: function(x) {
    return x * square(x);
  }
};
