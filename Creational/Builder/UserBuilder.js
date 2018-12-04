const User = require('./User');

class UserBuilder {

    constructor(name) {
        this.name = name;
        this.hobbies = [];
    }

    makeTeamLead(){
        this.isTeamLead = true;
        this.isHR = false;
        this.isDirector = false;
        return this;
    }

    makeHR(){
        this.isTeamLead = false;
        this.isHR = true;
        this.isDirector = false;
        return this;
    }

    makeDirector(){
        this.isTeamLead = false;
        this.isHR = false;
        this.isDirector = true;
        return this;
    }

    withSavary(amount)
    {
        this.salary = amount;
        return this;
    }

    withExprerience(amount)
    {
        this.experience = amount;
        return this;
    }

    withHobbies(list)
    {
        this.hobbies = list;
        return this;
    }

    build(){
        return new User(this);
    }

}

module.exports = UserBuilder;