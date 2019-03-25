const main = n => {
  if (n % 2 === 1 || (n % 2 === 0 && n >= 6 && n <= 20)) return 'Weird';
  if ((n >= 2 && n <= 5) || n > 20) return 'Not Weird';
};

main(24);

module.exports = main;
