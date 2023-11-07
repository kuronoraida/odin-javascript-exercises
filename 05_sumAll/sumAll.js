const sumAll = function(firstNum, secondNum) {
    let sum = 0;

    // check input
    if (firstNum < 0 || secondNum < 0) {
        return 'ERROR';
    }
    if (typeof firstNum != 'number' || typeof secondNum != 'number') {
        return 'ERROR';
    }

    // function
    if (firstNum < secondNum) {
        for (firstNum; firstNum <= secondNum; firstNum++) {
            sum += firstNum
        }
    } else {
        for (secondNum; secondNum <= firstNum; secondNum++) {
            sum += secondNum
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
