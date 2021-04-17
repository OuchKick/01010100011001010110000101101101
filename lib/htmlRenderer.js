const path = require("path");
const fs = require("fs");
// Path for templates 
const templatesDir = path.resolve(__dirname, "../templates");

// pulling everything from Parent Employee
const render = employees => {
  const html = [];

  // Based on inputs it will assign another role, Child - Manager/Engineer/Intern
  html.push(...employees
    // .filter => creates a new array with all elements that pass the test implements by the provided function
    .filter(employee => employee.getRole() === "Manager")
    // .map => method creates a new array populated with the results of calling a provided function on every element in the calling array.
    .map(manager => renderManager(manager))
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
  );

  // rederMain = outputs HTML to render to the main content - Outputs HTML - will join HTML as a string
  return renderMain(html.join(""));

};
  
// NAME, ROLE, EMAIL, ID - WILL BE FROM THE PARENT EMPLOYEE
// OFFICE NUMBER WILL BE FOR CHILD = MANAGER
// going to need name, role, email, id, office number in the JS for Manager
const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

// Name, role, email, id, github
// NAME ROLE EMAIL ID WILL BE FROM PARENT EMPLOYEE
// GITHUB WILL BE FROM THE CHILD - ENGINEER
const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};

// name, role, email, id, school
// NAME ROLE EMAIL ID WILL BE FROM PARENT EMPLOYEE
// SCHOOL WILL BE FROM THE CHILD - INTERN
// path.resolve - used to resolve a sequence of path-segments to an absolute path. 
// It works by processing the sequence opf paths from right to left, prepending each of the paths until the abosolute path is created.
// 
const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

// renderMain = outputs HTML to render to the main content - Outputs HTML - will join HTML as a string
const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  return replacePlaceholders(template, "team", html);
};
// RegExp - object used for matching text with a pattern/ match character combinations in strings
const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;
