import { create } from "zustand";
import { Task } from "../types/task";

interface TaskStore {
  tasks: Task[];
  createTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  doneTask: (id: number) => void;
  updateTask: (id: number, title: string, category: string) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  createTask: (task) => set((state) => ({ tasks: [task, ...state.tasks] })),
  deleteTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  doneTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      ),
    })),
  updateTask: (id, title, category) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, title, category } : task
      ),
    })),
}));

export default useTaskStore;
