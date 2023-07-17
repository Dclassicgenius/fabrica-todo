import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import useModal from "@/hook/useModal";

export default function Home() {
  const tasks = [
    { id: "1", text: "text 1", completed: true },
    { id: "2", text: "text 2", completed: false },
    { id: "3", text: "text 3", completed: true },
    { id: "4", text: "text 4", completed: false },
    { id: "5", text: "text 5", completed: true },
  ];
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center mb-5 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-primary-pink">Todo List App</h1>
        <AddTodo />

        {/* <button onClick={open}>Open</button> */}
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}
