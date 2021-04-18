// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

// Bring in name, id, email from Employee parent
// additionally have the school for the Intern child
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
      

    }

    getRole(){
        return "Intern";

    }

    getSchool(){
        return this.school;

    }

}

module.exports = Intern;


