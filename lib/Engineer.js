// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");
// Bring in name, id, email from Employee parent
// additionally have the github for the Engineer child
class Engineer extends Employee {
    constructor(name, id, email, github) {
       super(name, id, email);
       this.github = github;
    }

    getRole(){
        return "Engineer";

    }

    getGithub(){
        return this.github;

    }

}

module.exports = Engineer;