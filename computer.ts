function compute(input){
    var i = 0;
    while (i != (input.length - 1)){
        if (i % 4 === 0){
            if (input[i] === 99){
                break;
            }
            else if (input[i] === 1){
                addValue(input, i);
            }
            else if (input[i] === 2){
                multiplyValue(input, i)
            }
            else {
                console.log("something went wrong :(")
            }
        }
    
        i++;
    }
    return input[0];
}

function addValue(input, i){
    input[input[i + 3]] = input[input[i + 1]] + input[input[i + 2]];
}

function multiplyValue(input, i){
    input[input[i + 3]] = input[input[i + 1]] * input[input[i + 2]];
}

function findNounAndVerb(num){
    var noun = 0;
    var verb = 0;
    var bigArray = insertNums(noun, verb);

    console.log(bigArray);

    while (compute(bigArray) != num){
        if (noun === 99){
            console.log("no answer");
            break;
        } else if (verb === 99){
            noun++;
            verb = 0;
        } else {
            verb++;
        } 
        
        bigArray = insertNums(noun, verb);
        console.log(bigArray);
    }

    return [noun, verb]
}

function insertNums(noun, verb){
    var bigInput = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,2,9,19,23,1,9,23,27,2,27,9,31,1,31,5,35,2,35,9,39,1,39,10,43,2,43,13,47,1,47,6,51,2,51,10,55,1,9,55,59,2,6,59,63,1,63,6,67,1,67,10,71,1,71,10,75,2,9,75,79,1,5,79,83,2,9,83,87,1,87,9,91,2,91,13,95,1,95,9,99,1,99,6,103,2,103,6,107,1,107,5,111,1,13,111,115,2,115,6,119,1,119,5,123,1,2,123,127,1,6,127,0,99,2,14,0,0];
    bigInput[1] = noun;
    bigInput[2] = verb;
    return bigInput;
}

findNounAndVerb(19690720);

// // Tests
// console.log("~~~~~~~~~~~~~~Tests~~~~~~~~~~~~~~");

// // Add test
// if (compute([1, 2, 1, 0, 99]) === 3){
//     console.log("+ Add test: PASS");
// } else {
//     console.log("+ Add test: FAIL")
//     console.log(`- Answer was ${compute([1, 2, 1, 0, 99])}. Expected 3.`)
// }

// // Multiply test
// if (compute([2, 2, 1, 0, 99]) === 2){
//     console.log("+ Multiply test: PASS");
// } else {
//     console.log("- Multiply test: FAIL")
//     console.log(`- Answer was ${compute([2, 2, 1, 0, 99])}. Expected 2.`)
// }

// // Add and Multiply test
// if (compute([1, 2, 1, 0, 2, 0, 1, 0, 99]) === 6){
//     console.log("+ Add and Multiply test: PASS");
// } else {
//     console.log("- Add and Multiply test: FAIL")
//     console.log(`- Answer was ${compute([1, 2, 1, 0, 2, 0, 1, 0, 99])}. Expected 6.`)
// }

// // Big test
// var bigInput = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,2,9,19,23,1,9,23,27,2,27,9,31,1,31,5,35,2,35,9,39,1,39,10,43,2,43,13,47,1,47,6,51,2,51,10,55,1,9,55,59,2,6,59,63,1,63,6,67,1,67,10,71,1,71,10,75,2,9,75,79,1,5,79,83,2,9,83,87,1,87,9,91,2,91,13,95,1,95,9,99,1,99,6,103,2,103,6,107,1,107,5,111,1,13,111,115,2,115,6,119,1,119,5,123,1,2,123,127,1,6,127,0,99,2,14,0,0];
// if (compute(bigInput) === 9581917){
//     console.log("+ Big test: PASS");
// } else {
//     console.log("- Big test: FAIL")
//     console.log(`- Answer was ${compute(bigInput)}. Expected 9581917.`)
// }

// Noun and Verb test
// var answer = findNounAndVerb(19690720);
// if (answer === [25, 5]){
//     console.log("+ Noun and Verb test: PASS");
// } else {
//     console.log("- Noun and Verb test: FAIL")
//     console.log(`- Answer was ${answer}. Expected [25, 5].`)
// }
