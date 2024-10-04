const findTheOldest = function (people) {
  return people.sort(
    (a, b) =>
      getAge(b.yearOfBirth, b.yearOfDeath) -
      getAge(a.yearOfBirth, a.yearOfDeath)
  )[0];
};

const getAge = function (yearOfBirth, yearOfDeath) {
  if (!yearOfDeath) yearOfDeath = new Date().getFullYear();
  console.log(yearOfDeath);
  return yearOfDeath - yearOfBirth;
};
// Do not edit below this line
module.exports = findTheOldest;
