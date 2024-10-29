import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import session from 'express-session';
import dotenv from 'dotenv';

import users from './db/users';
import booksRouter from './routes/booksRouter';
import booksRouterAPI from './routes/booksRouterAPI';
import userRouter from './routes/userRouter';

import { User, Options } from "./interfaces/interface"

// Инициализация dotenv для использования переменных окружения
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('dev'));

// Настройка сессий
app.use(
  session({
    secret: process.env.SECRET as string,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Настройка маршрутов
app.use('/api/user', userRouter);
app.use('/api', booksRouterAPI);
app.use('/', booksRouter);

// Настройка passport.js
const verify = (
  username: string,
  password: string,
  done: (error: any, user?: User | false) => void
) => {
  users.findByUsername(username, (err: Error | null, user: User | null) => {
    if (err) return done(err);
    if (!user) return done(null, false);
    if (!users.verifyPassword(user, password)) return done(null, false);
    return done(null, user);
  });
};

const options: Options = {
  usernameField: 'username',
  passwordField: 'password',
};

passport.use(new LocalStrategy(options, verify));

passport.serializeUser((user: User, cb: (err: any, id?: number) => void) => {
  cb(null, user.id);
});

passport.deserializeUser((id: number, cb: (err: any, user?: User | null) => void) => {
  users.findById(id, (err: Error | null, user: User | null) => {
    if (err) return cb(err);
    cb(null, user);
  });
});

export default app;