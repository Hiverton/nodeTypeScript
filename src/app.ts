import express, { Application } from "express";
import mongoose from "mongoose";

class App {
    public app: Application;
    public port: number;

    constructor(appConfig: {port: number, middlewares: any, controllers: any}) {
        this.app = express();
        this.port = appConfig.port;
        this.setMongooseConnection();
        this.setMiddlewares(appConfig.middlewares);
        this.setControllers(appConfig.controllers);
    }

    private setMiddlewares(middlewares: { forEach: (mid: (middleware: any) => void) => void}) {
        middlewares.forEach(middleware => {
            this.app.use(middleware);
        })
    }

    private setControllers(controllers: { forEach: (mid: (controller: any) => void) => void}) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router);
        })
    }

    private setMongooseConnection(){
        const url = 'mongodb://gestaoambiental:gestaoambiental@cluster0-shard-00-00.o8sdg.mongodb.net:27017,cluster0-shard-00-01.o8sdg.mongodb.net:27017,cluster0-shard-00-02.o8sdg.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
        mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

    
    }

    public listen(){
        this.app.listen(this.port, () => {
            console.log('startou');
        });
    }
}

export default App;