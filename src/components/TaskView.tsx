import { Task } from "../types/task";
import TaskCard from "./TaskCard";
import TaskEmpty from "./TaskEmpty";
import TaskForm from "./TaskForm";
import TaskTitle from "./TaskTitle";

interface Props {
  tasks: Task[];
  selectedCategory: string;
}

const TaskView = ({ tasks, selectedCategory }: Props) => {
  return (
    <>
      <TaskTitle selectedCategory={selectedCategory} />
      <TaskForm />

      {tasks.length === 0 && <TaskEmpty />}

      <ul className="mt-16">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
};

export default TaskView;
