import { ChangeEvent, useContext, useState } from "react";
import { Button, Input, Space, Tabs } from "antd";

import { TasksList } from ".";
import { TaskContext } from "../context/taskListProvider";

export default function General() {
  const { addTasks } = useContext(TaskContext);

  const [currentInputValue, setCurrentInputValue] = useState("");

  const items = [
    {
      key: "all",
      label: "Все задачи",
      children: <TasksList />,
    },
    {
      key: "current",
      label: "Текущие",
      children: <TasksList completed={false} />,
    },
    {
      key: "completed",
      label: "Выполненные",
      children: <TasksList completed />,
    },
  ];

  const setInputHandler = (value: ChangeEvent<HTMLInputElement>) => {
    setCurrentInputValue(value.target.value);
  };

  const addTasksHandler = () => {
    addTasks(currentInputValue);
    setCurrentInputValue("");
  };

  return (
    <Space className="todo-general_wallpaper" direction="vertical">
      <h1>Ваш список задач</h1>
      <Space direction="horizontal" wrap>
        <Input
          value={currentInputValue}
          onChange={setInputHandler}
          placeholder="Введите текст задачи"
        />
        <Button type="primary" onClick={addTasksHandler}>
          Добавить задачу
        </Button>
      </Space>
      <Tabs defaultActiveKey="1" items={items} />
    </Space>
  );
}
