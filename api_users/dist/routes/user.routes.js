"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const authUser_middleware_1 = require("../middlewares/authUser.middleware");
const userCreate_controller_1 = __importDefault(require("../controllers/users/userCreate.controller"));
const userList_controller_1 = __importDefault(require("../controllers/users/userList.controller"));
const userListOne_controller_1 = __importDefault(require("../controllers/users/userListOne.controller"));
const userLogin_controller_1 = __importDefault(require("../controllers/users/userLogin.controller"));
const userDeleteSelf_controller_1 = __importDefault(require("../controllers/users/userDeleteSelf.controller"));
const userUpdatePassword_controller_1 = __importDefault(require("../controllers/users/userUpdatePassword.controller"));
const validateUserCreate_middleware_1 = require("../middlewares/validateUserCreate.middleware");
const validateUserCreate_middleware_2 = require("../middlewares/validateUserCreate.middleware");
const routes = (0, express_1.Router)();
const userRoutes = () => {
    routes.post("/", (0, validateUserCreate_middleware_2.validateUserCreate)(validateUserCreate_middleware_1.userCreateSchema), userCreate_controller_1.default);
    routes.post("/login", userLogin_controller_1.default);
    routes.get("/", userList_controller_1.default);
    routes.get("/me", authUser_middleware_1.authUser, userListOne_controller_1.default);
    routes.patch("/me/updatepassword", authUser_middleware_1.authUser, userUpdatePassword_controller_1.default);
    routes.delete("/me", authUser_middleware_1.authUser, userDeleteSelf_controller_1.default);
    return routes;
};
exports.userRoutes = userRoutes;
