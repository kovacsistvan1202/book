import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
    private books: Book[] = [];

    create(createBookDto: CreateBookDto) {
        console.log(createBookDto)
        this.books.push({...createBookDto, id: this.books.length + 1});

        return createBookDto;
    }

    findAll() {
        return this.books;
    }

    findOne(id: number) {
        const book = this.books.find(book => book.id === id);

        if (!book) {
            throw new Error(`Book with ID ${id} not found`);
        }

        return book;
    }


    update(id: number, updateBookDto: UpdateBookDto) {
        const bookIndex = this.books.findIndex(book => book.id === id);

        if (bookIndex === -1) {
            throw new Error(`Book with ID ${id} not found`);
        }

        this.books[bookIndex] = {...this.books[bookIndex], ...updateBookDto};

        return this.books[bookIndex];
    }

    remove(id: number) {
        const bookIndex = this.books.findIndex(book => book.id === id);

        if (bookIndex === -1) {
            throw new Error(`Book with ID ${id} not found`);
        }

        const removedBook = this.books.splice(bookIndex, 1);

        return removedBook[0];
    }
}
