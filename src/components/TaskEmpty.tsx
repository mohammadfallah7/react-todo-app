import { ImFileEmpty } from "react-icons/im";

const TaskEmpty = () => {
  return (
    <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5">
      <ImFileEmpty size={64} />
      <p>You have no task here</p>
    </div>
  );
};

export default TaskEmpty;
