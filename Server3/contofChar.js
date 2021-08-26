const countsofChar = (str)=>{
    const arrStr = str.split("");
    const newObj = {};
    arrStr.forEach((element) => {
        newObj[element] === undefined ? (newObj[element]=1) : newObj[element]++;
        
    });
    return newObj

}
console.log(countsofChar("mine success is depend on your success"));