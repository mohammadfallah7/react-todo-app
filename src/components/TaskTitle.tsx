import useCategoryStore from "../stores/CategoryStore";

const TaskTitle = () => {
  const category = useCategoryStore((state) => state.category);

  return <h1 className="text-3xl mt-10">{category} Tasks</h1>;
};

export default TaskTitle;
