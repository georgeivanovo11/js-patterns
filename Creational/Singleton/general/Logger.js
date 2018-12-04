class Logger {
    constructor(){
        console.log("Logger was created!");
        this.logs = [];
    }

    count() {
        return this.logs.length;
    }

    log(message){        
        const timestamp = new Date().toISOString();
        let log = { timestamp, message };
        this.logs.push(log);
        console.log(JSON.stringify(log));
    }
}

module.exports = new Logger();