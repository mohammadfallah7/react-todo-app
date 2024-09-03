import { useState } from "react";
import SideBar from "./components/SideBar";
import TaskView from "./components/TaskView";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <div className="grid grid-cols-6 gap-x-28 px-5">
      <div className="col-span-1 hidden h-screen sm:block">
        <SideBar
          selectedCategory={selectedCategory}
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <div className="col-span-6 sm:col-span-5 sm:border-l sm:pl-12">
        <TaskView selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default App;
