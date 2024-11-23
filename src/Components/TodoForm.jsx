import React , {useState} from 'react';
import {useTodo} from '../Contexts/todoContext.js';

const TodoForm = () => {

    const [message, setMessage] = useState('');

    const {addTodo , todos} = useTodo();

    const handleSubmit = (e) => {
      // console.log(message);
      // console.log('here');
      e.preventDefault();
      if(!message) return;
      addTodo({id : Date.now() , todo : message , completed : false , edit : false});
      setMessage('');
      // console.log("todos : " , todos);
      
    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex">
        {/* todo input */}
          <input onChange={(e) =>{
            setMessage(e.target.value)
          }}  className="w-full p-2 rounded-l-lg transition-none outline-none border-none bg-white/30 border-black/30" placeholder="Write Todo..." type="text" name="add" id="add" value={message} />
          {/* Add button */}
          <button className="bg-green-600 p-2 rounded-r-lg hover:bg-green-500 transition duration-300" type="submit">Add</button>
      </form>
    );
}

export {TodoForm};
