function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function isPalindrome(string) {
  return string == string.split("").reverse().join("");
}

function getCircumfrence(radius) {
  return Math.round(2 * Math.PI * radius);
}

function getArea(radius) {
  return Math.round(radius * radius * Math.PI);
}

module.exports = {
  fullName,
  isPalindrome,
  getCircumfrence,
  getArea,
};
