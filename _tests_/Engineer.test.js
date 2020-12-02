const Engineer = require("../lib/Engineer")

//test to ger role
test('getRole should return engineer', () => {
    const testValue = "Engineer";
    const e = new Engineer("Jessica", 106, "jessicalorae2191@icloud.com");
    expect(e.getRole()).toBe(testValue);
});

//test to get github username
test('getGithubName should return githubname', () => {
    const testValue = "jessicalorae@github.com";
    const e = new Engineer("Jessica", 106, "jessicalorae2191@icloud.com", testValue);
    expect(e.getGithubName()).toBe(testValue);
});