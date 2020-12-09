
//function to generate html for profile

const generateProfile = (team) => {
    const genManager = (manager) => {
        return `
        <div class="card">
        <div class="card-head">
            <h3>${manager.getName()}</h3>
            <h4>Role: Manager</h4>
        </div>
        <div class="card-body">
            <ul>
                <li>ID: ${manager.getEmail()}</li>
                <li>Email: <a href="mailto: ${manager.getId()}" target="none">${manager.getId()}</a></li>
                <li>Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
`
        
    }

    const genEngineer = (engineer) => {
        return `
        <div class="card">
        <div class="card-head">
            <h3>${engineer.getName()}</h3>
            <h4>Role: Engineer</h4>
        </div>
        <div class="card-body">
            <ul>
                <li>ID: ${engineer.getEmail()}</li>
                <li>Email: <a href="mailto: ${engineer.getId()}" target="none">${engineer.getId()}</a></li>
                <li>Github: ${engineer.getGithubName()}</li>

            </ul>
        </div>
    </div>
    `

    }

    const genIntern = (intern) => {
        return `
        <div class="card">
        <div class="card-head">
            <h3>${intern.getName()}</h3>
            <h4>Role: Intern</h4>
        </div>
        <div class="card-body">
            <ul>
                <li>ID: ${intern.getEmail()}</li>
                <li>Email: <a href="mailto: ${intern.getId()}" target="none">${intern.getId()}</a></li>
                <li>School:${intern.getSchoolName()}</li>

            </ul>
        </div>
    </div>
        `

    
    }

    const html = [];
    html.push(team.filter(emp => emp.getRole()=== "Manager").map(manager => genManager(manager)).join(""))

    html.push(team.filter(emp => emp.getRole()=== "Engineer").map(engineer => genEngineer(engineer)).join(""))

    html.push(team.filter(emp => emp.getRole()=== "Intern").map(Intern => genIntern(Intern)).join(""))

    return html.join("");

}
module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${generateProfile(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
       
   
    `
}



