 import { createSlice, PayloadAction} from "@reduxjs/toolkit";

 export interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }
  
  export interface TodoState {
    todos: Todo[] 
  }
  
  const initialState: TodoState = {
    todos: [],
  };

 const todoSlice = createSlice({
    name: "todos", 
    initialState, 
    reducers: {

         // add todo 
        addTodo(state, action: PayloadAction<string>) {
            const newTodo: Todo  = {
                id: Math.floor(Math.random() * 100),
                title: action.payload,
                completed: false
            }
            state.todos.push(newTodo)
        },

        // remove todo
        removeTodo(state, action: PayloadAction<number>) {
            state.todos.filter( todo => todo.id != action.payload)    
        }, 

        //toggle todo 
        toggleTodo (state, action: PayloadAction<number>) {
            const todo = state.todos.find( todo => todo.id === action.payload)
            if(todo) {
                todo.completed = !todo.completed
            }
        }
    }

 })

 export const { addTodo } = todoSlice.actions

 export default todoSlice.reducer