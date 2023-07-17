import { ITask } from "@/types";
import TodoTask from "./TodoTask";

interface TodoListProps {
  tasks: ITask[];
}
const TodoList = ({ tasks }: TodoListProps) => {
  return (
    <div>
      <div className="overflow-x-auto text-primary-gray">
        <table className="w-full">
          <thead>
            <tr className="flex justify-between">
              <th className="text-xl">Tasks</th>
              <th className="text-xl">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TodoTask key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
