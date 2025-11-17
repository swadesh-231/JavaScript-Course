
function sum(a,b){
    return a+b;
}

let twoNum = sum(2,3);
console.log(twoNum);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("swadesh"));
console.log(loginUserMessage());



function calculateCartPrice(val1, val2, ...num1){
    return num1
}


console.log(calculateCartPrice(1,2,3,4,5,6,7,8));
