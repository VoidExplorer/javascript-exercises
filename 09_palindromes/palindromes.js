const palindromes = function (string) {
  return (
    string.toLowerCase().split("").reverse().clean().join("") ===
    string.toLowerCase().split("").clean().join("")
  );
};

Array.prototype.clean = function () {
  for (let i = 0; i < this.length; i++) {
    item = this[i];
    if (item == "," || item == "." || item == "!" || item == " ") {
      this.splice(i, 1);
      i--;
    }
  }

  return this;
};
// Do not edit below this line
module.exports = palindromes;
