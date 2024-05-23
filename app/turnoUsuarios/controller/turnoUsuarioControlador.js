"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const turnoUsuarioDao_1 = __importDefault(require("../dao/turnoUsuarioDao"));
class TurnoUsuarioControlador extends turnoUsuarioDao_1.default {
    crearTurnoUsuario(req, res) {
        let objTurnoUsuario;
        objTurnoUsuario = req.body;
        TurnoUsuarioControlador.agregarTurnoUsuario(res, objTurnoUsuario);
    }
    listarTurnoUsuario(req, res) {
        TurnoUsuarioControlador.obtenerTurnoUsuario(res);
    }
    actualizarTurnoUsuario(req, res) {
        let objTurnoUsuario;
        objTurnoUsuario = req.body;
        TurnoUsuarioControlador.editarTurnoUsuario(res, objTurnoUsuario);
    }
}
const turnoUsuarioControlador = new TurnoUsuarioControlador();
exports.default = turnoUsuarioControlador;
