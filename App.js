import express from 'express';
import "dotenv/config";
import session from "express-session";
import mongoose from "mongoose";
import Lab5 from './Lab5.js';
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import UserRoutes from './Kanbas/Users/routes.js';
import cors from 'cors';
import Hello from "./Hello.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';
mongoose.connect(CONNECTION_STRING);
const app = express();
const sessionOptions = {
    secret: "secret words",
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
        sameSite: "none",
        secure: true
    },
};
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL.split(", "),
}));
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);