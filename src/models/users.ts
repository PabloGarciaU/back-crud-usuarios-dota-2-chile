import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('Usuario', {
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
}, {
    createdAt: false,
    updatedAt: false
});

export default Usuario;