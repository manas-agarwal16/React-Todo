import { createContext ,useContext } from "react";


//while define context u can only define fields not assign them,
export const todoContext = createContext({
    todos : [
        {} , {} , {}

        // sample
        // {
            // id :  , 
            // todo : 
            // completed : ,
        // }
    ],
    addTodo : (todo) => {},
    deleteTodo : (id) => {},
    editTodo  : (id , todo) => {},
    toggleComplete : (id) => {},
});

export const TodoProvider = todoContext.Provider;

export const useTodo = () => {
    return useContext(todoContext);
}

