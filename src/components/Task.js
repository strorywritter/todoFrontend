import { FaTimes } from "react-icons/fa";

// const [status, setStatus] = useState();

const Task = ({ task, onChange }) => {
  console.log(task)
  return (
    <div className="task">
      <img src={task.file} />
      <div className="task-text">
        <h1>{task.taskName}</h1>
        <h3>{task.description}</h3>
        <h5>{task.status}</h5>
      </div>
      <select onChange={(e) => onChange(e.target.value,task._id)}>
        <option />
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <FaTimes
        style={{
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default Task;
