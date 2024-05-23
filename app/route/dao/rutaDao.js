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
const ruta_1 = __importDefault(require("../../../models/ruta"));
const conexionBD_1 = __importDefault(require("../../../config/connexion/conexionBD"));
class RutaDao {
    static agregarRuta(res, objRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.RutaRepository.insert(objRuta)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Ruta Guardada", objeto: respuesta.raw });
            }).catch((miErrosito) => {
                res.status(400).json({ mensaje: "Fallo al Insertar el Ruta" });
            });
        });
    }
    static obtenerRutas(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.RutaRepository.find()
                .then((respuesta) => {
                const arregloRutas = respuesta;
                res.status(200).json(arregloRutas);
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: " Fallo al consultar las Rutas" });
            });
        });
    }
    static editarRuta(res, objRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.RutaRepository.update({ codRuta: objRuta.codRuta }, objRuta)
                .then((respuesta) => {
                res.status(200).json({ mensaje: " Ruta actualizado", objeto: objRuta });
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: " Fallo al actualizar el Ruta" });
            });
        });
    }
    static borrarRuta(res, codRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.RutaRepository.delete({ codRuta: codRuta })
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Ruta eliminado", respuesta: respuesta.raw });
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "Fallo al eliminar el Ruta" });
            });
        });
    }
}
RutaDao.RutaRepository = conexionBD_1.default.getRepository(ruta_1.default);
exports.default = RutaDao;
