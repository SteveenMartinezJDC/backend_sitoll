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
const peaje_1 = __importDefault(require("../../../models/peaje"));
const var_imagenes_1 = __importDefault(require("../../../config/domain/var_imagenes"));
const administrarImagen_1 = __importDefault(require("../../../config/utilities/administrarImagen"));
class PeajeDao {
    static agregarPeaje(res, objtPeajes) {
        return __awaiter(this, void 0, void 0, function* () {
            this.PeajeRepository.insert(objtPeajes)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Peaje guardado", objeto: respuesta.raw });
            }).catch((miErrosito) => {
                res.status(400).json({ mensaje: "Fallo al Insertar el Ruta" });
            });
        });
    }
    static obtenerPeaje(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.PeajeRepository.find()
                .then((respuesta) => {
                const arregloPeajes = respuesta;
                arregloPeajes.map((objtPeajes) => {
                    let nombrePrivado = objtPeajes.fotoPrivadaPeaje;
                    let base64 = administrarImagen_1.default.cargarImagenBase64(nombrePrivado, var_imagenes_1.default.rutaFotoSistema + nombrePrivado, 500);
                    objtPeajes.base64Peaje = base64;
                });
                res.status(200).json({ arregloPeajes });
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: " Fallo al consultar los peajes" });
            });
        });
    }
    static editarPeaje(res, objtPeajes) {
        return __awaiter(this, void 0, void 0, function* () {
            this.PeajeRepository.update({ codPeaje: objtPeajes.codRuta }, objtPeajes)
                .then((respuesta) => {
                res.status(200).json({ mensaje: " Peaje actualizado", objeto: objtPeajes });
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: " Fallo al actualizar el peaje" });
            });
        });
    }
    static borrarPeaje(res, codPeaje) {
        return __awaiter(this, void 0, void 0, function* () {
            let encontrado = yield this.PeajeRepository.findOne({ where: { codPeaje: codPeaje } });
            if (encontrado) {
                const rutaImagenPrivada = var_imagenes_1.default.rutaFotoSistema + encontrado.fotoPrivadaPeaje;
                administrarImagen_1.default.borrarImagen(rutaImagenPrivada);
                this.PeajeRepository.delete({ codPeaje: codPeaje }).then((respuesta) => {
                    res.status(200).json({ mensaje: "Peaje eliminado", respuesta: respuesta.affected });
                }).catch((miErrorsito) => {
                    res.status(400).json({ mensaje: "Fallo al eliminar el peaje" });
                });
            }
            else {
                res.status(400).json({ mensaje: "Fallo al consultar el peaje" });
            }
        });
    }
}
PeajeDao.PeajeRepository = conexionBD_1.default.getRepository(peaje_1.default);
exports.default = PeajeDao;
