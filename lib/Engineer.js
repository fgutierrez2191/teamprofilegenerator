const Employee = require("./Employee");

class Engineer extends Employee { 
    constructor(name, id, email, githubName) {
        super(name, id, email)
        this.githubName = githubName
    }

    getRole() {
        return "Engineer";
    }

    getGithubName() {
        return this.githubName
    }

}

module.exports = Engineer;