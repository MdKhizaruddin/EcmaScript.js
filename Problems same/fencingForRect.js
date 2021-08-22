const fencingForRect = (b, w, numberOfWire, costPerFeet) => {
  const parimeter = b + w + b + w;
  const totalCost = parimeter * numberOfWire * costPerFeet;
  return totalCost;
};

console.log(`Total cost for Fencing is Rs.${fencingForRect(40, 70, 7, 12)}`);
