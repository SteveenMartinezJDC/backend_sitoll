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
const puesto_1 = __importDefault(require("../../../models/puesto"));
class PuestosDao {
    static agregarPuestos(res, objtPuestos) {
        return __awaiter(this, void 0, void 0, function* () {
            this.PuestosRepository.insert(objtPuestos)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Puesto guardado", objeto: respuesta.raw });
            }).catch((miErrosito) => {
                res.status(400).json({ mensaje: "Fallo al Insertar el puesto" });
            });
        });
    }
    static obtenerPuestos(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.PuestosRepository.find()
                .then((respuesta) => {
                const arregloPuestos = respuesta;
                res.status(200).json(arregloPuestos);
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: " Fallo al consultar los puestos" });
            });
        });
    }
    static editarPuestos(res, objtPuestos) {
        return __awaiter(this, void 0, void 0, function* () {
            this.PuestosRepository.update({ codPuesto: objtPuestos.codPuesto }, objtPuestos)
                .then((respuesta) => {
                res.status(200).json({ mensaje: " Puesto actualizado", objeto: objtPuestos });
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: " Fallo al actualizar el puesto" });
            });
        });
    }
    static borrarPuesto(res, codPuesto) {
        return __awaiter(this, void 0, void 0, function* () {
            this.PuestosRepository.delete({ codPuesto: codPuesto })
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Puesto eliminado", respuesta: respuesta.raw });
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "Fallo al eliminar el puesto" });
            });
        });
    }
}
PuestosDao.PuestosRepository = conexionBD_1.default.getRepository(puesto_1.default);
exports.default = PuestosDao;
