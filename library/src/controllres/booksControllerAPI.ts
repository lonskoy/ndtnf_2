
import { Request, Response } from 'express';

class BooksControllerApi {
  async bookDownload(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    console.log(id);
    // Здесь вы можете добавить логику для обработки загрузки книги
    res.status(200).send(`Загрузка книги с ID: ${id}`); // Пример отправки ответа
  }
}

export default BooksControllerApi;


// passport.authenticate("local", async (err, user, info) => {
//     if (err) {
//       // Если возникла ошибка в процессе аутентификации
//       console.error('Authentication error:', err);
//       return res.status(500).send("Ошибка аутентификации"); // Отправляем статус 500 при ошибке
//     }

//     if (!user) {
//       // Если пользователь не найден, редирект на /login
//       return res.redirect("/api/user/login");
//     }

//     // В случае успешной аутентификации, выполняем login
    
//       return res.render("profile", { user });

//   })(req, res);
