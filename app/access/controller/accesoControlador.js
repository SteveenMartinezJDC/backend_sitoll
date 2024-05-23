"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accesoDao_1 = __importDefault(require("../dao/accesoDao"));
class AccesoControlador extends accesoDao_1.default {
    iniciarSesion(req, res) {
        let objtAcceso = req.body;
        AccesoControlador.sesion(res, objtAcceso);
    }
}
const accesoControlador = new AccesoControlador();
exports.default = accesoControlador;
