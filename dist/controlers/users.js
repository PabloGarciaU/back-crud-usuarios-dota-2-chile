"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const users_1 = __importDefault(require("../models/users"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listUsers = yield users_1.default.findAll();
        res.json({
            msg: 'get Users',
            listUsers
        });
    }
    catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({
            msg: 'Error al obtener usuarios'
        });
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield users_1.default.findByPk(id);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({
                msg: `El usuario con id ${id} no existe en la base de datos`
            });
        }
    }
    catch (error) {
        console.error('Error al obtener usuario:', error);
        res.status(500).json({
            msg: 'Error al obtener usuario'
        });
    }
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apodo, rut, fechadenacimiento, horasjugadas, rangoactual } = req.body;
    try {
        const newUser = yield users_1.default.create({ nombre, apodo, rut, fechadenacimiento, horasjugadas, rangoactual });
        res.json(newUser);
    }
    catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({
            msg: 'Error al crear usuario'
        });
    }
});
exports.postUser = postUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, apodo, rut, fechadenacimiento, horasjugadas, rangoactual } = req.body;
    try {
        const user = yield users_1.default.findByPk(id);
        if (user) {
            yield user.update({ nombre, apodo, rut, fechadenacimiento, horasjugadas, rangoactual });
            res.json({
                msg: `Usuario con id ${id} actualizado correctamente`
            });
        }
        else {
            res.status(404).json({
                msg: `El usuario con id ${id} no existe en la base de datos`
            });
        }
    }
    catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).json({
            msg: 'Error al actualizar usuario'
        });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield users_1.default.findByPk(id);
        if (user) {
            yield user.destroy();
            res.json({
                msg: `Usuario con id ${id} eliminado correctamente`
            });
        }
        else {
            res.status(404).json({
                msg: `El usuario con id ${id} no existe en la base de datos`
            });
        }
    }
    catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).json({
            msg: 'Error al eliminar usuario'
        });
    }
});
exports.deleteUser = deleteUser;
