"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const puestosControlador_1 = __importDefault(require("../controller/puestosControlador"));
class PuestosRuta {
    constructor() {
        this.apiPuestosR = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiPuestosR.post("/add", puestosControlador_1.default.crearPuesto);
        this.apiPuestosR.get("/list", puestosControlador_1.default.listarPuesto);
        this.apiPuestosR.put("/update", puestosControlador_1.default.actualizarPuesto);
        this.apiPuestosR.delete("/delete/:codPuesto", puestosControlador_1.default.eliminarPuesto);
    }
}
const puestosRuta = new PuestosRuta();
exports.default = puestosRuta.apiPuestosR;
