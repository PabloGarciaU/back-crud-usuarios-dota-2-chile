import { Router } from 'express';
import { getUser, getUsers, postUser, updateUser, deleteUser } from '../controlers/users';

const router = Router();

// Rutas para los controladores de usuarios
router.get('/', getUsers); // Obtener todos los usuarios
router.get('/:id', getUser); // Obtener un usuario por ID
router.post('/', postUser); // Crear un nuevo usuario
router.put('/:id', updateUser); // Actualizar un usuario por ID
router.delete('/:id', deleteUser); // Eliminar un usuario por ID

export default router;