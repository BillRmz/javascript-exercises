const ftoc = function(f) {
  reg = (f-32)/1.8;
  return Math.round(reg * 10)/10;

};

const ctof = function(c) {
  reg = c * 1.8 + 32
  return Math.round(reg * 10)/10;
};

console.log(ftoc(32));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
