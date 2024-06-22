import { Task } from './task.interface';

export class TaskManager {
  private tasks: Task[] = [
    { id: 1, title: 'Learn NestJS', completed: false },
    { id: 2, title: 'Build a REST API', completed: false },
    { id: 3, title: 'Deploy application', completed: true },
  ];
 private  nextId: number = 4;

  addTask(title: string): Task {
    const newTask: Task = { id: this.nextId++, title, completed: false };
    this.tasks.push(newTask);
    return newTask;
  }

  deleteTask(id: number) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index === -1) {
      throw new Error(`Task with id ${id} not found`);
    }
    this.tasks.splice(index, 1);
    return true;
  }

  markTaskAsCompleted(id: number): Task {
    const task = this.tasks.find(task => task.id === id);
    task.completed = true;
    return task;
  }

  updateTask(id: number, title:string):Task {
    const task = this.tasks.find(task => task.id === id);
    task.completed = true;
    task.title = title;
    return task;
  }

  listTasks():Task[] {
    return this.tasks;
  }


  getTaskById(id: number):Task {
    return this.tasks.find(task => task.id === id);
  }

  getTaskByTitle(title: string):Task {
    return this.tasks.find(task => task.title === title);
  }
}