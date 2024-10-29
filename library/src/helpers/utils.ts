import bookSchema from "../models/books.model";

async function updateCounter(id: string): Promise<void> {
  try {
    await bookSchema.findByIdAndUpdate(
      id,
      { $inc: { favorite: 1 } },
      { new: true }
    );
  } catch (error) {
    console.error('Ошибка обновления просмотров:', error);
  }
}

async function readCounter(id: string): Promise<void> {
  // Заготовка функции readCounter, реализация может быть добавлена позже
}

export {
  updateCounter,
  readCounter,
};