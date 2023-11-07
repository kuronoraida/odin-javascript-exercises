const removeFromArray = function(array, ...removes) {
    for (remove of removes) {
        array = array.filter(function(element) { return element !== remove});
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
