
async function LearnPromise ()
{
    return "sds";
}
LearnPromise().
then((res)=>console.log(res))
.catch ((err)=>console.log(err) )




let newPromise = new Promise((res,rej)=>res("Promise Resolved"));

async function Async(){
    return newPromise;
}

let data=Async();
data.
then((res)=>console.log(res)).
catch((err)=>console.log(err))



// Lets see without async and await
 let p = new Promise((res,rej)=>res("Hiiiiiiiiii"));
 
 p.catch((res)=>console.log(res))
 .then((err)=>console.log(err) )




 // lets understand why we need async and await

 let p1= new Promise((res,rej)=>{
    setTimeout(()=>{
        res("lets understand why we need async and await")
    },2000) 
    })

    function fun1(){
        p1.then((res)=>console.log(res));
        console.log("Didnt wait for promise to resolve" );
        
    }
    fun1();



