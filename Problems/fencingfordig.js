const fencingfordig = (b,w,a,b,c,noofwire,costperfeet) =>{
const paremeter = b+w+a+b+c+c;
const totalcost = paremeter*noofwire*costperfeet;
return totalcost
}

console.log(fencingfordig(11,12,13,14,15,15,10,10));