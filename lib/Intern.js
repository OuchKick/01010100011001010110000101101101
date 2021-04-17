// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(role, school) {
        this.role = role;
        this.school = school;

    }

    getRole(){
        return this.role;

    }

    getSchool(){
        return this.school;

    }

}




