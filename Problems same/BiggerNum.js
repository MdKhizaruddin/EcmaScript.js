function BiggerNum(num1, num2){
    if(num1>num2){
        return num1;
    } else{
        return num2;
    }
}

console.log(`Bigger number is ${BiggerNum(13, 58)}`);
console.log(`Bigger number is ${BiggerNum(213, 58)}`);
console.log(`Bigger number is ${BiggerNum(3444, 6558)}`);