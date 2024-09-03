import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Task } from "../types/task";

const scheme = z.object({
  title: z
    .string()
    .min(3, "Task title should be at least 3 characters.")
    .max(40, "Task title should be less than 40 characters"),
  category: z.enum(["", "Groceries", "College", "Payments"], {
    message: "Select category",
  }),
});

type TaskFormData = z.infer<typeof scheme>;

interface Props {
  onSubmit: (task: Task) => void;
}

const TaskForm = ({ onSubmit }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TaskFormData>({
    resolver: zodResolver(scheme),
  });

  const submitForm = (data: FieldValues) => {
    onSubmit(data as Task);
    reset();
  };

  return (
    <form className="mt-8" onSubmit={handleSubmit(submitForm)}>
      <input
        {...register("title")}
        type="text"
        placeholder="Add a new task"
        className="input bg-base-200 w-full"
      />
      {errors.title && (
        <p className="mt-2 text-error">{errors.title.message}</p>
      )}

      <select
        {...register("category")}
        className="select w-full max-w-xs bg-base-200 mt-3"
        defaultValue="Uncategorized"
      >
        <option value="">Pick your category</option>
        <option value="Groceries">Groceries</option>
        <option value="College">College</option>
        <option value="Payments">Payments</option>
      </select>

      <button
        type="submit"
        className="btn bg-primary-content text-white hover:bg-secondary-content ml-3"
      >
        Submit
      </button>

      {errors.category && (
        <p className="mt-2 text-error">{errors.category.message}</p>
      )}
    </form>
  );
};

export default TaskForm;
