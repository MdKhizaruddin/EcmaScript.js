const fencingfortri = (b,w, noofwire, costperfeet)=>{
    const perimeter= b+w+b+w;
    const totalcost= perimeter*costperfeet*noofwire;
    return totalcost;

};
console.log(`Total no of fencing is Rs. ${fencingfortri(20,30,5,10)}`);