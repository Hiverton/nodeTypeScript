import App from "./app";
import * as bodyParser from "body-parser";
import morgan from "morgan";

import TaskController from "./controllers/task.controller";
import logMiddleware from "./middlewares/log.middleware";

const app = new App({
    port: 3000,
    middlewares: [
        morgan('dev'),
        bodyParser.urlencoded({extended: false}),
        bodyParser.json(),
        logMiddleware,
    ],
    controllers: [
        new TaskController(),
    ]
});

app.listen();