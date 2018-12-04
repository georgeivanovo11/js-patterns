const logger = require('./Logger');

class PostService {

    create(post){
        return Promise.resolve().then((savedPost) => {
            logger.log("Post saved!");
        });
    }
}

module.exports = PostService;