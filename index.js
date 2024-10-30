// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

//console.log(saturdayFun("dance"));

//******************************************* */

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}
//console.log(mondayWork());

//***************************************** */

function wrapAdjective(string = "*"){
    return function (adjective = "special"){
        return `You are ${string}${adjective}${string}!`;
    }
}
//console.log(wrapAdjective("*")("a hard worker"));