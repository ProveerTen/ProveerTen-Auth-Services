"use strict";
/*
import Server from "./server";
import dotenv from 'dotenv';



import connection from './config/db-config';

// Configuramos dotenv
dotenv.config();

// Instanciamos el servidor
const server = new Server();

server.listen();

// Conectamos la db
connection;

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const dotenv_1 = __importDefault(require("dotenv"));
//import pool from './config/db-config';
dotenv_1.default.config();
const server = new server_1.default();
server.listen();
