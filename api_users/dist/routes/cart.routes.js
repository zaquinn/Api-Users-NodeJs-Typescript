"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRoutes = void 0;
const express_1 = require("express");
const cartAddProd_controller_1 = __importDefault(require("../controllers/cart/cartAddProd.controller"));
const cartDelProd_controller_1 = __importDefault(require("../controllers/cart/cartDelProd.controller"));
const authUser_middleware_1 = require("../middlewares/authUser.middleware");
const routes = (0, express_1.Router)();
const cartRoutes = () => {
    routes.post("/", authUser_middleware_1.authUser, cartAddProd_controller_1.default);
    routes.delete("/:product_id", authUser_middleware_1.authUser, cartDelProd_controller_1.default);
    return routes;
};
exports.cartRoutes = cartRoutes;
