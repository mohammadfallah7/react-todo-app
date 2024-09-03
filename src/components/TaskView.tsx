import { Task } from "../types/task";
import TaskCard from "./TaskCard";
import TaskEmpty from "./TaskEmpty";
import TaskForm from "./TaskForm";
import TaskTitle from "./TaskTitle";

interface Props {
  tasks: Task[];
  selectedCategory: string;
  onCreateTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
  onCompleteTask: (id: number) => void;
}

const TaskView = ({
  tasks,
  selectedCategory,
  onCreateTask,
  onDeleteTask,
  onCompleteTask,
}: Props) => {
  return (
    <>
      <TaskTitle selectedCategory={selectedCategory} />
      <TaskForm
        onSubmit={(data) =>
          onCreateTask({
            ...data,
            id: new Date().getTime(),
            isCompleted: false,
          })
        }
      />

      {tasks.length === 0 && <TaskEmpty />}

      <ul className="mt-16">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={(id: number) => onDeleteTask(id)}
            onComplete={(id: number) => onCompleteTask(id)}
          />
        ))}
      </ul>
    </>
  );
};

export default TaskView;
