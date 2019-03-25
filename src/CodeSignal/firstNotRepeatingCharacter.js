const firstNotRepeatingCharacter = s => {
  const hasOccured = [];
  const duplicates = [];

  for (let i = 0; i < s.length; i++) {
    if (hasOccured.includes(s[i])) duplicates.push(s[i]);
    else hasOccured.push(s[i]);
  }
  const singles = hasOccured.filter(el => !duplicates.includes(el));
  return singles[0] ? singles[0] : '_';
};

module.exports = firstNotRepeatingCharacter;
