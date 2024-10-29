
interface Book {
    id: string;
    title: string;
    description: string;
    authors: string;
    favorite: number;
    fileCover: string;
    fileName: string;
    fileBook: string;
    pathTemp: string;
}

interface Email {
    value: string
}

interface User 
{
    id: number,
    username: string,
    password: string,
    displayName: string,
    emails: Email[]
}

interface Options {
   usernameField?: string,
   passwordField?: string,
}

abstract class BooksRepository {
    abstract createBook(book: any): Promise<any>;
    abstract getBook(id: string): Promise<any>;
    abstract getBooks(): Promise<any>;
    abstract updateBook(id: string, book: any): Promise<any>;
    abstract deleteBook(id: string): Promise<any>;
  }

  export default {Book, Email, User, Options, BooksRepository}