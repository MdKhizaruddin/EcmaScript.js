const arr =[null,2,3,4,"Cat",{num:25},undefined,2]
//-------------------1st method------------------------------------//
const newArr = arr.filter(item=>typeof(item)==="number" && item)
console.log(newArr.reduce((acc,num)=>acc*num));

//--------------------2nd method-----------------------------------//

const Result = arr.filter(item=>typeof(item)==="number" && item).reduce((acc,num)=>acc+num)
 console.log(Result)


 //----------for checking data type------------------//
 const newarr = arr.map(item=>typeof(item)==="number" && item)
 console.log(newarr)

 //--------------for find data type--------------------//

 const newarrr = arr.filter(item=>typeof(item)==="object" && item)
 console.log(newarrr)