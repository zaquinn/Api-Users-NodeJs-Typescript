"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.AppError = void 0;
class AppError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.AppError = AppError;
const handleError = (error, response) => {
    const { statusCode, message } = error;
    return response.status(statusCode).json({
        status: "error",
        statusCode,
        message,
    });
};
exports.handleError = handleError;
