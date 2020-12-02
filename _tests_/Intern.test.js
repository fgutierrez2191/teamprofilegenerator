const Intern = require("../lib/Intern")

//test to ger role
test('getRole should return intern', () => {
    const testValue = "Intern";
    const e = new Intern("Soren", 120, "sorenbenjamin2191@icloud.com");
    expect(e.getRole()).toBe(testValue);
});

//test to get school
test('getSchool should return schoolname', () => {
    const testValue = "Ut austin";
    const e = new Intern("Soren", 120, "sorenbanjamin2191@icloud.com", testValue);
    expect(e.getSchoolName()).toBe(testValue);
});
