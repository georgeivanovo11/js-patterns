const Logger = require('./Logger');
const UserService = require('./UserService');
const PostService = require('./PostService');

const logger = new Logger().getInstance();

const userService = new UserService();
const postService = new PostService();

logger.log('Application started!');

const user = { name: "John" };
const post = { text: "hello" };

return userService.create(user).then(()=>{
    return postService.create(post);
}).then(()=>{
    logger.log('Application finished!');
});
