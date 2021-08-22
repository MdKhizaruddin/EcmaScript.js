const fencingForAny = (edges, numberOfWire, rate) => {
  let sum = 0;
  edges.forEach((element) => {
    sum = sum + element;
  });
  return sum * numberOfWire * rate;
};

console.log(
  `Cost for fencing is Rs.${fencingForAny(
    [10, 15, 10, 10, 10, 10, 22],
    5,
    10
  )}/-`
);
