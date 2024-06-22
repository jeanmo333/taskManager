import { Controller, Get, Post, Delete, Param, Body, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.interface';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  addTask(@Body('title') title: string) {
    return this.tasksService.addTask(title);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    return this.tasksService.deleteTask(+id);
  }

  @Patch(':id/complete')
  markTaskAsCompleted(@Param('id') id: number) {
    return this.tasksService.markTaskAsCompleted(+id);
  }

  @Get()
  listTasks() {
    return this.tasksService.listTasks();
  }
}
