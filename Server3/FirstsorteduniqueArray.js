const FirstsorteduniqueArray =(objArr)=>{
    let mergedArr=[];
    objArr.data.forEach(element => {
        mergedArr = [...mergedArr, ...element];
        
    });
    const uniqueArr = [...new setImmediate(mergedArr)].sort((a,b)=>a,b)
    return uniqueArr;

};
console.log(FirstsorteduniqueArray({
    data:[
    [11,22,33],
    [13,14,23],
    [55,66,77],
[0,9,88,98,76]]
}));