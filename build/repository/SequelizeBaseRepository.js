"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseRepository {
    find(item) {
        throw new Error("Method not implemented.");
    }
    findOne(id) {
        throw new Error("Method not implemented.");
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
exports.default = BaseRepository;
