interface Props {
  selectedCategory: string;
}

const TaskTitle = ({ selectedCategory = "All" }: Props) => {
  return <h1 className="text-3xl mt-10">{selectedCategory} Tasks</h1>;
};

export default TaskTitle;
