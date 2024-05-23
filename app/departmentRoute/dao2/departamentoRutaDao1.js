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
const conexionBD_1 = __importDefault(require("../../../config/connexion/conexionBD"));
const departamentoRuta_1 = __importDefault(require("../../../models/departamentoRuta"));
class DepartamentoRutaDao1 {
    static crear(res, objtDepaRuta) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRutaRepository.insert(objtDepaRuta)
                .then((respuesta) => {
                res.status(200).json({ mensaje: "Departamento ruta creada", objeto: respuesta.raw });
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "Fallo al crear el departamento ruta" });
            });
        });
    }
    static listar(res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.departamentoRutaRepository.find()
                .then((respuesta) => {
                const arregloDepaDepartament = respuesta;
                res.status(200).json(arregloDepaDepartament);
            }).catch((miErrorsito) => {
                res.status(400).json({ mensaje: "Fallo al consultar rutas departamentos" });
            });
        });
    }
}
DepartamentoRutaDao1.departamentoRutaRepository = conexionBD_1.default.getRepository(departamentoRuta_1.default);
exports.default = DepartamentoRutaDao1;
