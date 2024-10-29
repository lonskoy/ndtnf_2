import { Request, Response } from 'express';

class UserController {
  async login(req: Request, res: Response): Promise<void> {
    try {
      res.render("login");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error rendering login page");
    }
  }

  async profile(req: Request, res: Response): Promise<void> {
    try {
      res.render("profile", { user: req.user });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error rendering profile page");
    }
  }

  async logOut(req: Request, res: Response): Promise<void> {
    try {
      req.logout(); // Пример, если используете passport.js для выхода
      res.render("login", { user: null }); // Обязательно обнулите пользователя при выходе
    } catch (error) {
      console.error(error);
      res.status(500).send("Error rendering login page");
    }
  }
}

export default UserController;