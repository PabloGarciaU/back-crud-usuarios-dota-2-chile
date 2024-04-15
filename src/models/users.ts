import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuarios = db.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apodo: {
        type: DataTypes.STRING
    },
    rut: {
        type: DataTypes.STRING
    },
    fechadenacimiento: {
        type: DataTypes.DATE
    },
    horasjugadas: {
        type: DataTypes.STRING
    },
    rangoactual: {
        type: DataTypes.STRING
    }
});

export default Usuarios;