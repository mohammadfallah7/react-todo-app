import useTaskStore from "../stores/TaskStore";
import { Task } from "../types/task";
import TaskCard from "./TaskCard";
import TaskEmpty from "./TaskEmpty";
import TaskForm from "./TaskForm";
import TaskTitle from "./TaskTitle";

interface Props {
  tasks: Task[];
}

const TaskView = ({ tasks }: Props) => {
  const createTask = useTaskStore((state) => state.createTask);

  return (
    <>
      <TaskTitle />
      <TaskForm
        onSubmit={(data) =>
          createTask({
            ...data,
            id: new Date().getTime(),
            isCompleted: false,
          })
        }
      />

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
