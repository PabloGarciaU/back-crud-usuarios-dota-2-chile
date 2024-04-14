"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controlers/users");
const router = (0, express_1.Router)();
// Rutas para los controladores de usuarios
router.get('/', users_1.getUsers); // Obtener todos los usuarios
router.get('/:id', users_1.getUser); // Obtener un usuario por ID
router.post('/', users_1.postUser); // Crear un nuevo usuario
router.put('/:id', users_1.putUser); // Actualizar un usuario por ID
router.delete('/:id', users_1.deleteUser); // Eliminar un usuario por ID
exports.default = router;
