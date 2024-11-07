import {configureStore} from '@reduxjs/toolkit'
import roolReduser from '../store/rolereducer'
import floorReduser from '../store/floorreducer'

export const store = configureStore({
    reducer: {
        roolRed: roolReduser,
        floorRed: floorReduser
    }
})



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch =  typeof store.dispatch