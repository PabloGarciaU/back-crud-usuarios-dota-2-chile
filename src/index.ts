import Server from './models/server';
import dotenv from 'dotenv'; // Corrección en la importación de dotenv

// Configurar dotenv
dotenv.config();

const server = new Server();