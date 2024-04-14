import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
    res.json({
        msg: 'get Users'
    });
};

export const getUser = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        msg: 'get User',
        id
    });
};

export const postUser = (req: Request, res: Response) => {
    const { body } = req;

    res.json({
        msg: 'post User',
        body
    });
};

export const updateUser = (req: Request, res: Response) => {
    const { id } = req.params; // Corregido para acceder a req.body.id

    res.json({
        msg: 'put User',
        id
    });
};


export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        msg: 'deleteUser',
        id
    });
};
