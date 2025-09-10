function addANumber(n) {
    return new Promise(function(resolve, reject) {
        if (n === 5)
            reject(5);
        else
            resolve(n);
    });
}

function multiplyBy(num) {
    return new Promise(function(resolve) {
        resolve(num * 2);
    });
}

addANumber(5)
    .then(function(n) {
        console.log("addANumber resolved:");
        return n; // You can return a number to pass to multiplyBy
    })
    .then(function(num) {
       console.log("Multiply");
       
        return multiplyBy(num);
    })
    .catch(function(err) {
        console.log("Caught error:", err);
    })
    .then(function(result) {
        console.log("multiplyBy result:", result);
    })
    .catch(function(err) {
        console.log("Caught error:", err);
    }).then(function(){
     console.log("End of the chain");
     
    });