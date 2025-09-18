function sum([...arr]){
    return arr.reduce((a,b)=>a+b);
   
}

function product([...arr]){
   return arr.reduce((a,b)=>a*b);
    
}


module.exports={sum,product}