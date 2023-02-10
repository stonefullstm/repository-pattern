"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookStatic = exports.Book = void 0;
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Book extends sequelize_1.Model {
}
exports.Book = Book;
Book.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: (0, sequelize_1.STRING)(255),
        allowNull: false,
    },
    author: {
        allowNull: false,
        type: (0, sequelize_1.STRING)(255),
    }
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'books',
    timestamps: false,
});
const BookStatic = Book;
exports.BookStatic = BookStatic;
