const solve = (meal_cost, tip_percent, tax_percent) => {
  const tip = (meal_cost * tip_percent) / 100;
  const tax = (meal_cost * tax_percent) / 100;
  const total = Math.round(meal_cost + tip + tax);
  return total;
};

module.exports = { solve };
