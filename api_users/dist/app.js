"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appError_1 = require("./errors/appError");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, routes_1.appRoutes)(app);
app.use((error, request, response, _) => {
    if (error instanceof appError_1.AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message,
        });
    }
    console.error(error);
    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    });
});
app.listen(process.env.PORT || 3000);
