import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { TaskManager } from './task-manager.class';
import { Task } from './task.interface';

@Injectable()
export class TasksService {
  private readonly taskManager: TaskManager = new TaskManager();

  addTask(title: string):Task {
    const existTask =  this.taskManager.getTaskByTitle(title);
    if (existTask) throw new BadRequestException(`Task with title ${title} already exists`);

    try {
        return this.taskManager.addTask(title);
      } catch (error) {
          console.log(error); 
      }
  }

  deleteTask(id: number) {
    const existTask =  this.taskManager.getTaskById(id);
    if (!existTask) throw new NotFoundException(`Task with ID ${id} not found`);
      
    try {
         this.taskManager.deleteTask(id);
         return {messege: "task deleted successfully"}
      } catch (error) {
          console.log(error); 
      }
  }

  markTaskAsCompleted(id: number) {
    const existTask =  this.taskManager.getTaskById(id);
    if (!existTask) throw new NotFoundException(`Task with ID ${id} not found`);
    try {
      return  this.taskManager.markTaskAsCompleted(id);;
    } catch (error) {
        console.log(error); 
    }
  
  }


  updateTask(id: number, title: string) {
    const existTask =  this.taskManager.getTaskById(id);
    if (!existTask) throw new NotFoundException(`Task with ID ${id} not found`);
    try {
      return  this.taskManager.updateTask(id,title);;
    } catch (error) {
        console.log(error); 
    }
  
  }

  listTasks() {
    const taskList = this.taskManager.listTasks();
    console.log('====================================');
    console.log("taskList: ",taskList);
    console.log('====================================');
    return taskList;
    
  }


 
}