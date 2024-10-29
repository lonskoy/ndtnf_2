import dotenv from "dotenv";
import app from "../src/app";
import socketIO, { Server as SocketIOServer, Socket } from "socket.io";
import mongoose from "mongoose";

dotenv.config();

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await mongoose.connect(process.env.BDCONNECT as string);
    console.log("Подключение к БД прошло успешно!");

    const server = app.listen(port, () => {
      console.log(`Server has been started on ${port} port.`);
    });
    
    const io: SocketIOServer = new socketIO.Server(server);

    //                                       ----------------->Настройка Socket

    io.on("connection", (socket: Socket) => {
      const { id } = socket;
      console.log(`Socket connected: ${id}`);

      const { roomName } = socket.handshake.query as { roomName: string };
      console.log(`Socket roomName: ${roomName}`);
      socket.join(roomName);

      socket.on("sendMessage", (data: any) => {
        const { roomName, message } = data;
        io.to(roomName).emit("message", message);
      });

      socket.on("disconnect", () => {
        console.log(`Socket disconnected: ${id}`);
      });
    });

    //                                       <---------------- Настройка Socket

  } catch (error: any) {
    console.log(`Ошибка подключения к БД: ${error.message || error}`);
  }
};

start();
