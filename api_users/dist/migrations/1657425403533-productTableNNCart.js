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
exports.productTableNNCart1657425403533 = void 0;
class productTableNNCart1657425403533 {
    constructor() {
        this.name = 'productTableNNCart1657425403533';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" double precision NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "cart_products_product" ("cartId" uuid NOT NULL, "productId" uuid NOT NULL, CONSTRAINT "PK_785ab9c1dbede19ef42bf12280b" PRIMARY KEY ("cartId", "productId"))`);
            yield queryRunner.query(`CREATE INDEX "IDX_e6ce39be5d354954a88ded1eba" ON "cart_products_product" ("cartId") `);
            yield queryRunner.query(`CREATE INDEX "IDX_0fc996e42b6330c97f8cffbddf" ON "cart_products_product" ("productId") `);
            yield queryRunner.query(`ALTER TABLE "cart_products_product" ADD CONSTRAINT "FK_e6ce39be5d354954a88ded1ebac" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
            yield queryRunner.query(`ALTER TABLE "cart_products_product" ADD CONSTRAINT "FK_0fc996e42b6330c97f8cffbddfa" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "cart_products_product" DROP CONSTRAINT "FK_0fc996e42b6330c97f8cffbddfa"`);
            yield queryRunner.query(`ALTER TABLE "cart_products_product" DROP CONSTRAINT "FK_e6ce39be5d354954a88ded1ebac"`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_0fc996e42b6330c97f8cffbddf"`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_e6ce39be5d354954a88ded1eba"`);
            yield queryRunner.query(`DROP TABLE "cart_products_product"`);
            yield queryRunner.query(`DROP TABLE "product"`);
        });
    }
}
exports.productTableNNCart1657425403533 = productTableNNCart1657425403533;
