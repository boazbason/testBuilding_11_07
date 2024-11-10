import { compose, createSlice, PayloadAction } from '@reduxjs/toolkit'
import listRols from '../data/roles.json'

interface counterStateType {
    role: string
}

const initialState: counterStateType = {
    role: listRols[0]
    
}

export const RoolSlice = createSlice({
    initialState,
    name: 'RoolSlice',
    reducers: {
        setRole: (state, action: PayloadAction<{ indexRool: number }>) => {
            const index = listRols[action.payload.indexRool]
            if(index){
                state.role = index;                
            }
        }
        }

    }
)

export const { setRole } = RoolSlice.actions

export default RoolSlice.reducer