"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const peajeDao_1 = __importDefault(require("../dao/peajeDao"));
const nanoid_1 = require("nanoid");
const administrarImagen_1 = __importDefault(require("../../../config/utilities/administrarImagen"));
const var_imagenes_1 = __importDefault(require("../../../config/domain/var_imagenes"));
class PeajeControlador extends peajeDao_1.default {
    crearPeaje(req, res) {
        let objPeaje = req.body;
        let tipoImagen = objPeaje.fotoPublicaPeaje.split('.')[1];
        let nombreFotoPrivada = 'IMG_' + (0, nanoid_1.nanoid)(15) + '.' + tipoImagen;
        objPeaje.fotoPrivadaPeaje = nombreFotoPrivada;
        let rutaAlmacenamiento = var_imagenes_1.default.rutaFotoSistema;
        administrarImagen_1.default.crearImagen(nombreFotoPrivada, objPeaje.base64Peaje, rutaAlmacenamiento);
        PeajeControlador.agregarPeaje(res, objPeaje);
    }
    listarPeajes(req, res) {
        PeajeControlador.obtenerPeaje(res);
    }
    actualizarPeajes(req, res) {
        let objPeaje;
        objPeaje = req.body;
        PeajeControlador.editarPeaje(res, objPeaje);
    }
    eliminarPeaje(req, res) {
        let codPeaje = Number(req.params.codPeaje);
        if (!isNaN(codPeaje)) {
            PeajeControlador.borrarPeaje(res, codPeaje);
        }
        else {
            res.status(400).json({ mensaje: "Codigo de peaje no valido" });
        }
    }
}
const peajeControlador = new PeajeControlador();
exports.default = peajeControlador;
