"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const peajeControlador_1 = __importDefault(require("../controller/peajeControlador"));
class PeajeRuta {
    constructor() {
        this.apiPeajeR = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiPeajeR.post("/add", peajeControlador_1.default.crearPeaje);
        this.apiPeajeR.get("/list", peajeControlador_1.default.listarPeajes);
        this.apiPeajeR.put("/update", peajeControlador_1.default.actualizarPeajes);
        this.apiPeajeR.delete("/delete/:codPeaje", peajeControlador_1.default.eliminarPeaje);
    }
}
const peajeRuta = new PeajeRuta();
exports.default = peajeRuta.apiPeajeR;
