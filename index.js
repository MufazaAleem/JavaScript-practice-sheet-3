// Task 1: Sentence Capitalization
const sentence = prompt("Enter a sentence: ");
const words = sentence.split(' ');

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

const capitalizedSentence = words.join(' ');
console.log("Task 1: Capitalized Sentence - " + capitalizedSentence);

// Task 2: String Truncation
const longString = prompt("Enter a long string: ");
const maxLength = 100;

if (longString.length > maxLength) {
    const truncatedString = longString.slice(0, maxLength) + "...";
    console.log("Task 2: Truncated String - " + truncatedString);
} else {
    console.log("Task 2: Original String - " + longString);
}

// Task 3: String Search
const paragraph = "This is a sample paragraph for searching.";
const searchWord = prompt("Enter a word to search: ");
const index = paragraph.indexOf(searchWord);

if (index !== -1) {
    console.log("Task 3: Word found at index " + index);
} else {
    console.log("Task 3: Word not found");
}

// Task 4: Character Count
const sentence2 = prompt("Enter a sentence: ");
const charToCount = prompt("Enter a character to count: ");
let count = 0;

for (let i = 0; i < sentence2.length; i++) {
    if (sentence2.charAt(i) === charToCount) {
        count++;
    }
}

console.log("Task 4: Character '" + charToCount + "' appears " + count + " times.");

// Task 5: Word Replacement
let sentence3 = "The [noun] is [adjective].";
const noun = prompt("Enter a noun: ");
const adjective = prompt("Enter an adjective: ");

sentence3 = sentence3.replace("[noun]", noun);
sentence3 = sentence3.replace("[adjective]", adjective);

console.log("Task 5: Replaced Sentence - " + sentence3);

// Task 6: Calculate the Area of a Circle
const radius = parseFloat(prompt("Enter the radius of the circle: "));
const area = Math.PI * Math.pow(radius, 2);
console.log("Task 6: The area of the circle is: " + area);

// Task 7: Temperature Conversion
const celsius = parseFloat(prompt("Enter temperature in Celsius: "));
console.log("Task 7: Rounded to nearest whole number: " + Math.round(celsius));
console.log("Task 7: Rounded up: " + Math.ceil(celsius));
console.log("Task 7: Rounded down: " + Math.floor(celsius));

// Task 8: Discount Calculator
const originalPrice = parseFloat(prompt("Enter the original price: "));
const discountPercentage = Math.floor(Math.random() * 41) + 10;
const discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));

console.log("Task 8: Original Price: $" + originalPrice);
console.log("Task 8: Discount Percentage: " + discountPercentage + "%");
console.log("Task 8: Final Price: $" + discountedPrice.toFixed(2));

// Task 9: Number to Currency
const amount = parseFloat(prompt("Enter a money amount: "));
const formattedCurrency = "$" + amount.toFixed(2);
console.log("Task 9: Formatted Currency: " + formattedCurrency);

// Task 10: Array Sorting
const names = ["Alice", "Bob", "Eve", "Charlie"];
names.sort();
console.log("Task 10: Sorted Names - " + names.join(', '));
