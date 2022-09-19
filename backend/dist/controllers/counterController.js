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
exports.addCount = exports.getCount = void 0;
const http_status_codes_1 = require("http-status-codes");
let counter = 0;
const getCount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(http_status_codes_1.StatusCodes.ACCEPTED).json({
        currentCount: counter,
    });
});
exports.getCount = getCount;
const addCount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    counter++;
    res.status(http_status_codes_1.StatusCodes.CREATED).json({
        currentCount: counter,
    });
});
exports.addCount = addCount;
