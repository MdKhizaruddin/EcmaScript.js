const MillageCost = (distance, Mileage, FuelPrice) =>
  Math.ceil((distance / Mileage) * FuelPrice);

console.log(`Amount need to fill fuel is Rs. ${MillageCost(306, 37, 110.08)}`);

console.log(Math.floor(12.74));
