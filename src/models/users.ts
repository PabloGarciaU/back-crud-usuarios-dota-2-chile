import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false // Nombre es obligatorio
    },
    apodo: {
        type: DataTypes.STRING,
        allowNull: false // Apodo es obligatorio
    },
    rut: {
        type: DataTypes.STRING,
        allowNull: false // Rut es obligatorio
    },
    fechadenacimiento: {
        type: DataTypes.DATE,
        allowNull: false // Fecha de nacimiento es obligatoria
    },
    horasjugadas: {
        type: DataTypes.STRING,
        allowNull: false // Horas jugadas es obligatorio
    },
    rangoactual: {
        type: DataTypes.STRING,
        allowNull: false // Rango actual es obligatorio
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Usuario;
