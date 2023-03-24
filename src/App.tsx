import React from "react";
import { useState } from "react";
import DateUtil from "./DateUtil";
import TaskCard, { Task } from "./Task";
import TaskForm from "./TaskForm";

interface TaskAppProp {}
interface TaskAppState {
  tasks: Task[];
}

class App extends React.Component<TaskAppProp, TaskAppState> {
  constructor(props: TaskAppProp) {
    super(props);
    this.state = {
      tasks: [
        {
          title: "Build the website with static content",
          dueDate: DateUtil.tommorrow,
          assigneeName: "Rohit S",
        },
        {
          title: "Add a blog",
          dueDate: DateUtil.today,
          assigneeName: "Rohit M ",
        },
      ],
    };
  }

  addTask = (value: string) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { title: value, dueDate: DateUtil.today, assigneeName: "Anon" },
      ],
    });
  };
  render() {
    return (
      <div className="mt-5 m-auto max-w-lg">
        <TaskForm addTask={this.addTask} />
        {this.state.tasks.map((task) => (
          <TaskCard {...task} />
        ))}
      </div>
    );
  }
}

export default App;
