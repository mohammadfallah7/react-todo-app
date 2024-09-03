import TaskTitle from "./TaskTitle";

interface Props {
  selectedCategory: string;
}

const TaskView = ({ selectedCategory }: Props) => {
  return (
    <>
      <TaskTitle selectedCategory={selectedCategory} />
    </>
  );
};

export default TaskView;
