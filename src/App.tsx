import { useState } from "react";
import SideBar from "./components/SideBar";
import TaskView from "./components/TaskView";
import { Task } from "./types/task";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [tasks, setTasks] = useState<Task[]>([]);

  const visibleTasks =
    selectedCategory !== "All"
      ? tasks.filter((task) => task.category === selectedCategory)
      : tasks;

  return (
    <div className="grid grid-cols-6 sm:gap-x-28 px-5">
      <div className="col-span-1 hidden h-screen sm:block">
        <SideBar
          selectedCategory={selectedCategory}
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <div className="col-span-6 sm:col-span-5 sm:border-l sm:pl-12 relative h-screen">
        <TaskView
          onCreateTask={(task) => setTasks([task, ...tasks])}
          onDeleteTask={(id: number) =>
            setTasks(tasks.filter((task) => task.id !== id))
          }
          onCompleteTask={(id: number) =>
            setTasks(
              tasks.map((task) =>
                task.id === id
                  ? { ...task, isCompleted: !task.isCompleted }
                  : task
              )
            )
          }
          tasks={visibleTasks}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
};

export default App;
