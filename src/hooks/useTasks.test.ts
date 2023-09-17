import { renderHook, act } from "@testing-library/react";
import { useTasks } from "./useTasks";

describe("useTasks Hook", () => {
  it("should add a new task", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTasks("New Task");
    });

    expect(result.current.tasksList).toHaveLength(1);
    expect(result.current.tasksList[0].content).toBe("New Task");
    expect(result.current.tasksList[0].completed).toBe(false);
  });

  it("should toggle task completion", () => {
    const { result } = renderHook(() => useTasks());

    const task = {
      id: 1,
      content: "Task 1",
      completed: false,
    };

    act(() => {
      result.current.setTasksList([task]);
    });

    act(() => {
      result.current.toogleCompleted(1);
    });

    expect(result.current.tasksList[0].completed).toBe(true);
  });

  it("should delete a task", () => {
    const { result } = renderHook(() => useTasks());

    const task = {
      id: 1,
      content: "Task 1",
      completed: false,
    };

    act(() => {
      result.current.setTasksList([task]);
    });

    act(() => {
      result.current.deleteTask(1);
    });

    expect(result.current.tasksList).toHaveLength(0);
  });
});
