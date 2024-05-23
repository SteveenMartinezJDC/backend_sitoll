"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accesoControlador_1 = __importDefault(require("../controller/accesoControlador"));
class AccesoRuta {
    constructor() {
        this.rutaRutaAcceso = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.rutaRutaAcceso.post("/signin", accesoControlador_1.default.iniciarSesion);
    }
}
const accesoRuta = new AccesoRuta();
exports.default = accesoRuta.rutaRutaAcceso;
