const findLeastNum = (arrNum) =>{
    let leastNum = arrNum[0];
    arrNum.forEach((element) => {
        if(element<leastNum){
           leastNum= element;
        }
    });
    return leastNum
}
console.log(findLeastNum([7,5,8,25,75,1,8,99,3]));