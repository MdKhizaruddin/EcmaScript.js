const AddNumbersOpt = (num1 = 0, num2 = 0) => {
  return num1 + num2;
};
const SubsNumbersOpt = (num1, num2) => num1 - num2;

const GetData = () => 34;

console.log(GetData());

console.log(AddNumbersOpt(5, 8));

// console.log("Sum of given numbers are "+ AddNumbersOpt(56,60));

// console.log("Sum of 10 and 15 is " + AddNumbersOpt(10,15));

// console.log(`#######################
// Sum of
// 30 + 60 = ${AddNumbersOpt(30, 60)}
// 30 - 60 = ${SubsNumbersOpt(30, 60)}
// #######################`);
