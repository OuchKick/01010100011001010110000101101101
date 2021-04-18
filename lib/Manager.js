// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

// Bring in name, id, email from Employee parent
// additionally have the office number for the Manager child
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;

    }

    getRole(){
        return "Manager";

    }

    getOfficeNumber(){
        return this.officeNumber;

    }

}

module.exports = Manager;