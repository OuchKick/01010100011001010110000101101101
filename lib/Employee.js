// TODO: Write code to define and export the Employee class

class Employee {
constructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

getName(){
    return this.name;
}

getId(){
    return this.id;
}

getEmail(){
    return this.email;
}
getRole(){
    return "Employee";
}

}

module.exports = Employee;




// What is the team manager's name? - input
// What is the team manager's ID? - input
// What is the team manager's email? - input
// What is the team manager's office number? - input
// Which type of team memeber would you like to add? - List with choices
// Engineer, Intern, No one else
// What is your engineer's name?
// What is your engineer's ID?
// What is your engineer's email?
// What is your engineer's GitHub username?
// What is your intern's name?
// What is your intern's id?
// What is your intern's email?
// What school does your intern attend?