// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(role, officeNumber) {
        this.role = role;
        this.officeNumber = officeNumber;

    }

    getRole(){
        return this.role;

    }

    getOfficeNumber(){
        return this.officeNumber;

    }

}