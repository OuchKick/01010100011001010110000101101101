// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(role, gitHub) {
        this.role = role;
        this.gitHub = gitHub;

    }

    getRole(){
        return this.role;

    }

    getGithub(){
        return this.gitHub;

    }

}