"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
const MySQLBaseRepository_1 = __importDefault(require("../repository/MySQLBaseRepository"));
class BookRepository extends MySQLBaseRepository_1.default {
    constructor() {
        super('books', 'id');
    }
}
exports.BookRepository = BookRepository;
