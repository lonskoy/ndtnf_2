import mongoose, { Document, Schema } from 'mongoose';

interface Book extends Document {
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

const BookSchema: Schema = new Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    favorite: {
        type: Number,
        required: true
    },
    fileCover: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    fileBook: {
        type: String,
        required: true
    },
    pathTemp: {
        type: String,
        required: true
    }
});

export default mongoose.model<Book>('Book', BookSchema);
