// Code your solutions in this file
// Function to generate thank you messages
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

// Function to count down from a given number to 0
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

// Export the functions
module.exports = {
    writeCards,
    countDown
};
