import { Request, Response } from 'express';
import Usuario from '../models/users';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const listUsers = await Usuario.findAll();
        res.json({
            msg: 'get Users',
            listUsers
        });
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({
            msg: 'Error al obtener usuarios'
        });
    }
};

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await Usuario.findByPk(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({
                msg: `El usuario con id ${id} no existe en la base de datos`
            });
        }
    } catch (error) {
        console.error('Error al obtener usuario:', error);
        res.status(500).json({
            msg: 'Error al obtener usuario'
        });
    }
};

export const postUser = async (req: Request, res: Response) => {
    const { nombre, apodo, rut, fechadenacimiento, horasjugadas, rangoactual } = req.body;
    try {
        const newUser = await Usuario.create({ nombre, apodo, rut, fechadenacimiento, horasjugadas, rangoactual });
        res.json(newUser);
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({
            msg: 'Error al crear usuario'
        });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre, apodo, rut, fechadenacimiento, horasjugadas, rangoactual } = req.body;
    try {
        const user = await Usuario.findByPk(id);
        if (user) {
            await user.update({ nombre, apodo, rut, fechadenacimiento, horasjugadas, rangoactual });
            res.json({
                msg: `Usuario con id ${id} actualizado correctamente`
            });
        } else {
            res.status(404).json({
                msg: `El usuario con id ${id} no existe en la base de datos`
            });
        }
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).json({
            msg: 'Error al actualizar usuario'
        });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await Usuario.findByPk(id);
        if (user) {
            await user.destroy();
            res.json({
                msg: `Usuario con id ${id} eliminado correctamente`
            });
        } else {
            res.status(404).json({
                msg: `El usuario con id ${id} no existe en la base de datos`
            });
        }
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).json({
            msg: 'Error al eliminar usuario'
        });
    }
};