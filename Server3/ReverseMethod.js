const ravStr = (str) =>{
    let getReverse="";
    for (let char of str){

        getReverse = char +getReverse;

        // getReverse = getReverse+char;
    }
    return getReverse;
}
console.log(ravStr("Hello Mumbai"));