import { Card, Space } from "antd";
import "./App.scss";
import { General, TotalInfo } from "./components";
import { TaskProvider } from "./context/taskListProvider";

export default function App() {
  return (
    <TaskProvider>
      <Space direction="vertical">
        <Card className="todo-card-wallpaper">
          <General />
        </Card>
        <Card className="todo-card_total-info">
          <TotalInfo />
        </Card>
      </Space>
    </TaskProvider>
  );
}
