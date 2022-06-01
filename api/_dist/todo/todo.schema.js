"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoSchema = void 0;
const mongoose = require("mongoose");
exports.TodoSchema = new mongoose.Schema({
    name: String,
    description: String
});
//# sourceMappingURL=todo.schema.js.map