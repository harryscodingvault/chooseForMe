"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const port = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const counterRoutes_1 = __importDefault(require("./routes/counterRoutes"));
app.use("/api/counter", counterRoutes_1.default);
app.listen(port, () => {
    console.log(`Kirov Reporting at ${port}`);
});
