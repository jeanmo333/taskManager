import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskManager } from './task-manager.class';
import { Task } from './task.interface';

@Injectable()
export class TasksService {
  private readonly taskManager: TaskManager = new TaskManager();

  addTask(title: string) {
    return this.taskManager.addTask(title);
  }

  deleteTask(id: number) {
    return this.taskManager.deleteTask(id);
  }

  markTaskAsCompleted(id: number) {
    const taskCompleted = this.taskManager.markTaskAsCompleted(id);
    if (!taskCompleted) {
      return new NotFoundException(`Task with ID ${id} not found`);
    }
    return taskCompleted;
  }

  listTasks() {
    const taskList = this.taskManager.listTasks();
    console.log('====================================');
    console.log("taskList: ",taskList);
    console.log('====================================');
    return taskList;
    
  }
}