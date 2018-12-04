class User {

    constructor(builder) {
        this.name = builder.name;
        this.isTeamLead = builder.isTeamLead
        this.isHR = builder.isHR;
        this.isDirector = builder.isDirector;
        this.salary = builder.salary;
        this.experience = builder.experience;
        this.hobbies = builder.hobbies || [];
    }

    toString() {
        return JSON.stringify(this);
    }

}

module.exports = User;