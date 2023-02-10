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
const BookRepository_1 = require("./models/BookRepository");
const BookSequelizeRepository_1 = __importDefault(require("./models/BookSequelizeRepository"));
const book = new BookRepository_1.BookRepository();
const bookSequelize = new BookSequelizeRepository_1.default();
(() => __awaiter(void 0, void 0, void 0, function* () {
    // await book.create({ 
    //   title: 'Typescript for professionais',
    //   author: 'Stack Overflow Community'
    // });
    // console.table(await book.find());
    // await book.update(10, { title: 'Typescript for professionals' });
    // console.table(await book.find({ title: 'Typescript for professionals' }));
    // const result = await bookSequelize.find({ author: "Jonathan Stark" });
    const result = yield bookSequelize.findOne({});
    console.log(result);
    process.exit();
}))();
