
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
    book: Object;
    id: string;

    constructor(book: Object, id: string) {
        book = this.book;
        id = this.id;
    }

    createBook(book: Object) {

    }

    getBook(id: string) {

    }

    getBooks() {

    }

    updateBook(id: string) {

    }

    deleteBook(id: string) {

    }
}