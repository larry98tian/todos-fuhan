import React, {useState, useRef, useEffect} from 'react'
import ToDoList from './ToDoList';
import uuidv4 from 'uuid/dist/v4'

const LOCAL_STORAGE_KEY = "todoApps.todo"

function App() {
  /*array destructure*/
  const [todos, setToDos] = useState([{name:"Todo 1", id:1, complete: true}, {name:"todo 2", id:5, complete: false}]);
  const todoNameRef = useRef();


  useEffect( () => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (storedTodos) {
      setToDos(JSON.parse(storedTodos))
    }  
  }, [] )


  useEffect( () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos) )}, 
    [todos]
     )

  function changeTodo(id) {
    const newTodos = [...todos]
    const todoToChange = newTodos.find(td => td.id === id)

    todoToChange.complete = !todoToChange.complete
    setToDos(newTodos)
  }
    

  function handleAddToDo() { 
    const newName = todoNameRef.current.value;

    if (newName ==='')
      return;

    console.log(newName);

    setToDos(previousToDos => {
      return [...previousToDos, {id: uuidv4(), name: newName, complete:false}]
    })

    todoNameRef.current.value = '';
  }

  function handleClearToDo() {
    const newTodos = todos.filter( td => !td.complete)
    setToDos(newTodos)
  }

  return (
    <>
    
          <ToDoList todofuhanx = {todos} toggleTodo ={changeTodo} />
          <input ref={todoNameRef} type="text"/>
          <button onClick={handleAddToDo} >Add ToDos</button>
          <button onClick={handleClearToDo}>Clearr Completed ToDos</button>
          <div>{todos.filter(td => !td.complete).length} Left to do</div>
         
    </>
    
  );
}

export default App;
