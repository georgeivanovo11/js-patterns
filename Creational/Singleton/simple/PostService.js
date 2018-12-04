var Logger = require('./Logger');

class PostService {

    constructor(){
        this.logger = new Logger().getInstance();
    }

    create(post){
        return Promise.resolve().then((savedPost) => {
            this.logger.log("Post saved!");
        });
    }
}

module.exports = PostService;