
//function to generate html for profile

function generateProfile(data) {
    return `
    
    ${data.fullname}
  
    ## Username
    ${data.id}
  
    ## Description
    ${data.email}
  
    ## Installation
    ${data.role}
  `;
  }
  
  module.exports = generateProfile;