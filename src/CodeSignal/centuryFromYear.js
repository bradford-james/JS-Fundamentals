const centuryFromYears = year => {
  return Math.floor((year - 1) / 100) + 1;
};

module.exports = centuryFromYears;
