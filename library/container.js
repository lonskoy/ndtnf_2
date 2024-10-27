import { BooksRepository } from ('./interfaces/interface.tsx')

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

