import {createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit"
import axios from 'axios'


const URL="/api/category/exercise/"

const adapter=createEntityAdapter()

const initialState=adapter.getInitialState({
  status:"idle",
  error:null
})

export const exerciseData=createAsyncThunk("exercise/exerciseData", async()=>{
  try {
    const res=await axios.get(URL)
    return [...res.data]
  } catch (error) {
    return error.message
    
  }
})



const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(exerciseData.pending, (state, action)=>{
        state.status="loading"
      })
      .addCase(exerciseData.fulfilled, (state, action)=>{
        state.status="success"
        adapter.upsertMany(state, action.payload)
        
      })
      .addCase(exerciseData.rejected, (state, action)=>{
        state.status="failed"
        state.error=action.error.message
      })
  }
});

export const {
  selectAll: selectAllExercise,
  selectById: selectExerciseById,
  selectIds:selectExerciseIds
}= adapter.getSelectors(state=>state.exercise)

export const getExerciseStatus=state=>state.exercise.status
export const getExerciseError=state=>state.exercise.error

export default exerciseSlice.reducer