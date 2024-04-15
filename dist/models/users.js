"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../dist/db/database"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    apodo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    rut: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    fecha_nacimiento: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    horas_jugadas: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    rango_actual: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: database_1.default, // Conexión a la base de datos
    modelName: 'User' // Nombre del modelo en la base de datos
});
exports.default = User;
