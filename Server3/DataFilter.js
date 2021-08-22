const arr1=[1, undefined , "sufiyan", 3,5,{},"cat", null,3.15,6555,"faisu","hasnain"]

const arr2 = [];

arr1.forEach(element => {
    if (typeof element === "string"){
        arr2.push(element.toUpperCase());
    }
});
console.log(arr2)