const fs = require('fs');

const args = process.argv;

const currentWorkingDirectory = args[1].slice(0, -8);


/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */


function onDataReceived(text) {
  
  if (text === 'quit\n' || text === 'exit\n') 
  {
    quit();
  }

  else if(text === 'help\n' )
  {
    HelpFunction();
  }
  
  else if(text === 'hello\n' || (/hello [A-Za-z]/.test(text)))
  {
    hello(text);
  }

  else
  {
    unknownCommand(text);
  }

}
/**
 * HelpFunction displays all possible commands to use in this application
 */
const HelpFunction = () => {
  const help = `
Usage :-
$ node index.js add "todo item"  # Add a new todo
$ node index.js ls               # Show remaining todos
$ node index.js del NUMBER       # Delete a todo
$ node index.js done NUMBER      # Complete a todo
$ node index.js help             # Show usage
$ node index.js report           # Statistics`;

  console.log(help);
};



/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "' + c.trim() + '"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(str)
{
  console.log(`${str}!`);
}


/**
 * Telling the user of all the possible commands
 * 
 */



/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("ahmad")
