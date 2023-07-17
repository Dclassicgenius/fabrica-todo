import { getAllTasks } from "@/api/api";
import AddTodo from "@/components/AddTodo";
import Filter from "@/components/Filter";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import TodoList from "@/components/TodoList";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export default async function Home() {
  const tasks = await getAllTasks();

  return (
    <main className="max-w-4xl mx-auto mt-4 px-7">
      <div className="text-center mb-5 flex flex-col gap-4">
        {/* <div className="flex gap-4 justify-end pr-7">
          <BsFillMoonStarsFill size={20} />
          <BsFillSunFill size={20} />
        </div> */}
        <ThemeSwitcher />
        <h1 className="text-4xl font-bold text-primary-pink">Todo List App</h1>

        <AddTodo />
      </div>
      <Filter tasks={tasks} />
    </main>
  );
}
