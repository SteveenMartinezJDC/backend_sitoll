"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexionBD_1 = __importDefault(require("../../../config/connexion/conexionBD"));
const turnoUsuarios_1 = __importDefault(require("../../../models/turnoUsuarios"));
class TurnoUsuarioDao {
    static agregarTurnoUsuario(res, objtTurnoUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            this.TurnoUsuarioRepository.insert(objtTurnoUsuario)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Turno usuario guardado", objeto: respuesta.raw });
            }).catch((miErrosito) => {
                res.status(400).json({ mensaje: "Fallo al Insertar el turno usuario" });
            });
        });
    }
    static obtenerTurnoUsuario(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.TurnoUsuarioRepository.find()
                .then((respuesta) => {
                const arregloTurnoUsuario = respuesta;
                res.status(200).json(arregloTurnoUsuario);
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "Fallo al consultar los turnos de usuarios" });
            });
        });
    }
    static editarTurnoUsuario(res, objtTurnoUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            this.TurnoUsuarioRepository.update({ codTurno: objtTurnoUsuario.codTurno }, objtTurnoUsuario)
                .then((respuesta) => {
                res.status(200).json({ mensaje: " Turno usuario actualizado", objeto: objtTurnoUsuario });
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: " Fallo al actualizar el turno" });
            });
        });
    }
}
TurnoUsuarioDao.TurnoUsuarioRepository = conexionBD_1.default.getRepository(turnoUsuarios_1.default);
exports.default = TurnoUsuarioDao;
