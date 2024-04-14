import * as path from 'path';
import * as sqlite3 from 'sqlite3';

const dbFilePath = path.resolve(__dirname, '../db/mydatabase.db');

const db = new sqlite3.Database(dbFilePath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the database.');
    }
});

export const createDatabase = () => {
    const createScript = `
        CREATE TABLE IF NOT EXISTS usuarios_crud_dota_2 (
            id INTEGER PRIMARY KEY,
            nombre TEXT,
            apodo TEXT,
            rut TEXT,
            fecha_nacimiento DATE,
            horas_jugadas INTEGER,
            rango_actual TEXT
        );
    `;

    db.run(createScript, (err) => {
        if (err) {
            console.error('Error creating table:', err.message);
        } else {
            console.log('Table created successfully.');
        }
    });
};