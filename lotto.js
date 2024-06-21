const randomNumber = require('./randomNumber');

const pickedNumbers = [7, 11, 24, 26, 47];
let drawnNumbers = [];

function simulateWin() {
    let won = false;
    let attempts = 0;

    while (!won) {
        drawNums();

        if (decideWin(pickedNumbers, drawnNumbers) === 5) {
            console.log('Gratulálok Őn megnyerte a lottót csupán ennyi húzásból: ' + attempts);
            console.log(pickedNumbers);
            console.log(drawnNumbers);
            won = true;
        } else {
            attempts++;
        }
    }
}

async function simulateWinAsync() {
    let won = false;
    let attempts = 0;

    while (!won) {
        drawNums();

        if (decideWin(pickedNumbers, drawnNumbers) === 5) {
            won = true;
        } else {
            attempts++;
        }
    }

    return attempts; // Ensure the number of attempts is returned
}

function decideWin(pickedNumbers, drawnNumbers) {
    let numberOfHits = 0;

    pickedNumbers.forEach(picked => {
        if (drawnNumbers.includes(picked)) {
            numberOfHits++;
        }
    });

    return numberOfHits;
}

async function calculateProbability(multiplier) {
    if (multiplier <= 0) {
        throw new Error("The multiplier has to be greater than 0");
    }

    const attemptsArray = [];

    for (let i = 0; i < multiplier; i++) {
        let wonNumber = await simulateWinAsync();
        attemptsArray.push(wonNumber);
        console.log(`The probability of winning the lottery is: ${calcAverage(attemptsArray)}`);
    }
}

function drawNums() {
    drawnNumbers = [];
    for (let i = 0; i < 5; i++) {
        let contains = true;

        while (contains) {
            let randomNum = randomNumber.getRandomIntInclusive(1, 90);

            if (!drawnNumbers.includes(randomNum)) {
                drawnNumbers.push(randomNum);
                contains = false;
            }
        }
    }
}

/**
 * This function returns the average of the elements in the array that was passed in the function as a parameter.
 * @param {number[]} array - The array of numbers 
 * @returns {number} Returns the average of the array passed in; 
 */
function calcAverage(array) {
    if (array.length === 0) return 0;
    
    let sum = 0;

    array.forEach(element => {
        sum += element;
    });

    return sum / array.length;
}

module.exports = { calculateProbability };