"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authUser = (request, response, next) => {
    try {
        const token = request.headers.authorization;
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            request.userEmail = decoded.email;
            next();
        });
    }
    catch (error) {
        return response.status(401).json({ message: "Invalid Token" });
    }
};
exports.authUser = authUser;
