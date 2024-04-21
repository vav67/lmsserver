require("dotenv").config(); //подключаем .env
import express, { NextFunction, Request, Response } from "express";
export const app = express();
import cors from "cors"
import cookieParser from "cookie-parser"
//--------вывод ошибок
import { ErrorMiddleware } from "./middleware/error";

import userRouter from "./routes/user.route";
 import courseRouter from "./routes/course.route";
 import orderRouter from "./routes/order.route";
 import notificationRouter from "./routes/notification.route";
 import analyticsRouter from "./routes/analytics.route";
  import layoutRouter from "./routes/layout.route";
  import { rateLimit } from 'express-rate-limit'  //ограничение против спама

// body parser
app.use(express.json({ limit: "50mb" }))
//cookie parser
  app.use(cookieParser())
// cors => cross origin resource sharing
 app.use(
     //cors({  origin: process.env.ORIGIN, })
     cors({
                                          // origin: ['http://localhost:3000'],
     origin: process.env.ORIGIN,
      credentials: true
    })
   )
  
 // api requests limit ограничение 15минут каждый IP максимум 100 
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
})



//router
app.use( "/api/v1",
            userRouter,
   courseRouter,
   orderRouter,
   notificationRouter, //уведомления
   analyticsRouter,  //аналитика
    layoutRouter
 );




   //testing api - это тест API
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      success: true,
      message: "API is working",
    });
  });
  
//бывает что не правильно набрали адрес пути, отобразим ошибку
  //unknown route
app.all("*", (req: Request, res: Response, next: NextFunction) => {
    const err = new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode = 404;
    next(err);
  });

  
  // middleware calls
app.use(limiter); // защита от спама
  app.use(ErrorMiddleware); //--------вывод ошибок вывод 