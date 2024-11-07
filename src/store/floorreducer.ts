import { compose, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface counterStateType {
    floorAccess: {
        isAccess: boolean
    }[]

}

const initialState: counterStateType = {
    floorAccess: [
        {
            isAccess: false
        }, {
            isAccess: false
        },{
            isAccess: false
        },{
            isAccess: false
        },{
            isAccess: false
        }]
    
}

export const FloorSlice = createSlice({
    initialState,
    name: 'floorSlice',
    reducers: {
        changeAccess: (state, action: PayloadAction<{ numFloor: number }>) => {
            state.floorAccess[action.payload.numFloor].isAccess = !state.floorAccess[action.payload.numFloor].isAccess
        }

    }
})

export const { changeAccess } = FloorSlice.actions

export default FloorSlice.reducer