import { useState } from "react";
import SideBar from "./components/SideBar";
import TaskView from "./components/TaskView";
import useTaskStore from "./stores/TaskStore";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const tasks = useTaskStore((state) => state.tasks);

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
      <div className="col-span-6 sm:col-span-5 sm:border-l sm:pl-12 relative h-screen sm:h-auto">
        <TaskView tasks={visibleTasks} selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default App;
