import BooksRepository from "./interfaces/interface"

// Вообще не понимаю, что тут нужно сделать((

class Container {
    constructor() {

    }

    get() {

    }
}

const container = new Container;
container.bind(BooksRepository).toSelf();

export default container

