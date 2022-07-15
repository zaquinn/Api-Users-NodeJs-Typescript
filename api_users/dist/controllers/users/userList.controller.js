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
const appError_1 = require("../../errors/appError");
const userList_service_1 = __importDefault(require("../../services/user/userList.service"));
const userListController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userList_service_1.default)();
        return response.send(users);
    }
    catch (error) {
        if (error instanceof appError_1.AppError) {
            (0, appError_1.handleError)(error, response);
        }
    }
});
exports.default = userListController;
