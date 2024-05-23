"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const usuario_1 = __importDefault(require("./usuario"));
const puesto_1 = __importDefault(require("./puesto"));
const turno_1 = __importDefault(require("./turno"));
let TurnoUsuario = class TurnoUsuario {
    constructor(cod, codP, codT) {
        this.codUsuario = cod;
        this.codPuesto = codP;
        this.codTurno = codT;
    }
};
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "cod_usuario" }),
    __metadata("design:type", Number)
], TurnoUsuario.prototype, "codUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "cod_puesto" }),
    __metadata("design:type", Number)
], TurnoUsuario.prototype, "codPuesto", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "cod_turno" }),
    __metadata("design:type", Number)
], TurnoUsuario.prototype, "codTurno", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => usuario_1.default, (usuario) => usuario.turnoUsuario, { onDelete: "RESTRICT", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "cod_usuario", referencedColumnName: "codUsuario" }]),
    __metadata("design:type", usuario_1.default)
], TurnoUsuario.prototype, "codUsuarioP", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => puesto_1.default, (puesto) => puesto.turnoUsuario, { onDelete: "RESTRICT", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "cod_puesto", referencedColumnName: "codPuesto" }]),
    __metadata("design:type", puesto_1.default)
], TurnoUsuario.prototype, "codPuestoP", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => turno_1.default, (turno) => turno.turnoUsuario, { onDelete: "RESTRICT", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "cod_turno", referencedColumnName: "codTurno" }]),
    __metadata("design:type", puesto_1.default)
], TurnoUsuario.prototype, "codTurnoP", void 0);
TurnoUsuario = __decorate([
    (0, typeorm_1.Entity)("turnos_usuarios", { schema: "public" }),
    __metadata("design:paramtypes", [Number, Number, Number])
], TurnoUsuario);
exports.default = TurnoUsuario;
