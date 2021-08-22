const asyncway =() =>{
    setTimeout(()=>{
        console.log("First call.....");
    },3000)
    console.log("Second call......");
};
asyncway();