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
const BaseRepository_1 = __importDefault(require("./BaseRepository"));
class SequelizeBaseRepository extends BaseRepository_1.default {
    constructor(_model, _id) {
        super();
        this._model = _model;
        this._id = _id;
    }
    ;
    find(item) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this._model.findAll({
                where: item,
            });
            const result = response.map((item) => item.dataValues);
            return result;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { dataValues } = yield this._model.findByPk(id);
            return dataValues;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = this._model.getAttributes();
            const keys = Object.keys(model);
            const index = keys.findIndex((key) => key === this._id);
            const objKey = {};
            objKey[keys[index]] = id;
            // const deletedQty = await this._model.destroy({
            //   where: objKey
            // })
            return true;
        });
    }
}
exports.default = SequelizeBaseRepository;
