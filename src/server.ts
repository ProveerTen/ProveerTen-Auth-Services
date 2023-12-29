
import express from 'express';
import cors from 'cors';
import register from './routes/register';
import login from './routes/login';
import resetPassword from './routes/reset-password';

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
        this.app.use(express.json());

        // Cors
        this.app.use(cors({ credentials: true, origin: 'http://localhost:4200' }));
    }

    routes() {
        this.app.use('/register', register);
        this.app.use('/login', login);
        this.app.use('/reset',resetPassword);
    }
}

export default Server;