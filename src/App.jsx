import { useEffect, useState } from "react"
import {TodoForm} from "./Components/TodoForm.jsx";
import { TodoProvider } from "./Contexts/todoContext.js";
import {Todo} from "./Components/Todo.jsx"
function App() {
  // const [count, setCount] = useState(0)
  
  const [todos , setTodos] = useState([]);

  useEffect(() => {
    const allTodos = JSON.parse(localStorage.getItem("todo"))

    // console.log("allTodos : " , allTodos);
    

    if(allTodos && allTodos.length)
      setTodos(allTodos);
  },[]); //only run first time , no other dependencies;


  useEffect(() => {
    // console.log("updated todos here : " , todos);
    
    localStorage.setItem("todo" , JSON.stringify(todos));
  } , [todos]);

  const addTodo = (todo) =>{ //todo = {id , todoMessage , completed}
    //Date.now() as uniqure id;
    // console.log(todo);
    // console.log("addTodo : " , todo);
    
    const arr = [...todos , todo];
    // console.log("arr: " , arr);
    

    setTodos((prev) => {
      // return [{id : Date.now() , todo : todo , completed : false} , ...prev];
      return [...prev , todo];
    })

    // console.log("after udpdate todos : " , todos);
  }

  const deleteTodo = (id) =>{
    setTodos((prev) => {
      return prev.filter((prevTodo) =>{
        return prevTodo.id != id;
      })
    })
  }

  const editTodo = (id , newTodo) =>{

    setTodos(prev => prev.map(prevTodo => prevTodo.id === id ? {...prevTodo , edit : !prevTodo.edit} : prevTodo));

    setTodos(prev => prev.map(prevTodo => prevTodo.id === id ? 
      {...prevTodo , todo : newTodo} : prevTodo));
  }

  const toggleComplete = (id) =>{
    setTodos(prev => {
      return prev.map(prevTodo => prevTodo.id == id ? {...prevTodo , completed : !prevTodo.completed} : prevTodo)
    })
  }

  return (
    <TodoProvider value={{todos , addTodo , editTodo , deleteTodo , toggleComplete}}>
    <div className="w-full pt-20 min-h-screen bg-slate-800 text-white flex flex-col flex-wrap items-center">
        <h1 className="text-center text-white text-2xl font-extrabold m-3 mt-4">Manage Your Todos</h1>
        <div className="flex flex-col w-[85%] text-sm md:text-base md:w-[50%] lg:w-[40%] flex-wrap text-white">
          {/* Todo Form */}
          <TodoForm/>

          <div className="w-full flex flex-col flex-wrap">
            {todos.map(todo =>
              <div key={todo.id} className="w-full">
                <Todo todo={todo}/>
              </div>
            )}
          </div>

        </div>
      </div>
    </TodoProvider>
  )
}

export default App
