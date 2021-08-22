const CollectionSumofeven = (numbers) =>{
    let sum = 0;
    numbers.forEach((element) => {
        element % 2 == 0 && (sum = sum + element);


    })
    return sum;
}
console.log(CollectionSumofeven([5,2,7,9,10,8,17,115,10]));

