import { ReactNode, createContext } from "react";

import { useTasks } from "../hooks/useTasks";

export interface ITodoList {
  id: number;
  content: string;
  completed: boolean;
}

interface ITaskContext {
  toogleCompleted: (id: number) => void;
  deleteTask: (taskId: number) => void;
  addTasks: (content: string) => void;
  completeAll: () => void;
  tasksList: ITodoList[];
}

interface TaskProviderProps {
  children: ReactNode;
}

const dumbFunc = () => {};

export const TaskContext = createContext<ITaskContext>({
  toogleCompleted: dumbFunc,
  deleteTask: dumbFunc,
  addTasks: dumbFunc,
  completeAll: dumbFunc,
  tasksList: [],
});

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const tasks = useTasks();

  return <TaskContext.Provider value={tasks}>{children}</TaskContext.Provider>;
};
