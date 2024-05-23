"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turnoUsuarioControlador_1 = __importDefault(require("../controller/turnoUsuarioControlador"));
class TurnoUsuarioRuta {
    constructor() {
        this.apiTurnoUsuarioR = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiTurnoUsuarioR.post("/add", turnoUsuarioControlador_1.default.crearTurnoUsuario);
        this.apiTurnoUsuarioR.get("/list", turnoUsuarioControlador_1.default.listarTurnoUsuario);
        this.apiTurnoUsuarioR.put("/update", turnoUsuarioControlador_1.default.actualizarTurnoUsuario);
    }
}
const turnoUsuarioRuta = new TurnoUsuarioRuta();
exports.default = turnoUsuarioRuta.apiTurnoUsuarioR;
