"use client";

import useModal from "@/hook/useModal";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import Form from "./Form";

interface ModalContainerProps {
  children: ReactNode;
}

interface ModalButtonProps {
  label: string;
  onClick: () => void;
}

const ModalContainer = ({ children }: ModalContainerProps) => (
  // Enables the animation of components that have been removed from the tree
  <AnimatePresence>{children}</AnimatePresence>
);

const ModalButton = ({ onClick, label }: ModalButtonProps) => (
  <motion.button
    className="modal-button"
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);

const AddTodo = () => {
  const { modalOpen, close, open } = useModal();
  const createTask = () => {};

  const task = {
    id: "1",
    text: "New task",
    completed: false,
  };

  const setTask = () => {};

  return (
    <div>
      <motion.button
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={open}
        className="add-button flex items-center mx-auto gap-2 my-5"
      >
        Add new task <AiOutlinePlus size={18} />
      </motion.button>

      <ModalContainer>
        {modalOpen && (
          <Modal handleClose={close}>
            {/* <form>
              <h3 className="font-bold text-lg">Add new task</h3>
              <div className="modal-action">
                <input
                  //   value={newTaskValue}
                  //   onChange={(e) => setNewTaskValue(e.target.value)}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </form> */}

            <Form
              type="Create"
              handleSubmit={createTask}
              task={task}
              setTask={setTask}
            />
            <ModalButton onClick={close} label="Submit" />
          </Modal>
        )}
      </ModalContainer>
    </div>
  );
};

export default AddTodo;
