const Manager = require("../lib/Manager.js")

//test to get role
test('getRole should return manager', () => {
    const testValue = "Manager";
    const e = new Manager("felix", 102, "fgutierrez2191@icloud.com", 555);
    expect(e.getRole()).toBe(testValue);
});

//test to get officenumber
test('getOfficeNumber should return officenumber', () => {
    const testValue = 555;
    const e = new Manager("felix", 102, "fgutierrez2191@icloud.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});