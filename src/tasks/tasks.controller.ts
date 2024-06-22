import { Controller, Get, Post, Delete, Param, Body, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.interface';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  addTask(@Body('title') title: string): Task {
    return this.tasksService.addTask(title);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number)  {
    return this.tasksService.deleteTask(+id);
  }

  @Patch(':id/complete')
  markTaskAsCompleted(@Param('id') id: number): Task {
    return this.tasksService.markTaskAsCompleted(+id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: number,@Body('title') title: string): Task {
    return this.tasksService.updateTask(+id,title);
  }

  @Get()
  listTasks(): Task[] {
    return this.tasksService.listTasks();
  }
}
