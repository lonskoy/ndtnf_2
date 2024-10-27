
export interface Book {
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

export abstract class BooksRepository {
    abstract createBook(book: any): Promise<any>;
    abstract getBook(id: string): Promise<any>;
    abstract getBooks(): Promise<any>;
    abstract updateBook(id: string, book: any): Promise<any>;
    abstract deleteBook(id: string): Promise<any>;
  }