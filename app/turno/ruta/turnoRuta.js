"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turnoControlador_1 = __importDefault(require("../controller/turnoControlador"));
class TurnoRuta {
    constructor() {
        this.apiTurnoR = (0, express_1.Router)();
        this.cargarRutas();
    }
    cargarRutas() {
        this.apiTurnoR.post("/add", turnoControlador_1.default.crearTurno);
        this.apiTurnoR.get("/list", turnoControlador_1.default.listarTurno);
        this.apiTurnoR.put("/update", turnoControlador_1.default.actualizarTurno);
        this.apiTurnoR.delete("/delete/:codTurno", turnoControlador_1.default.eliminarTurno);
    }
}
const turnoRuta = new TurnoRuta();
exports.default = turnoRuta.apiTurnoR;
