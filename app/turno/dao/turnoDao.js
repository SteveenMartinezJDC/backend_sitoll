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
const turno_1 = __importDefault(require("../../../models/turno"));
class TurnoDao {
    static agregarTurno(res, objtTurno) {
        return __awaiter(this, void 0, void 0, function* () {
            this.TurnoRepository.insert(objtTurno)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Turno guardado", objeto: respuesta.raw });
            }).catch((miErrosito) => {
                res.status(400).json({ mensaje: "Fallo al Insertar el turno" });
            });
        });
    }
    static obtenerTurno(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.TurnoRepository.find()
                .then((respuesta) => {
                const arregloTurno = respuesta;
                res.status(200).json(arregloTurno);
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: " Fallo al consultar los turnos" });
            });
        });
    }
    static editarTurno(res, objtTurno) {
        return __awaiter(this, void 0, void 0, function* () {
            this.TurnoRepository.update({ codTurno: objtTurno.codTurno }, objtTurno)
                .then((respuesta) => {
                res.status(200).json({ mensaje: " Turno actualizado", objeto: objtTurno });
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: " Fallo al actualizar el turno" });
            });
        });
    }
    static borrarTurno(res, codTurno) {
        return __awaiter(this, void 0, void 0, function* () {
            this.TurnoRepository.delete({ codTurno: codTurno })
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Turno eliminado", respuesta: respuesta.raw });
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "Fallo al eliminar el Turno" });
            });
        });
    }
}
TurnoDao.TurnoRepository = conexionBD_1.default.getRepository(turno_1.default);
exports.default = TurnoDao;
