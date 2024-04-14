import * as path from 'path';
import * as sqlite3 from 'sqlite3';

const dbFilePath = path.resolve(__dirname, '../db/mydatabase.db');

const db = new sqlite3.Database(dbFilePath, (err) => {
    if (err) {
        console.error('Error al abrir la base de datos:', err.message);
    } else {
        console.log('Conectado a la base de datos.');
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

    const insertDataScript = `
    INSERT INTO usuarios_crud_dota_2 (nombre, apodo, rut, fecha_nacimiento, horas_jugadas, rango_actual)
    VALUES
        ('Pablo Garcia', 'Canadrui', '20.278.438-0', '1999-11-10', 5503, 'Divino'),
        ('Juan', 'juancito', '12345678-9', '1990-01-01', 100, 'Heraldo'),
        ('María', 'mary90', '98765432-1', '1992-05-15', 150, 'Cruzado'),
        ('Pedro', 'pedrito', '56789012-3', '1985-08-20', 200, 'Arconte'),
        ('Carlos', 'carlitos', '34567890-1', '1995-03-10', 80, 'Leyenda'),
        ('Ana', 'anita', '56789012-3', '1998-11-25', 120, 'Divino'),
        ('Luis', 'lucho', '78901234-5', '1983-09-08', 300, 'Inmortal'),
        ('Laura', 'laurita', '90123456-7', '1987-07-20', 250, 'Heraldo'),
        ('Sofía', 'sofi', '12345678-9', '2000-02-14', 180, 'Cruzado'),
        ('Mateo', 'mateito', '23456789-0', '1993-06-30', 220, 'Arconte'),
        ('Valentina', 'vale', '45678901-2', '1996-10-05', 270, 'Leyenda');
`;

    db.serialize(() => {
        db.run(createScript, (err) => {
            if (err) {
                console.error('Error al crear la tabla:', err.message);
            } else {
                console.log('Tabla creada exitosamente.');
                // Insertar datos de muestra después de crear la tabla
                db.run(insertDataScript, (err) => {
                    if (err) {
                        console.error('Error al insertar datos:', err.message);
                    } else {
                        console.log('Datos insertados exitosamente.');
                    }
                });
            }
        });
    });
};
