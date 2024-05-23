"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const turnoDao_1 = __importDefault(require("../dao/turnoDao"));
class TurnoControlador extends turnoDao_1.default {
    crearTurno(req, res) {
        let objTurno;
        objTurno = req.body;
        TurnoControlador.agregarTurno(res, objTurno);
    }
    listarTurno(req, res) {
        TurnoControlador.obtenerTurno(res);
    }
    actualizarTurno(req, res) {
        let objTurno;
        objTurno = req.body;
        TurnoControlador.editarTurno(res, objTurno);
    }
    eliminarTurno(req, res) {
        let codTurno = Number(req.params.codTurno);
        if (!isNaN(codTurno)) {
            TurnoControlador.borrarTurno(res, codTurno);
        }
        else {
            res.status(400).json({ mensaje: "Codigo del turno no valido" });
        }
    }
}
const turnoControlador = new TurnoControlador();
exports.default = turnoControlador;
