let input = "turpentine and turtles";
let resultArray = [];
let resultString = "";
const vowels = ["a", "e", "i", "o", "u"];

for (let i = 0; i < input.length; i++) {
    if (input[i] === "e") {
        resultArray.push(input[i]);
    }
    if (input[i] === "u") {
        resultArray.push(input[i]);
    }
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
        }
    }
}

for (let a = 0; a < resultArray.length; a++) {
    resultString = resultArray.join("").toUpperCase();
    
}

console.log(resultString);