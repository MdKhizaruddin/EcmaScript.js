const FindAllduplicate=(arr)=>{
    const newArr=[];
    arr.forEach((element,index) => {
        arr.indexof(element) !== index && newArr.push(element)
        
    });
    return newArr;
};
console.log(FindAllduplicate([1,2,3,4,5,5,6,8,1,6,5,0,9,8]));