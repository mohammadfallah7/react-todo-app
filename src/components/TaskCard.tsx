import useTaskStore from "../stores/TaskStore";
import { Task } from "../types/task";
import { BsTrash3 } from "react-icons/bs";

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  const { deleteTask, doneTask } = useTaskStore();

  return (
    <li className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-6">
        <input
          type="checkbox"
          defaultChecked={task.isCompleted}
          className="checkbox"
          onChange={() => doneTask(task.id)}
        />
        <p className={`${task.isCompleted && "line-through"}`}>{task.title}</p>
        <div className="badge badge-neutral px-6 py-3 rounded">
          {task.category || "Uncategorized"}
        </div>
      </div>
      <BsTrash3
        size={19}
        className="cursor-pointer"
        onClick={() => deleteTask(task.id)}
      />
    </li>
  );
};

export default TaskCard;
