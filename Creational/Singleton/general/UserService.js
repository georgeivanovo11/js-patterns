const logger = require('./Logger');

class UserService {
    
    create(user){
        return Promise.resolve().then((savedUser) => {
            logger.log("User saved!");
        });
    }
}

module.exports = UserService;