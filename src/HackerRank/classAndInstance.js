/* eslint-disable func-names */
function Person(initialAge) {
  if (initialAge >= 0) {
    this.age = initialAge;
  } else {
    this.age = 0;
    console.log('Age is not valid, setting age to 0.');
  }
  this.yearPasses = function() {
    this.age += 1;
  };
  this.amIOld = function() {
    if (this.age >= 13 && this.age < 18) {
      console.log('You are a teenager.');
    } else if (this.age < 13) {
      console.log('You are young.');
    } else {
      console.log('You are old.');
    }
  };
}
module.exports = Person;
