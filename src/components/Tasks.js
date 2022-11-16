import Task from "./Task";

const Tasks = ({ tasks, onChange }) => {
  return (
    <div className="task-container">
      {tasks.map((task) => (
        <Task task={task} key={task.id} onChange={onChange} />
      ))}
    </div>
  );
};

export default Tasks;
