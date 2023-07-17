"use client";

import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { ITask } from "@/types";

interface TaskProps {
  task: ITask;
}

const TodoTask = ({ task }: TaskProps) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // await editTodo({
    //   id: task.id,
    //   text: taskToEdit,
    // });
    // setOpenModalEdit(false);
    // router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    // await deleteTodo(id);
    // setOpenModalDeleted(false);
    // router.refresh();
  };

  return (
    <tr key={task.id} className="flex justify-between">
      <td className="w-full text-primary-orange text-lg">
        <div className=" flex flex-row gap-4 items-center">
          <input
            type="checkbox"
            checked={task.completed}
            className=" w-6 h-6 dark:border-primary-orange accent-primary-pink"
          />
          <span className={task.completed ? ` line-through italic` : ""}>
            {task.text}
          </span>
        </div>
      </td>
      <td>
        <div className="flex gap-5">
          <FiEdit
            onClick={() => setOpenModalEdit(true)}
            cursor="pointer"
            className="text-primary-blue"
            size={25}
          />
          {/* <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
            <form onSubmit={handleSubmitEditTodo}>
              <h3 className='font-bold text-lg'>Edit task</h3>
              <div className='modal-action'>
                <input
                  value={taskToEdit}
                  onChange={(e) => setTaskToEdit(e.target.value)}
                  type='text'
                  placeholder='Type here'
                  className='input input-bordered w-full'
                />
                <button type='submit' className='btn'>
                  Submit
                </button>
              </div>
            </form>
          </Modal> */}
          <FiTrash2
            onClick={() => setOpenModalDeleted(true)}
            cursor="pointer"
            className="text-red-500"
            size={25}
          />
          {/* <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
            <h3 className='text-lg'>
              Are you sure, you want to delete this task?
            </h3>
            <div className='modal-action'>
              <button onClick={() => handleDeleteTask(task.id)} className='btn'>
                Yes
              </button>
            </div>
          </Modal> */}
        </div>
      </td>
    </tr>
  );
};

export default TodoTask;
