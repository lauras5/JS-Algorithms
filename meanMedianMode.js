function meanMedianMode(array) {
    // calls other 3 codes
    return {
        mean: getMean(array),
        media: getMedian(array),
        mode: getMode(array)
    };
};

// functional programming
function getMean(array) {
    var sum = 0;

    array.forEach(num => {
        sum += num;
    });

    var mean = sum / array.length;
    return mean;
}

function getMedian(array) {
    // first sort array, sorts in ascending order
    array.sort(function (a, b) { return a - b });
    // define median variable
    var median;

    // deal with 2 cases odd and even number in array
    if (array.length % 2 !== 0) {
        // grab middle element and set as median
        median = array[Math.floor(array.length / 2)];
    } else {
        var mid1 = array[array.length / 2 - 1]
        var mid2 = array[array.length / 2]
        median = (mid1 + mid2) / 2
    }

    return median;
}

// return numbers that appear most in array
function getMode(array) {
    // hash table object 
    var modeObj = {};
    array.forEach(num => {
        // add as property if not present already
        if(!modeObj[num]) modeObj[num] = 0;
        // increment
        modeObj[num]++
    });

    // how often current mode shows up
    var maxFrequency = 0;
    var modes = []
    // loop thru num properties in modeObj
    for (var num in modeObj) {
        if(modeObj[num] > maxFrequency) {
            modes = [num];
            maxFrequency = modeObj[num];
        }
        // if current number has same modes as maxfreq
        else if (modeObj[num] === maxFrequency) modes.push(num)
    }

    // if number of modes is equal to num of keys in mode obj, we know all numbers appeared at same freq.
    if (modes.length === Object.keys(modeObj).length) modes = []
    return modes;
}

meanMedianMode([1, 2 ,3 ,4 ,5 ,6 ,5 ,4 ,1 ,1 ,9 ])
