// const Arr = ["A","B","C"]
const Arr = [2,3,4,1]



// console.log(Arr.join(""));

// 2nd method

let text ="";
// Arr.forEach(element => {
//     // text= text+element
//     text+=element
    
// });
// console.log(text)

// 3rd method
// console.log(Arr.reduce((a,b)=>a+b))
// console.log(Arr.reduce((a,b)=>b+a))
// console.log(Arr.reduce((acc,num)=>Number(acc)+Number(num**3),[]))
console.log(Arr.reduce((acc,num)=>acc+num**3,0));
console.log(Arr.reduce((acc,num)=>acc*num**3,1));