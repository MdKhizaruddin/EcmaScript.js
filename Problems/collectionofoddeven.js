const Collectionofoddeven = (numbers) =>{
    let sumeven = 0;
    let sumodd = 0;

    numbers.forEach((element) => {
        element % 2 == 0 
        ? (sumeven = sumeven + element)
        : (sumodd = sumodd + element);


    })
    return `sum of even numbers = ${sumeven} and sum of odd numbers= ${sumodd}
    Total sum=${sumeven=sumodd}`;
};
console.log(Collectionofoddeven([5,2,7,9,10,8,17,115,10]));

// ? = if
// : =else

