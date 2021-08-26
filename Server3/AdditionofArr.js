const AdditionofArr=(arr1, arr2) =>{
    const newArr = [];
    arr1.forEach((element,index) => {
        newArr.push(element + arr2[index]);
        
    });
    return newArr;
}
console.log(AdditionofArr([1,2,3,4], [5,6,7,70]));