const UserBuilder = require('./UserBuilder');

const alex = new UserBuilder('Alex')
    .makeDirector()
    .withSavary(5000)
    .withExprerience(3)
    .build();

const eve = new UserBuilder('Eve')
    .makeTeamLead()
    .withSavary(1000)
    .withExprerience(1)
    .withHobbies(['sport'])
    .build();

console.log( alex.toString() );
console.log( eve.toString() );