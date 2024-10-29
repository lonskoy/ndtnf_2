import express, { Router } from 'express';
import BooksControllerAPI from '../controllres/booksControllerAPI'

const router: Router = express.Router();
const booksController = new BooksControllerAPI();

router.get('/books/:id/download', booksController.bookDownLoad.bind(booksController));

export default router;