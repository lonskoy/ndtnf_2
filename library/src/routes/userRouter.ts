import express, { Request, Response, Router } from "express";
import UserControllerAPI from "../controllres/userControllerAPI";
import bookSchema from "../models/books.model";
import passport from "passport";

const router: Router = express.Router();
const userController = new UserControllerAPI();

router.get("/login", userController.login.bind(userController));

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/api/user/login" }),
  async (req: Request, res: Response) => {
    try {
      const data = await bookSchema.find();
      console.log("req.user: ", req.user);
      res.render("index", { title: "Главная", books: data });
    } catch (error) {
      console.error("Error fetching books:", error);
      res.status(500).send("Ошибка сервера при загрузке книг.");
    }
  }
);

router.get("/profile", userController.profile.bind(userController));
router.get("/logout", userController.logOut.bind(userController));

export default router;
