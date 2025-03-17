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
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("./db");
const secretPass = "RDS123";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.listen(3000, () => console.log("Port is open on 3000"));
app.post("/api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const getUser = yield db_1.UserModel.findOne({ username: username, password: password });
    if (getUser) {
        const token = jsonwebtoken_1.default.sign({ id: getUser._id }, secretPass);
        res.json({
            message: token,
        });
    }
    else {
        res.json({
            message: "Invalid credential",
        });
    }
}));
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userName = req.body.username;
    const Password = req.body.password;
    yield db_1.UserModel.create({
        username: userName,
        password: Password,
    });
    res.json({
        message: "All is well user is Signed up"
    });
}));
app.get("/api/v1/content", (req, res) => {
});
app.delete("/api/v1/content", (req, res) => {
});
app.post("/api/v1/brain/share", (req, res) => {
});
app.get("/api/v1/brain/:sharedLink", (req, res) => {
});
