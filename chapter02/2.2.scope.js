// Generated by CoffeeScript 1.6.2
var age1, age2, reincarnate1, reincarnate2;

age1 = 99;

reincarnate1 = function() {
  return age1 = 0;
};

reincarnate1();

console.log("reincarnate1: I'm " + age1 + " y.o");

reincarnate2 = function() {
  var age2;

  return age2 = 0;
};

age2 = 99;

reincarnate2();

console.log("reincarnate2: I'm " + age2 + " y.o");
