import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './todo.interface';  // we'll create this interface
import { CreateTodoDto } from './dto/create-todo.dto';  // we'll create this DTO

@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private todoModel: Model<Todo>) {}

 
  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  }

  
  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  
  async findOne(id: string): Promise<Todo | null> {
    return this.todoModel.findById(id).exec();
  }

 //i
    async update(id: string, updateTodoDto: Partial<CreateTodoDto>): Promise<Todo | null> {
    return this.todoModel.findByIdAndUpdate(id, updateTodoDto, { new: true }).exec();
  }



  async remove(id: string): Promise<Todo | null> {
    return this.todoModel.findByIdAndDelete(id).exec();
  }
}
