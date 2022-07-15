"use strict";
// src/middlewares/validadeUserCreate.middleware.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserCreate = exports.userCreateSchema = void 0;
// importação da biblioteca yup
const yup = __importStar(require("yup"));
// note como usamos a interface para especificar o tipo do schema
// em SchemaOf<IUserCreate>
exports.userCreateSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
});
// a função recebe o schema como parâmetros
// para fazer a validação
const validateUserCreate = (schema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // acessa os dados do corpo da requisição
        const data = req.body;
        // bloco try/catch para capturar erros específicos do yup
        try {
            // chamando o método validate
            const validatedData = yield schema.validate(data, {
                abortEarly: false,
                // exclui as chaves que não estão no schema
                stripUnknown: true,
            });
            // adicionamos uma nova chave a requisição, com os dados validados do usuario
            req.newUser = validatedData;
            next();
        }
        catch (err) {
            // caso algum erro do yup aconteca,
            // ele vai ser tratado e enviado ao usuario
            return res.status(400).json({
                error: (_a = err.errors) === null || _a === void 0 ? void 0 : _a.join(", "),
            });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.validateUserCreate = validateUserCreate;
