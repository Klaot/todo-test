import { Card } from "antd";
import "./App.css";
import General from "./pages/General/General";

import { useState } from "react";
import { ITodoList } from "./api/type";
import { TotalInfo } from "./components";

export default function App() {
  const [tasksList, setTasksList] = useState<ITodoList[] | []>([
    { id: 1, content: "Сделать тестовое задание!", completed: true },
  ]);

  return (
    <div>
      <Card className="todo-card-wallpaper">
        <General tasksList={tasksList} setTasksList={setTasksList} />
      </Card>
      <Card className="todo-card_total-info">
        <TotalInfo tasksList={tasksList} setTasksList={setTasksList} />
      </Card>
    </div>
  );
}
