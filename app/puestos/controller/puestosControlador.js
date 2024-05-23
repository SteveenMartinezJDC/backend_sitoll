"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puestosDao_1 = __importDefault(require("../dao/puestosDao"));
class PuestosControlador extends puestosDao_1.default {
    crearPuesto(req, res) {
        let objPuesto;
        objPuesto = req.body;
        PuestosControlador.agregarPuestos(res, objPuesto);
    }
    listarPuesto(req, res) {
        PuestosControlador.obtenerPuestos(res);
    }
    actualizarPuesto(req, res) {
        let objPuesto;
        objPuesto = req.body;
        PuestosControlador.editarPuestos(res, objPuesto);
    }
    eliminarPuesto(req, res) {
        let codPuesto = Number(req.params.codPuesto);
        if (!isNaN(codPuesto)) {
            PuestosControlador.borrarPuesto(res, codPuesto);
        }
        else {
            res.status(400).json({ mensaje: "Codigo del puesto no valido" });
        }
    }
}
const puestosControlador = new PuestosControlador();
exports.default = puestosControlador;
