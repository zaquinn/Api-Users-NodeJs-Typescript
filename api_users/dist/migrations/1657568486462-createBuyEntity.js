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
exports.createBuyEntity1657568486462 = void 0;
class createBuyEntity1657568486462 {
    constructor() {
        this.name = 'createBuyEntity1657568486462';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "buy" ("id" uuid NOT NULL, "total" double precision NOT NULL, "userId" uuid, CONSTRAINT "PK_634c4687b54f6a44ac0c142adf7" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "buy_products_product" ("buyId" uuid NOT NULL, "productId" uuid NOT NULL, CONSTRAINT "PK_436080770c60352a2023667f456" PRIMARY KEY ("buyId", "productId"))`);
            yield queryRunner.query(`CREATE INDEX "IDX_65c27917774c9df0d3d2fb929d" ON "buy_products_product" ("buyId") `);
            yield queryRunner.query(`CREATE INDEX "IDX_210c90379be266d3c64d71f603" ON "buy_products_product" ("productId") `);
            yield queryRunner.query(`ALTER TABLE "buy" ADD CONSTRAINT "FK_73b6d9b1037a714d3314e038819" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "buy_products_product" ADD CONSTRAINT "FK_65c27917774c9df0d3d2fb929d9" FOREIGN KEY ("buyId") REFERENCES "buy"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
            yield queryRunner.query(`ALTER TABLE "buy_products_product" ADD CONSTRAINT "FK_210c90379be266d3c64d71f6038" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "buy_products_product" DROP CONSTRAINT "FK_210c90379be266d3c64d71f6038"`);
            yield queryRunner.query(`ALTER TABLE "buy_products_product" DROP CONSTRAINT "FK_65c27917774c9df0d3d2fb929d9"`);
            yield queryRunner.query(`ALTER TABLE "buy" DROP CONSTRAINT "FK_73b6d9b1037a714d3314e038819"`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_210c90379be266d3c64d71f603"`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_65c27917774c9df0d3d2fb929d"`);
            yield queryRunner.query(`DROP TABLE "buy_products_product"`);
            yield queryRunner.query(`DROP TABLE "buy"`);
        });
    }
}
exports.createBuyEntity1657568486462 = createBuyEntity1657568486462;
