import { Checkbox, Modal, Space } from "antd";
import { deleteTaskHandler, handleCheckboxChange } from "../api/api";
import { DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { ITodoList } from "../api/type";

const { confirm } = Modal;

export default function CurrentTasks({
  tasksList,
  setTasksList,
  completed,
}: {
  tasksList: ITodoList[] | [];
  setTasksList: (state: ITodoList[]) => void;
  completed?: boolean;
}) {
  const newTasksList = completed
    ? tasksList.filter((task: ITodoList) => task.completed)
    : tasksList.filter((task: ITodoList) => !task.completed);

  const showConfirm = (id: number) => {
    confirm({
      title: "Вы уверены что хотите удалить задачу?",
      icon: <ExclamationCircleFilled />,
      onOk() {
        deleteTaskHandler(id, setTasksList, tasksList);
      },
    });
  };

  return (
    <Space direction="vertical">
      {newTasksList.map((task: ITodoList) => {
        return (
          <div key={task.id}>
            <Space direction="horizontal" align="start">
              <Checkbox
                checked={task.completed}
                onChange={() =>
                  handleCheckboxChange(task.id, setTasksList, tasksList)
                }
              />
              <p
                style={{
                  maxWidth: "300px",
                  wordWrap: "break-word",
                  margin: "0px",
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.content}
              </p>
              <DeleteOutlined onClick={() => showConfirm(task.id)} />
            </Space>
          </div>
        );
      })}
    </Space>
  );
}
