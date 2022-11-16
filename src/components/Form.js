import Button from "./Button";

const Form = ({ onChangeName, onChangeDescription, onChangeFile, inputTaskName, inputDescription, inputFile, taskSubmit }) => {
  return (
    <form action="">
      <input
        type="text"
        name="task"
        id="task-input"
        placeholder="Enter your task here"
        onChange={onChangeName}
        value={inputTaskName}
      />
      <input
        type="text"
        name="description"
        id="description-input"
        placeholder="Enter your description here"
        onChange={onChangeDescription}
        value={inputDescription}
      />
      <input
        type="file"
        name="file"
        id="file-input"
        placeholder="upload your file here"
        onChange={onChangeFile}
        // value={inputFile}
      />
      <Button text="Add" onClick={taskSubmit} />
    </form>
  );
};

export default Form;
