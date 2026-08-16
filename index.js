const radius = [3, 1, 2, 4];
function calculateArea(radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
}
console.log(calculateArea(radius));
function calculateCircumference(radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
}
console.log(calculateCircumference(radius));

const calculate = (radius, name) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    if ("area" === name) {
      output.push(Math.PI * radius[i] * radius[i]);
    } else if ("circumference" === name) {
      output.push(2 * Math.PI * radius[i]);
    }
  }
  return output;
};
console.log(calculate(radius, "area"));
console.log(calculate(radius, "circumference"));
