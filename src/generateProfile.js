
//function to generate html for profile

const generateProfile = (team) => {
    const genManager = (manager) => {
        return `
        <h2>${manager.getName()}</h2>`
    }

    const genEngineer = (engineer) => {
        return `
        <h2>${engineer.getName()}</h2>`

    }

    const genIntern = (intern) => {
        return `
        <h2>${intern.getName()}</h2>`
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



 // module.exports = generateProfile;