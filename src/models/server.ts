import express, { Application, Request, Response } from 'express';
import routesUsers from '../routers/users';
import { createDatabase } from '../db/databaseInitializer';

class Server {
    private app: Application;
    private port: string | number; 

    constructor() {
        console.log(process.env.PORT);
        this.app = express();
        this.port = process.env.PORT || 3001; 
        this.listen();
        this.createDatabase();
        this.midlewares();
        this.router();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }

    router() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API funcionando' // Corregido el mensaje de respuesta
            })
        })
        this.app.use('/api/usuarios', routesUsers);
    }

    midlewares() {
        // Body parser
        this.app.use(express.json());
    }

    createDatabase(){
        createDatabase();
    };

}

export default Server;
