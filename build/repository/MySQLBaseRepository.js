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
require("dotenv/config");
const promise_1 = __importDefault(require("mysql2/promise"));
const BaseRepository_1 = __importDefault(require("./BaseRepository"));
const snakeize = require('snakeize');
const camelize = require('camelize');
class MySQLBaseRepository extends BaseRepository_1.default {
    constructor(_tableName, _primaryKey) {
        super();
        this._tableName = _tableName;
        this._primaryKey = _primaryKey;
    }
    ;
    connect() {
        return promise_1.default.createPool({
            host: process.env.MYSQL_HOST || 'localhost',
            port: Number(process.env.MYSQL_PORT) || 3306,
            user: process.env.MYSQL_USER || 'root',
            password: process.env.MYSQL_PASSWORD,
            database: process.env.DATABASE_NAME || 'library',
        });
    }
    ;
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield this.connect().execute(`SELECT * FROM ${this._tableName} WHERE ${this._primaryKey} = ?`, [id]);
            const [row] = rows;
            return camelize(row);
        });
    }
    ;
    find(item) {
        return __awaiter(this, void 0, void 0, function* () {
            let rows;
            if (item && Object.keys(snakeize(item)).length > 0) {
                const columns = `${Object.keys(snakeize(item)).join('= ? AND ')}= ?`;
                [rows] = yield this.connect()
                    .execute(`SELECT * FROM ${this._tableName} WHERE ${columns}`, [...Object.values(item)]);
            }
            else {
                [rows] = yield this.connect().execute(`SELECT * FROM ${this._tableName}`);
            }
            return camelize(rows);
        });
    }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            const columns = Object.keys(snakeize(item)).join(', ');
            const placeholders = Object.keys(item)
                .map((_key) => '?')
                .join(', ');
            const [result] = yield this.connect().execute(`INSERT INTO ${this._tableName} (${columns}) VALUE (${placeholders})`, [...Object.values(item)]);
            const { insertId } = result;
            return insertId;
        });
    }
    update(id, item) {
        return __awaiter(this, void 0, void 0, function* () {
            const columns = `${Object.keys(snakeize(item)).join('= ?, ')}= ?`;
            const [result] = yield this.connect().execute(`UPDATE ${this._tableName} SET ${columns} WHERE ${this._primaryKey} = ${id}`, [...Object.values(item)]);
            const { affectedRows } = result;
            return (affectedRows === 1);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this.connect().execute(`DELETE FROM ${this._tableName} WHERE ${this._primaryKey} = ${id}`);
            const { affectedRows } = result;
            return (affectedRows === 1);
        });
    }
}
exports.default = MySQLBaseRepository;
