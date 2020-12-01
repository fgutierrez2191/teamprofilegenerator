const Employee = require('../lib/Employee');


test("Can create Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });

  //test to set name 

test('can set a name', () => {
    const name = "felix";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

  //test to set id
  test('can set an id', () => {
    const id = 102;
    const e = new Employee("felix", id);
    expect(e.id).toBe(id);
});

  //test to set email
  test('can set an email', () => {
    const email = "email";
    const e = new Employee("felix", 102, email);
    expect(e.email).toBe(email);
});

//test to get role
test('getRole should return employee', () => {
    const testValue = "Employee";
    const e = new Employee("felix", 102, "fgutierrez2191@icloud.com");
    expect(e.getRole()).toBe(testValue);
});



  