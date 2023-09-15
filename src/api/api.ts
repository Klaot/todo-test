import { ITodoList } from "./type";

export const handleCheckboxChange = (
  id: number,
  updateStateFunction: (state: any) => void,
  tasksList: ITodoList[] | []
) => {
  const updatedTasksList = tasksList.map((task: ITodoList) => {
    if (task.id === id) {
      return {
        ...task,
        completed: !task.completed,
      };
    }
    return task;
  });

  updateStateFunction(updatedTasksList);
};

export const deleteTaskHandler = (
  taskId: number,
  updateStateFunction: (state: ITodoList[]) => void,
  tasksList: ITodoList[] | []
) => {
  const updatedTasksList = tasksList.filter(
    (task: ITodoList) => task.id !== taskId
  );

  updateStateFunction(updatedTasksList);
};
