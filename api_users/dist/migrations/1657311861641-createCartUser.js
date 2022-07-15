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
exports.createCartUser1657311861641 = void 0;
class createCartUser1657311861641 {
    constructor() {
        this.name = 'createCartUser1657311861641';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "cart" ("id" uuid NOT NULL, "subtotal" double precision NOT NULL, CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "cartId" uuid`);
            yield queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_342497b574edb2309ec8c6b62aa" UNIQUE ("cartId")`);
            yield queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_342497b574edb2309ec8c6b62aa" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_342497b574edb2309ec8c6b62aa"`);
            yield queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_342497b574edb2309ec8c6b62aa"`);
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cartId"`);
            yield queryRunner.query(`DROP TABLE "cart"`);
        });
    }
}
exports.createCartUser1657311861641 = createCartUser1657311861641;
