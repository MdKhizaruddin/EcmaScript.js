const greateststrinstr=(str)=>{
    const arrStr = str.split(" ");
    let maxStr = arrStr[0].length;
    let strData = arrStr[0];
    arrStr.forEach(element => {
        if (maxStr<element.length){
            maxStr = element.length;
            strData=element;
        }
        
    });
    return strData;
}
console.log(greateststrinstr("I am a boy. I am from Kandhar. I am super excited to become a React developer ."));