import { compose, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface counterStateType {
    floorAccess: boolean[]

}

const initialState: counterStateType = {
    floorAccess: [false, false, false, false, false]
    
}

export const FloorSlice = createSlice({
    initialState,
    name: 'floorAccess',
    reducers: {
        changeAccess: (state, action: PayloadAction<{ numFloor: number }>) => {
            state.floorAccess[action.payload.numFloor] = !state.floorAccess[action.payload.numFloor]
        }

    }
})

export const { changeAccess } = FloorSlice.actions

export default FloorSlice.reducer