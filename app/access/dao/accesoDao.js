"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const conexionBD_1 = __importDefault(require("../../../config/connexion/conexionBD"));
const acceso_1 = __importDefault(require("../../../models/acceso"));
const acceso_sql_1 = require("../repository/acceso_sql");
const generarToken_1 = __importDefault(require("../../shared/controller/generarToken"));
class AccesoDao {
    static sesion(res, objtAcceso) {
        return __awaiter(this, void 0, void 0, function* () {
            let accesoRepository = conexionBD_1.default.getRepository(acceso_1.default);
            let existeAcceso = yield accesoRepository.findBy({ nombresAcceso: objtAcceso.nombresAcceso });
            if (existeAcceso.length !== 0) {
                let claveAcceso = existeAcceso[0].claveAcceso;
                if (bcryptjs_1.default.compareSync(objtAcceso.claveAcceso, claveAcceso)) {
                    accesoRepository.query(acceso_sql_1.SQL_ACCESO.DATOS_ACCESO, [existeAcceso[0].codUsuario])
                        .then((respuesta) => {
                        let token = generarToken_1.default.procesarRespuesta(respuesta[0]);
                        res.status(200).json({ tokenApp: token });
                    })
                        .catch((miErrorsito) => {
                        res.status(400).json({ mensaje: "Fallo al iniciar sesion" });
                    });
                }
                else {
                    res.status(400).json({ mensaje: "Contraseña no valida" });
                }
            }
            else {
                res.status(400).json({ mensaje: "Nombre acceso no valido" });
            }
        });
    }
}
exports.default = AccesoDao;
