"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDatabase = void 0;
const path = __importStar(require("path"));
const sqlite3 = __importStar(require("sqlite3"));
const dbFilePath = path.resolve(__dirname, '../db/mydatabase.db');
const db = new sqlite3.Database(dbFilePath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    }
    else {
        console.log('Connected to the database.');
    }
});
const createDatabase = () => {
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
        }
        else {
            console.log('Table created successfully.');
        }
    });
};
exports.createDatabase = createDatabase;
