import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";

const { confirm } = Modal;

export default function TotalInfo({
  tasksList,
  setTasksList,
}: {
  tasksList: any;
  setTasksList: (state: any) => void;
}) {
  const completedAllTaskHandler = () => {
    const completedTask = tasksList.map((task: any) => {
      return { ...task, completed: true };
    });
    setTasksList(completedTask);
  };

  const showConfirm = () => {
    confirm({
      title: "Вы уверены что хотите отметить все как выполненные?",
      icon: <ExclamationCircleFilled />,
      onOk() {
        completedAllTaskHandler();
      },
    });
  };

  return (
    <Space style={{ display: "flex", justifyContent: "space-between" }}>
      <Space direction="horizontal">{`Выполненно: ${
        tasksList.filter((task: any) => task.completed).length
      } из ${tasksList.length}`}</Space>
      <Button type="primary" onClick={() => showConfirm()}>
        Выполнить все
      </Button>
    </Space>
  );
}
