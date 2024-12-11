// Inspirational Message Generator

// Arrays of message parts
const beginnings = [
    "Believe in yourself,",
    "The key to success is",
    "Happiness comes from"
];

const middles = [
    "taking small steps every day",
    "focusing on your strengths",
    "embracing challenges"
];

const endings = [
    "and enjoying the journey.",
    "while staying true to yourself.",
    "because growth happens outside your comfort zone."
];

// Function to generate a random message
function generateMessage() {
    const beginning = beginnings[Math.floor(Math.random() * beginnings.length)];
    const middle = middles[Math.floor(Math.random() * middles.length)];
    const ending = endings[Math.floor(Math.random() * endings.length)];

    return `${beginning} ${middle} ${ending}`;
}

// Generate and log a random message
console.log(generateMessage());
