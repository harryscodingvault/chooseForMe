"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const counterController_1 = require("../controllers/counterController");
router.route("/").get(counterController_1.getCount).post(counterController_1.addCount);
exports.default = router;