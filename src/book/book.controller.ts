import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get()
    findAll() {
        return this.bookService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.bookService.findOne(+id);
    }

    @Post()
    create(@Body() createBookDto: CreateBookDto) {
        return this.bookService.create(createBookDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
        console.log(id)
        return this.bookService.update(+id, updateBookDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.bookService.remove(+id);
    }
}
