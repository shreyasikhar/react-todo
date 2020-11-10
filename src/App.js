import React, {useState, useEffect} from 'react';
import {Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Todos from './Components/Todos'
import TodoForm from './Components/TodoForm'

const App = () => {
  const [todos, setTodos] = useState([]);

  // to run something even before component loads
  // i.e. callback runs before component loads
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if(localTodos) {
      setTodos(JSON.parse(localTodos))
      console.log("callback 1");
    }
  }, []);

  const addTodos = async (todo) => {
    setTodos([...todos, todo]);
  }

  // if the value changes of 2nd parameter
  // then it runs the callback passed as 1st parameter
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("callback 2");
  }, [todos]);

  const markComplete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const markCross = (id) => { 
    todos.forEach(todo => {
      if(todo.id === id) {
        todo.status = "completed";
      }
    });
    setTodos(todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  return (
    <Container fluid>
      <h1>Todos App with LocalStorage</h1>
      <TodoForm addTodos={addTodos}/>
      <Todos todos={todos} markComplete={markComplete} markCross={markCross}/>
    </Container>
  )
}

export default App;
