import { ITask } from "@/types";

const baseUrl = "http://localhost:30001";

export const getAllTasks = async (): Promise<ITask[]> => {
  try {
    const response = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const tasks = await response.json();

    return tasks;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addTask = async (todo: ITask): Promise<ITask> => {
  try {
    const response = await fetch(`${baseUrl}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const newTask = await response.json();

    return newTask;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const editTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await res.json();
  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/tasks/${id}`, {
    method: "DELETE",
  });
};
