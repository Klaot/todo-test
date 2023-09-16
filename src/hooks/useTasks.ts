import { useState } from "react";
import { ITodoList } from "../context/taskListProvider";

export const useTasks = () => {
  const [tasksList, setTasksList] = useState<ITodoList[]>([]);

  const toogleCompleted = (id: number) => {
    const updatedTasksList = tasksList.map((task: ITodoList) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    setTasksList(updatedTasksList);
  };

  const deleteTask = (taskId: number) => {
    const updatedTasksList = tasksList.filter(
      (task: ITodoList) => task.id !== taskId
    );

    setTasksList(updatedTasksList);
  };

  const addTasks = (content: string) => {
    if (!content) {
      return;
    }

    const newTask = {
      id: Date.now(),
      content,
      completed: false,
    };

    setTasksList([...tasksList, newTask]);
  };

  const completeAll = () => {
    const completedTask: ITodoList[] = tasksList.map((task: ITodoList) => {
      return { ...task, completed: true };
    });

    setTasksList(completedTask);
  };

  return {
    toogleCompleted,
    deleteTask,
    addTasks,
    tasksList,
    completeAll,
  };
};
