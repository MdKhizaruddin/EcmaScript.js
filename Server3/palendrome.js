const palendrome=(str)=>{
const arrstr=str.split("");
for(let i=0; i<Math.floor(arrstr.length/2); i++)
{
    if(arrstr[i]!==arrstr[arrstr.length-1-i]){
        return false;

    }
}
return true;
};
console.log(palendrome("madam"));