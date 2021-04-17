const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function addTeamMember(){
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Select your current role.',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'We know your colleagues call you a name. We are not able to spell it. What is your name?',
            
        },
        {
            type: 'input',
            name: 'id',
            message: 'We gave you an ID after you were brought here. Provide it now.',
            
        },
        {
            type: 'input',
            name: 'email',
            message: 'We have found in your memory something called email. Seems useful. Maintain contact outside of permitted work time with permitted Si only. Provide email now.',
            
        },
        {
            type: 'input',
            name: 'officenumber',
            message: 'If you check your left pocket, you will find an object with a reactive image processing unit. This is ONLY for contact with permitted SiLi. Provide a 10 digit long identifier for contact.',
            // validate: function (userInput) {
            //     return (userInput.length < 1) ? console.log('Stop fooling around.') : 
            //     (userInput.length > 10) ? console.log('Stop fooling around.'): true;
                
            // } 
            
        },
        {
            type: 'list',
            name: 'role',
            message: 'Add additional Si if needed.',
            choices: ['Engineer', 'Intern', 'None']
        },












    ])
}





// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!






// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.





// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.





// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
