import { useNavigate, useParams } from "react-router-dom";
import useTaskStore from "../stores/TaskStore";
import TaskForm from "../components/TaskForm";

const Task = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { tasks, updateTask } = useTaskStore();
  const task = tasks.find((t) => t.id === parseInt(id || ""));

  return (
    <div className="px-5 mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">{task?.title}</h1>
        <div className="badge badge-neutral px-6 py-3 rounded">
          {task?.category || "Uncategorized"}
        </div>
      </div>
      <TaskForm
        placeholder={task?.title}
        buttonTitle="Update"
        onSubmit={(data) => {
          updateTask(task?.id || 0, data.title, data.category);
          navigate("/");
        }}
      />
    </div>
  );
};

export default Task;
