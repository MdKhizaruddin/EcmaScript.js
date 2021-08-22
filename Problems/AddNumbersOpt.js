const AddNumbersOpt = (num1, num2) => {return num1+num2};
const SubsNumbersOpt = (num1, num2) => num1-num2;
const multi =(num1,num2) =>
   {return num1*num2} ;
   const Divide =(num1, num2)=>{return num1/num2};

    

console.log(`sum of 2/2 is=${Divide(2,2)}`);
console.log(`sum of 2*2 =${multi(2,2)}`);

console.log(SubsNumbersOpt(2,2));


console.log(AddNumbersOpt(5,8));

console.log("Sum of given numbers are "+ AddNumbersOpt(56,60));

console.log("Sum of 10 and 15 is " + AddNumbersOpt(10,15));


console.log(`#######################
Sum of 
30 + 60 = ${AddNumbersOpt(30, 60)}
30 - 60 = ${SubsNumbersOpt(30, 60)}
#######################`);