import { useState } from "react";
import SideBar from "./components/SideBar";
import TaskView from "./components/TaskView";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <div className="container mx-auto px-4 sm:px-6 grid grid-cols-6">
      <div className="col-span-1 hidden sm:block h-screen">
        <SideBar
          selectedCategory={selectedCategory}
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <div className="col-span-6 sm:col-span-5 sm:pl-24">
        <TaskView selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default App;
