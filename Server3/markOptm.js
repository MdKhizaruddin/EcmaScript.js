const marks = (numbers) => {
    const total = numbers.reduce((acc, curr) => acc + curr);
    return total / numbers.length;
};
 console.log(marks([11, 12, 13, 14, 15]))