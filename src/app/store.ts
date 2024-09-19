import { configureStore  } from '@reduxjs/toolkit'

import todoReducer from '../features/todoSlicer'


export const store =  configureStore({
    reducer: { 
        todoHandler: todoReducer}
}); 

export type AppDispach = typeof store.dispatch; 

export type RootState = ReturnType<typeof store.getState> ; 