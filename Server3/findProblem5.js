// const Factorial=(num)=>{
//    for (let i=num-1;i > 0;i--) {
//        num=num*i;

//    }
//    return num;

// }
// console.log(Factorial(11));
// //---------------------------------------------------------------------------------------------------------

// const Factorial=(num)=>{
//     if(num==0){
//         return 1;
//     }
//     else {
//         return num*Factorial(num-1);
//     }

// }
// console.log(Factorial(5))
//----------------------------------------------------------------------------------------------------------
const factorial=(n)=> n<2 ? 1 :(n* factorial(n-1))
console.log(factorial(5));
