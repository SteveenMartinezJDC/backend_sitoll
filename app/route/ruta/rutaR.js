"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rutaControlador_1 = __importDefault(require("../controller/rutaControlador"));
class RutaR {
    constructor() {
        this.apiRutaR = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiRutaR.post("/add", rutaControlador_1.default.crearRuta);
        this.apiRutaR.get("/list", rutaControlador_1.default.listarRutas);
        this.apiRutaR.put("/update", rutaControlador_1.default.actualizarRutas);
        this.apiRutaR.delete("/delete/:codRuta", rutaControlador_1.default.eliminarRuta);
    }
}
const rutaR = new RutaR();
exports.default = rutaR.apiRutaR;
