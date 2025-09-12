import { Controller, Get, Put, Delete, Param, Body, NotFoundException, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(createTodoDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Todo> {
    const todo = await this.todoService.findOne(id);
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTodoDto: CreateTodoDto,
  ): Promise<Todo> {
    const updatedTodo = await this.todoService.update(id, updateTodoDto);
    if (!updatedTodo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return updatedTodo;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Todo> {
    const deletedTodo = await this.todoService.remove(id);
    if (!deletedTodo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return deletedTodo;
  }
}
