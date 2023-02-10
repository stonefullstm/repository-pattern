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
const books_model_1 = require("../database/models/books.model");
const SequelizeBaseRepository_1 = __importDefault(require("../repository/SequelizeBaseRepository"));
class BookSequelizeRepository extends SequelizeBaseRepository_1.default {
    find(item) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield books_model_1.Book.findAll({
                where: item,
            });
            const result = response.map((item) => item.dataValues);
            return result;
        });
    }
    findOne(item) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield books_model_1.Book.findOne({ where: item });
            return response === null || response === void 0 ? void 0 : response.dataValues;
        });
    }
    create(item) {
        throw new Error("Method not implemented.");
    }
    update(id, item) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
exports.default = BookSequelizeRepository;
