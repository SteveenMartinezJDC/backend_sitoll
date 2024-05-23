"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const departamentoRutaDao1_1 = __importDefault(require("../dao2/departamentoRutaDao1"));
class DepartamentoRutaControlador extends departamentoRutaDao1_1.default {
    crearDepartamentoRuta(req, res) {
        let objtDepaRuta;
        objtDepaRuta = req.body;
        DepartamentoRutaControlador.crear(res, objtDepaRuta);
    }
    consultarDeparamentoRuta(req, res) {
        DepartamentoRutaControlador.listar(res);
    }
}
const departamentoRutaControlador = new DepartamentoRutaControlador();
exports.default = departamentoRutaControlador;
