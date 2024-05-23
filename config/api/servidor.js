"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const departamentoRuta_1 = __importDefault(require("../../app/departament/route/departamentoRuta"));
const registroRuta_1 = __importDefault(require("../../app/register/ruta/registroRuta"));
const seguridad_1 = __importDefault(require("../../middleware/seguridad"));
const accesoRuta_1 = __importDefault(require("../../app/access/ruta/accesoRuta"));
const departamentoRutaR_1 = __importDefault(require("../../app/departmentRoute/route/departamentoRutaR"));
const rutaR_1 = __importDefault(require("../../app/route/ruta/rutaR"));
const peajeRuta_1 = __importDefault(require("../../app/peaje/ruta/peajeRuta"));
const puestosRuta_1 = __importDefault(require("../../app/puestos/ruta/puestosRuta"));
const turnoUsuarioRuta_1 = __importDefault(require("../../app/turnoUsuarios/ruta/turnoUsuarioRuta"));
const turnoRuta_1 = __importDefault(require("../../app/turno/ruta/turnoRuta"));
class Servidor {
    constructor() {
        this.app = (0, express_1.default)();
        this.cargarConfiguracion();
        this.cargarRutas();
    }
    cargarConfiguracion() {
        this.app.set("PORT", 3300);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    cargarRutas() {
        //RUTAS PUBLICAS
        this.app.use("/api/public/register", registroRuta_1.default);
        this.app.use("/api/public/access", accesoRuta_1.default);
        //RUTA PRIVADAS
        this.app.use("/api/private/departament/", seguridad_1.default.verificarToken, departamentoRuta_1.default);
        this.app.use("/api/private/routes/", seguridad_1.default.verificarToken, rutaR_1.default);
        this.app.use("/api/private/departamentR/", seguridad_1.default.verificarToken, departamentoRutaR_1.default);
        this.app.use("/api/private/peajes/", seguridad_1.default.verificarToken, peajeRuta_1.default);
        this.app.use("/api/private/puestos/", seguridad_1.default.verificarToken, puestosRuta_1.default);
        this.app.use("/api/private/turno/", seguridad_1.default.verificarToken, turnoRuta_1.default);
        this.app.use("/api/private/turnosU/", seguridad_1.default.verificarToken, turnoUsuarioRuta_1.default);
    }
    iniciarServidor() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("Servidor funcionando en el puerto : ", this.app.get("PORT"));
        });
    }
}
exports.default = Servidor;
