const Intern = require("../lib/Intern");

// Giving Employee -> Intern a school name
test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
  // When the employee is an intern, set the testValue(school) to the end of the Employee Instance
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
  // Putting everything together with Name, Employee ID or technically Intern # , Email and school (testValue)
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
  // Get the school name (testValue) and it will be at the end of the Employee Instance
});
