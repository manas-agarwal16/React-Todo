import { useEffect, useState } from "react";
import {useTodo}  from "../Contexts/todoContext.js"

function Todo(curTodo){

    curTodo = curTodo.todo;
    // console.log("curTodo: " , curTodo);
    // console.log("id : " , curTodo.id);
    
    
    const {todos , setTodos , deleteTodo , editTodo , toggleComplete} = useTodo();

    const [message, setMessage] = useState(curTodo.todo);
    const [isEdit , setIsEdit] = useState(curTodo.edit);
    const [isComplete , setIsComplete] = useState(curTodo.completed);

    const handleEditAndSave = () => {

        if(isComplete){
            setIsComplete(0);
            toggleComplete(curTodo.id);
        }
        setIsEdit((prev) => !prev);
        editTodo(curTodo.id , message);
        // if(!isEdit){
        //     setIsEdit(1);
        // }
        // else{
        //     setIsEdit(0);
        //     editTodo(curTodo.id , message);
        // }
    }

    const handleComplete = () => {
        if(isEdit){
            setIsEdit(0);
            editTodo(curTodo.id , message);
        }
        setIsComplete(!isComplete);
        toggleComplete(curTodo.id);
        // setTodos(prev => prev.map(prevTodo => prevTodo.id == curTodo.id ? {...prevTodo , complete : isComplete} : prevTodo));
    }
    

    return (
            <div className={`text-black flex items-center px-1 mt-2 border-2 rounded-lg h-auto
            ${isComplete? "bg-green-200" : "bg-blue-200"}`}>

                {/* checkbox */}
                <input onClick={handleComplete}  type="checkbox" checked={isComplete} />

                {/* todo */}
                <textarea onChange={(e) => setMessage(e.target.value)} 
                rows={1}
                className={`${isEdit ? "bg-white pointer-events-auto" : (isComplete ? "line-through bg-green-200" : "not-line-through bg-blue-200  scrollable")}  w-full m-2 p-1 text-black transition-none outline-none border-none overflow-auto text-lg my-auto resize-none scrollbar-hidden rounded-lg `}

                type="text"
                value={message}
                readOnly={!isEdit}  />

                <div onClick={handleEditAndSave} className="bg-white p-1 cursor-pointer rounded-lg mx-1">{!isEdit ? "✏️" : "📑"}</div>

                <div onClick={(e) => {
                    deleteTodo(curTodo.id);
                }} className="bg-white 
                p-1 cursor-pointer rounded-lg">❌</div>

            </div>
    )
}

export {Todo};

 // const handleCheckbox = () =>{
    //     toggleComplete(curTodo.id);
    // }

    // const handleEditAndSave = () =>{
    //     setTodos(prev =>
    //         prev.map(prevTodo => 
    //             prevTodo.id === curTodo.id ? {...prevTodo , edit : !prevTodo.edit} : prevTodo)
    //     );
    //     setIsEdit(curTodo.edit);
    // }
    
    // const handleEditTodo = (e) => {
    //     editTodo(curTodo.id , e.target.value);
    // }