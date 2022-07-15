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
Object.defineProperty(exports, "__esModule", { value: true });
const buy_entity_1 = require("../../entities/buy.entity");
const user_entity_1 = require("../../entities/user.entity");
const cart_entity_1 = require("../../entities/cart.entity");
const data_source_1 = require("../../data-source");
const appError_1 = require("../../errors/appError");
const buyCreateService = (userEmail) => __awaiter(void 0, void 0, void 0, function* () {
    const cartRepository = data_source_1.AppDataSource.getRepository(cart_entity_1.Cart);
    const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
    const buyRepository = data_source_1.AppDataSource.getRepository(buy_entity_1.Buy);
    const user = yield userRepository.findOne({
        where: {
            email: userEmail,
        },
    });
    const cart = yield cartRepository.findOne({
        where: {
            id: user === null || user === void 0 ? void 0 : user.cart.id,
        },
    });
    if (cart && user) {
        if (cart.products.length === 0) {
            throw new appError_1.AppError(400, "Cart is empty");
        }
        const buy = new buy_entity_1.Buy();
        buy.user = user;
        buy.products = cart.products;
        buy.total = cart.subtotal;
        buyRepository.create(buy);
        yield buyRepository.save(buy);
        cart.products = [];
        cart.subtotal = 0;
        yield cartRepository.save(cart);
        const newBuy = buyRepository.find({
            where: {
                id: buy.id,
            },
        });
        return newBuy;
    }
});
exports.default = buyCreateService;
