const Logger = require('./Logger');

class UserService {

    constructor(){
        this.logger = new Logger().getInstance();
    }

    create(user){
        return Promise.resolve().then((savedUser) => {
            this.logger.log("User saved!");
        });
    }
}

module.exports = UserService;