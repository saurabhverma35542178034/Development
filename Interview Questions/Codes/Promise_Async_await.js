// let p1= new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("First Promise Resolved")
//     },2000) 
//     })


// let p2= new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Second Promise Resolved")
//     },15000) 
//     })


//     // function fun1(){
//     //     p1.then((res)=>console.log(res));
//     //     console.log("Didnt wait for promise to resolve" ); //this will print Didnt wait for promise to resolve
        
//     // }
//     // fun1();



//     // Now with async and await
//     async function fun2(){
//         let res= await p1;
//         console.log(res);
//         console.log("Waited for first promise to resolve" ); //this will print after promise is resolved

//         let res2= await p2;
//         console.log(res2);
//         console.log("Waited for second promise to resolve" ); //this will print after second promise is resolved
//     }
//     fun2();





// await can only be used inside an async function
async function handlePromise() {
  console.log("Hello World !! ");

  // JS Engine waits for promise to resolve
  const val = await p1;
  console.log("Namaste JavaScript");
  console.log(val);

  setTimeout(()=>{console.log("hello")
  },11000)

  const val2 = await p2;
  console.log("Namaste JavaScript 2");
  console.log(val2);

  console.log("sdsdsd");
  
}



const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 Resolved Value !! ");
  }, 20000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 Resolved Value !! ");
  }, 15000);
});

handlePromise();