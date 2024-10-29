import express, { Request, Response, NextFunction } from 'express';
import BooksController from '../controllres/booksController';
import fileUploadMiddleware from '../middleware/file';
import pathEdit from '../middleware/pathEdit';
import container from '../container'
import booksRepository from '../interfaces/interface'

const router = express.Router();
const booksController = new BooksController();

router.get('/', booksController.getBooks.bind(booksController)); // роут для главной страницы
router.get('/books/view/:id', booksController.getBook.bind(booksController)); // роут для просмотра книги по id
router.get('/books/create', booksController.createBook.bind(booksController)); // роут для получения страницы для создания книги
router.post(
  '/books/create',
  fileUploadMiddleware.single('fileBook'),
  pathEdit,
  booksController.createBookPost.bind(booksController)
); // роут для отправки запроса на создание книги
router.get('/books/update/:id', booksController.updateBookGet.bind(booksController)); // роут для получения страницы для редактирования книги
router.post(
  '/books/update/:id',
  fileUploadMiddleware.single('fileBook'),
  pathEdit,
  booksController.updateBookPost.bind(booksController)
); // роут для отправки запроса на редактирование книги
router.post('/books/delete/:id', booksController.deleteBook.bind(booksController)); // роут для удаления книги

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const repo = container.get(booksRepository);
    const book = await repo.getBook(req.params.id);
    res.json(book);
  } catch (error) {
    next(error);
  }
});

export default router;