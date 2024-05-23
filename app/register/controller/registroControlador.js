"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registroDao_1 = __importDefault(require("../dao1/registroDao"));
const nanoid_1 = require("nanoid");
class RegistroControlador extends registroDao_1.default {
    registrarUsuario(req, res) {
        let objtUsuario = req.body;
        let objtAcceso = req.body;
        objtUsuario.identificacionUsuario = 'DOC_' + (0, nanoid_1.nanoid)(10);
        objtUsuario.rolUsuario = 'Empleado';
        RegistroControlador.nuevoUsuario(res, objtUsuario, objtAcceso);
    }
    listarDepartamentos(req, res) {
        RegistroControlador.obtenerUsuarios(res);
    }
}
const registroControlador = new RegistroControlador();
exports.default = registroControlador;
