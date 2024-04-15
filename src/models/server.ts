import express, { Application, Request, Response } from 'express';
import routesUsers from '../routers/users';
import db from '../db/connection';

class Server {
    private app: Application;
    private port: string | number; 

    constructor() {
        console.log(process.env.PORT);
        this.app = express();
        this.port = process.env.PORT || 3001; 
        this.listen();
        this.midlewares();
        this.router();
        this.dbConnection();
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

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Base de datos conectada');
        } catch (error) {
            console.error('Error al conectar con la base de datos:', error);
        }
    }

}

export default Server;
