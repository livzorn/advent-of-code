function computeAndGetResult(input, userInputNum){
    var i = 0;
    var numsToSkip = 0;
    var resultCodes = [];
    while (i != (input.length - 1)){
        if (numsToSkip == -1){
            break;
        }
        if (numsToSkip === 0){
            switch(input[i], userInputNum) {
                case 99:
                    numsToSkip = -1;
                    break;
                case 1:
                    addValue1(input, i);
                    numsToSkip = 3;
                    break;
                case 2:
                    multiplyValue1(input, i);
                    numsToSkip = 3;
                    break;
                case 3:
                    storeValue1(input, i, userInputNum);
                    numsToSkip = 1;
                    break;
                case 4:
                    var output = outputValue1(input, i);
                    resultCodes.push(output);
                    numsToSkip = 1;
                    break;
                default:
                    console.log("something went wrong :(");
                    break;
            }
        } else {
            numsToSkip -= 1;
        }
        i++;
    }
    return resultCodes;
}

function addValue1(input, i){
    input[input[i + 1]] = input[input[i + 1]] + input[input[i + 2]];
}

function multiplyValue1(input, i){
    input[input[i + 3]] = input[input[i + 1]] * input[input[i + 2]];
}

function storeValue1(input, i, userInputNum){
    input[input[i + 1]] = userInputNum;
}

function outputValue1(input, i){
    return input[i + 1];
}

function runDiagnostics(array){
    var userInputNum = window.prompt("Enter a number: ");
    var result = computeAndGetResult(array, userInputNum);
    console.log(result);
    return result;
}
