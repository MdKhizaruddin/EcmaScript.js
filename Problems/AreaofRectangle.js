const Areaofrectangular = (b, w) => (b*w);
const Areaoftriangle = (h, b) => (1/2)*h*b;

console.log(`Area Of triangle is ${Areaoftriangle(10,10)}`);

console.log(Areaofrectangular(20,10));

const Areaofcircle = (r) => 3.14 * r*r;

console.log(`Area of Circle is ${Areaofcircle(50)} sq.unit`);


// const x = 10;
// const b = 10;
// const h = 20;

// console.log(`Area Of a Digram is ${Areaofrectangular(x,b) + Areaoftriangle(b, h-x)}`);

const x = 10
const b = 27
const h = 14
const r1 = 5
const r = 7

console.log(`Area Of a Digram is ${ Areaofrectangular(x, b-r) + Areaoftriangle(b-r1, x)+ Areaofcircle(1/2*r)- Areaofcircle(3.14*r1*r1) }`)