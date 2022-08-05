// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(amount){
    let euros = amount/oneEuroIs.USD;
    return euros*oneEuroIs.JPY;
}

function fromEuroToDollar(amount){
    return amount*oneEuroIs.USD;
}

function fromYenToPound(amount){
    let euros = amount/oneEuroIs.JPY;
    return euros*oneEuroIs.GBP;
}

module.exports = { fromDollarToYen,fromEuroToDollar,fromYenToPound,sum };
