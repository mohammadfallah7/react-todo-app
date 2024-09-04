import SideBar from "./components/SideBar";
import TaskView from "./components/TaskView";
import useTaskStore from "./stores/TaskStore";
import useCategoryStore from "./stores/CategoryStore";

const App = () => {
  const category = useCategoryStore((state) => state.category);
  const tasks = useTaskStore((state) => state.tasks);

  const visibleTasks =
    category !== "All"
      ? tasks.filter((task) => task.category === category)
      : tasks;

  return (
    <div className="grid grid-cols-6 sm:gap-x-28 px-5">
      <div className="col-span-1 hidden h-screen sm:block">
        <SideBar />
      </div>
      <div className="col-span-6 sm:col-span-5 sm:border-l sm:pl-12 relative h-screen sm:h-auto">
        <TaskView tasks={visibleTasks} />
      </div>
    </div>
  );
};

export default App;
