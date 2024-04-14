"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("../routers/users"));
class Server {
    constructor() {
        console.log(process.env.PORT);
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 3001;
        this.listen();
        this.midlewares();
        this.router();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
    router() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API funcionando' // Corregido el mensaje de respuesta
            });
        });
        this.app.use('/api/usuarios', users_1.default);
    }
    midlewares() {
        // Body parser
        this.app.use(express_1.default.json());
    }
}
exports.default = Server;
