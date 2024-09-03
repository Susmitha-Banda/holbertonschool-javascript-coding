// Import the 'readline' module
const readline = require('readline');

// create an interface to read from the stdin and write to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// display the initial message
console.log('Welcome to Holberton School, what is your name?');

// Read the user input
rl.question('', (name) => {
  // Display the user's name
  console.log(`Your name is: ${name}`);

  // close the interface and display closing message
  rl.close();
  console.log('This important software is now closing');
});