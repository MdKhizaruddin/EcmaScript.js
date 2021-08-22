const isPrime = (num)=>{
    const boundary = Math.floor(Math.sqrt(num));
    for(i=2; i<=boundary; i++){
       if (num%i===0 ){
           return "is not a prime"
       }  
    }
    return "is prime";
}
console.log(isPrime(101));
console.log(isPrime(10));
console.log(isPrime(11));
console.log(isPrime(21));