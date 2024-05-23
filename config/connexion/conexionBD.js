"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const departamento_1 = __importDefault(require("../../models/departamento"));
const usuario_1 = __importDefault(require("../../models/usuario"));
const acceso_1 = __importDefault(require("../../models/acceso"));
const departamentoRuta_1 = __importDefault(require("../../models/departamentoRuta"));
const ruta_1 = __importDefault(require("../../models/ruta"));
const puesto_1 = __importDefault(require("../../models/puesto"));
const peaje_1 = __importDefault(require("../../models/peaje"));
const turno_1 = __importDefault(require("../../models/turno"));
const turnoUsuarios_1 = __importDefault(require("../../models/turnoUsuarios"));
dotenv_1.default.config({ path: '.env' });
const baseDatos = String(process.env.DATABASE);
const usuario = String(process.env.USER_BD);
const clave = String(process.env.PASSWORD_USER);
const host = String(process.env.HOST);
const puerto = Number(process.env.PORT);
const poolConexion = new typeorm_1.DataSource({
    type: "postgres",
    host: host,
    port: puerto,
    username: usuario,
    password: clave,
    database: baseDatos,
    synchronize: true,
    logging: true,
    entities: [departamento_1.default, ruta_1.default, usuario_1.default, acceso_1.default, departamentoRuta_1.default, peaje_1.default, puesto_1.default, turno_1.default, turnoUsuarios_1.default],
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy()
});
poolConexion.initialize()
    .then((conn) => {
    console.log('Conexion establecida con la BD', baseDatos);
}).catch((miError) => {
    console.error(miError);
});
exports.default = poolConexion;
