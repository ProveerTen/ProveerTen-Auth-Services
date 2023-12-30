/*
import express from 'express';
import cors from 'cors';
import register from './routes/register';
import bodyParser from 'body-parser';

class Server {

    private app: express.Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.middlewares();
        this.routes();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

    middlewares() {
        // Parseo body
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());

        // Cors
        this.app.use(cors({ credentials: true, origin: 'http://localhost:4200' }));
    }

   /* routes() {
        this.app.use('/register', register);
        this.app.use('/login', login);
        this.app.use('/reset',resetPassword);
    }
}

export default Server;*/