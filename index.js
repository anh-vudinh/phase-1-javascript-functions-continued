let activity;
let activityPhrase;
let wrappedPhrase;
let symbolWrap;
let result;

function saturdayFun(activity = 'roller-skate'){
    activityPhrase = `This Saturday, I want to ${activity}!`;
    return activityPhrase;
}

function mondayWork(activity = 'go to the office'){
    activityPhrase = `This Monday, I will ${activity}.`;
    return activityPhrase;
}

function wrapAdjective(symbolWrap = "*"){
    if (symbolWrap === "||"){
        activity = "a dedicated programmer";
        wrappedPhrase = `You are ${symbolWrap}${activity}${symbolWrap}!`;
        result = (function(){ return wrappedPhrase;})
        return result;

    } else if (symbolWrap === "*"){
        activity = "a hard worker";
        wrappedPhrase = `You are ${symbolWrap}${activity}${symbolWrap}!`;
        result = (function(){ return wrappedPhrase;})
        return result;
    } 

}

