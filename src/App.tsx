import React, { useState } from "react";
import InputField from "./components/inputField";
import "./App.css";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div className="App">
      <span className="heading">Tasks</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
