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

class Singleton {
    constructor(){
        if(!Singleton.instance){
            Singleton.instance = new Logger();
        }
    }

    getInstance(){
        return Singleton.instance;
    }
}

module.exports = Singleton;