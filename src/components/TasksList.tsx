import { Button, Checkbox, Modal, Space } from "antd";
import { DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";

import { useContext } from "react";
import { ITodoList, TaskContext } from "../context/taskListProvider";

const { confirm } = Modal;

export default function TasksList({ completed }: { completed?: boolean }) {
  const { tasksList, toogleCompleted, deleteTask } = useContext(TaskContext);

  const newTasksList =
    completed === undefined
      ? tasksList
      : tasksList.filter((task: ITodoList) => task.completed === completed);

  const showConfirm = (id: number) => {
    confirm({
      title: "Вы уверены что хотите удалить задачу?",
      icon: <ExclamationCircleFilled />,
      onOk() {
        deleteTask(id);
      },
    });
  };

  return (
    <Space direction="vertical">
      {newTasksList.map((task: ITodoList) => {
        return (
          <Space key={task.id}>
            <Space
              direction="horizontal"
              align="start"
              className="todo-task-content"
            >
              <Checkbox
                className="todo-task-list-checkbox"
                checked={task.completed}
                onChange={() => toogleCompleted(task.id)}
              />
              <p
                className={
                  task.completed
                    ? "todo-task-content_p completed"
                    : "todo-task-content_p"
                }
              >
                {task.content}
              </p>
            </Space>
            <Button
              icon={<DeleteOutlined />}
              onClick={() => showConfirm(task.id)}
              type="link"
            />
          </Space>
        );
      })}
    </Space>
  );
}
