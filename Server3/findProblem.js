const findBigNum = (arrNum)=>{
    let maxNum=0;
arrNum.forEach((element) => {
    if(element>maxNum) {
        maxNum=element;
    }
        
    });
    return maxNum;
}
console.log(findBigNum([7,5,8,25,75,1,8,99,3]));