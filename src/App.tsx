import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { addTodo} from './features/todoSlicer'

function App() {
  const [text, setText] = useState("");

  const todos = useAppSelector((state) => state.todoHandler)
  console.log(todos)
   const dispatch = useAppDispatch()

   function onsSubmitForm() {
    if(text) {
      dispatch(addTodo(text))
    }
  
   }
   const handleInputChange =  (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    
    <div className="flex justify-center h-screen items-center">
          <form className=" text-white" onSubmit={onsSubmitForm}>   
              <div className="w-full bg-blue">
                <label className="block uppercase tracking-wide text-black text-xs font-bold">
                  Add new todo
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Title"
                />             
             </div>
          </form>
      </div>
  )
      
}

export default App;
