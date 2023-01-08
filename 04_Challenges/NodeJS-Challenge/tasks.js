const fs = require('fs');

const args = process.argv;

const currentWorkingDirectory = args[1].slice(0, -8);

/* function to display possible commands */

const HelpFunction = () => {
    const help = `

$ node tasks.js add "todo item"  # Add a new todo
$ node tasks.js ls               # Show remaining todos
$ node tasks.js del NUMBER       # Delete a todo
$ node tasks.js done NUMBER      # Complete a todo
$ node tasks.js help             # Show possible commands`
  
    console.log(help);
};

/* 
*
*
function to add a new todo*/

const addFunction = () => {
  
  const newTask = args[3];

  if (newTask) 
  {
      let data = [];

      const fileData = fs
          .readFileSync(currentWorkingDirectory +'todo.txt').toString();

      fs.writeFile(currentWorkingDirectory + 'todo.txt',newTask + '\n' + fileData,

          function(err) {

              if (err) throw err;

              console.log('Added todo: "' + newTask + '"');
          },
      );
  } 
  else 
  {
    console.log('Error: Missing todo string.' + ' Nothing added!');
  }
};

/* list function */

const listFunction = () => {

  let data = [];

  const fileData = fs.readFileSync(currentWorkingDirectory +'todo.txt').toString();

  data = fileData.split('\n');

  let filterData = data.filter(function(value) 
  {
      return value !== '';
  });

  if (filterData.length === 0) 
  {
      console.log('There are no pending todos!');
  }
  for (let i = 0; i < filterData.length; i++) 
  {
      console.log((filterData.length - i) + '. ' +filterData[i]);
  }
};


/* delete function*/

const deleteFunction = () => {
  
  const deleteIndex = args[3];

  if (deleteIndex) 
  {
      let data = [];

      const fileData = fs
          .readFileSync(currentWorkingDirectory +
              'todo.txt').toString();

      data = fileData.split('\n');
      let filterData = data.filter(function(value) 
      {
        return value !== '';
      });

      
      if (deleteIndex > filterData.length || deleteIndex <= 0) {
          console.log(
              'Error: todo #' + deleteIndex +
              ' does not exist. Nothing deleted.',
          );

      } 
      else 
      {
      
          filterData.splice(filterData.length - deleteIndex, 1);
            
          const newData = filterData.join('\n');
            
          fs.writeFile(
              currentWorkingDirectory + 'todo.txt',
              newData, 
              function(err) {
                  if (err) throw err;

                  console.log('Deleted todo #' + deleteIndex);
              },
          );
      }
  } 

  else 

  {

      console.log('Error: Missing NUMBER for deleting todo.');
  }
};




switch (args[2]) {
  case 'help':
        {
            HelpFunction();
            break;
        }
        
  case 'add':
        {
            addFunction();
            break;
        }
  case 'ls':
          {
            listFunction();
            break;
          }

  case 'del':
        {
            deleteFunction();
            break;
        }

    default:
        {
            HelpFunction();
        }
}





/*-----------------------------------------*/

// const fs = require('fs');

// const args = process.argv;

// const currentWorkingDirectory = args[1].slice(0, -8);


// /**
//  * Starts the application
//  * This is the function that is run when the app starts
//  * 
//  * It prints a welcome line, and then a line with "----",
//  * then nothing.
//  *  
//  * @param  {string} name the name of the app
//  * @returns {void}
//  */
// function startApp(name){
//   process.stdin.resume();
//   process.stdin.setEncoding('utf8');
//   process.stdin.on('data', onDataReceived);
//   console.log(`Welcome to ${name}'s application!`)
//   console.log("--------------------")
// }


// /**
//  * Decides what to do depending on the data that was received
//  * This function receives the input sent by the user.
//  * 
//  * For example, if the user entered 
//  * ```
//  * node tasks.js batata
//  * ```
//  * 
//  * The text received would be "batata"
//  * This function  then directs to other functions
//  * 
//  * @param  {string} text data typed by the user
//  * @returns {void}
//  */


// function onDataReceived(text) {
  
//   if (text === 'quit\n' || text === 'exit\n') 
//   {
//     quit();
//   }

//   else if(text === 'help\n' )
//   {
//     HelpFunction();
//   }
  
//   else if(text === 'hello\n' || (/hello [A-Za-z]/.test(text)))
//   {
//     hello(text);
    
//   }

//   else
//   {
//     unknownCommand(text);
//   }

// }
// /**
//  * HelpFunction displays all possible commands to use in this application
//  */
// const HelpFunction = () => {
//   const help = `

// add "todo item"  # Add a new todo
// ls               # Show remaining todos
// del NUMBER       # Delete a todo
// done NUMBER      # Complete a todo
// help             # Show possible commands
// report           # Show Statistics\n`;

//   console.log(help);
// };


// /**
//  * prints "unknown command"
//  * This function is supposed to run when all other commands have failed
//  *
//  * @param  {string} c the text received
//  * @returns {void}
//  */
// function unknownCommand(c){
//   console.log('unknown command: "' + c.trim() + '"')
// }


// /**
//  * Says hello
//  *
//  * @returns {void}
//  */
// function hello(str)
// {
//   console.log(`${str}!`);
// }


// /**
//  * Exits the application
//  *
//  * @returns {void}
//  */
// function quit(){
//   console.log('Quitting now, goodbye!')
//   process.exit();
// }

// // The following line starts the application
// startApp("ahmad")
