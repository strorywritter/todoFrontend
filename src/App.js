import { useState, useEffect } from "react";
import Header from "./components/Header";
import From from "./components/Form";
import Tasks from "./components/Tasks";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [taskName, setTaskName] = useState();
  const [description, setDescription] = useState();
  const [email, setEmail] = useState('nramyashan@gmail.com');
  const [file, setFile] = useState();

  const fetch = async () => {
    await axios.get(`http://localhost:3000/user/getTodo?email=${email}`).then((res) => {
      console.log(res.data)
      setTasks(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    fetch();
  }, [loading]);

  const taskSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formdata = new FormData();
    formdata.append('taskName',taskName)
    formdata.append('description',description)
    formdata.append('email',email)
    formdata.append('file',file)
    await axios.post("http://localhost:3000/user/addTodo",formdata).then((res) => {
      console.log('todo added')
      setLoading(false);
    });
  };

  const taskUpdate = async (status,id) => {
    setLoading(true);
    const body = {
      status : status,
      todoId : id
    };
    await axios.post("http://localhost:3000/user/updateTodo",body).then((res) => {
      console.log('todo updated')
      setLoading(false);
    });
  };

  const getTaskName = (e) => {
    setTaskName(e.target.value);
  };

  const getDescription = (e) => {
    setDescription(e.target.value);
  };

  const getFile = (e) => {
    setFile(e.target.files[0]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  if (loading) {
    return <h1> loading </h1>;
  }
  return (
    <div className="App">
      <Header />
      <From
        onChangeName={getTaskName}
        onChangeDescription={getDescription}
        onChangeFile={getFile}
        taskSubmit={taskSubmit}
        inputTaskName={taskName}
        inputDescription={description}
        inputFile={file}
      />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onChange={taskUpdate} />
      ) : (
        <h3 style={{ textAlign: "center", paddingTop: "5rem" }}>
          No tasks to show
        </h3>
      )}
    </div>
  );
}

export default App;
