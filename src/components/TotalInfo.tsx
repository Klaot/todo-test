import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";

import { useContext } from "react";
import { ITodoList, TaskContext } from "../context/taskListProvider";

const { confirm } = Modal;

export default function TotalInfo() {
  const { tasksList, completeAll } = useContext(TaskContext);

  const showConfirm = () => {
    confirm({
      title: "Вы уверены что хотите отметить все как выполненные?",
      icon: <ExclamationCircleFilled />,
      onOk() {
        completeAll();
      },
    });
  };

  const totalInfo = tasksList.filter(
    (task: ITodoList) => task.completed
  ).length;

  return (
    <Space className="todo-total-info_wallpaper">
      <span>
        Выполненно: {totalInfo} из {tasksList.length}
      </span>
      <Button type="primary" onClick={showConfirm}>
        Выполнить все
      </Button>
    </Space>
  );
}
