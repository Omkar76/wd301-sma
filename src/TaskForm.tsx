import React, { LegacyRef } from "react";
interface TaskFormProps {
  addTask: (value: string) => void;
}

interface TaskFormState {
  title: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  // addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
  //     event.preventDefault();
  //     console.log("Submitted the form!");
  //   };
  // inputRef: LegacyRef<HTMLFormElement> | undefined;

  constructor(props: TaskFormProps) {
    super(props);

    this.state = {
      title: "",
    };
  }
  render() {
    return (
      <form
        className="w-full flex justify-around gap-3  mb-3"
        onSubmit={(event) => {
          event.preventDefault();
          this.props.addTask(this.state.title);
          this.setState({ ...this.state, title: "" });
        }}
      >
        <input
          value={this.state.title}
          className="grow p-2 border rounded-lg outline-none bg-gray-800 text-white"
          type="text"
          placeholder="Title"
          required
          onChange={(event) => {
            this.setState({ ...this.state, title: event.target.value });
          }}
        />
        <button
          type="submit"
          className="bg-slate-800 text-white p-2 border rounded-lg font-bold"
        >
          Add&nbsp;item
        </button>
      </form>
    );
  }
}

export default TaskForm;
