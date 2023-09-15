import { useState } from "react";
import { Button, Input, Space, Tabs } from "antd";

import { ITodoList } from "../../api/type";
import { AllTasks, TasksList } from "../../components";

export default function General({
  tasksList,
  setTasksList,
}: {
  tasksList: ITodoList[] | [];
  setTasksList: (state: any) => void;
}) {
  const [currentInputValue, setCurrentInputValue] = useState("");

  const items = [
    {
      key: "all",
      label: "Все задачи",
      children: <AllTasks tasksList={tasksList} setTasksList={setTasksList} />,
    },
    {
      key: "current",
      label: "Текущие",
      children: <TasksList tasksList={tasksList} setTasksList={setTasksList} />,
    },
    {
      key: "completed",
      label: "Выполненные",
      children: (
        <TasksList
          completed={true}
          tasksList={tasksList}
          setTasksList={setTasksList}
        />
      ),
    },
  ];

  const addTasksHandler = () => {
    if (!currentInputValue) {
      return;
    }

    const newTask = {
      id: tasksList.length + 1,
      content: currentInputValue,
      completed: false,
    };

    setTasksList([...tasksList, newTask]);
    setCurrentInputValue("");
  };

  const setInputHandler = (value: any) => {
    setCurrentInputValue(value.target.value);
  };

  return (
    <Space style={{ width: "100%" }} direction="vertical">
      <h1 style={{ textAlign: "center", color: "#333", marginTop: "0px" }}>
        Ваш список задач
      </h1>
      <Space style={{ width: "100%" }} direction="horizontal">
        <Input
          style={{ minWidth: "300px", maxWidth: "500px" }}
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
