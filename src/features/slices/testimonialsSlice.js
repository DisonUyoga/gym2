import {createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit"
import axios from 'axios'


const URL="/api/category/testimonial/"

const adapter=createEntityAdapter()

const initialState=adapter.getInitialState({
  status:"idle",
  error:null
})

export const testimonyData=createAsyncThunk("testimony/testimonyData", async()=>{
  try {
    const res=await axios.get(URL)
    console.log("res",res)
    return [...res.data]
  } catch (error) {
    return error.message
    
  }
})



const testimonySlice = createSlice({
  name: "testimony",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(testimonyData.pending, (state, action)=>{
        state.status="loading"
      })
      .addCase(testimonyData.fulfilled, (state, action)=>{
        state.status="success"
        adapter.upsertMany(state, action.payload)
        
      })
      .addCase(testimonyData.rejected, (state, action)=>{
        state.status="failed"
        state.error=action.error.message
      })
  }
});

export const {
  selectAll: selectAllTestimony,
  selectById: selectTestimonyById,
  selectIds:selectTestimonyIds,
}= adapter.getSelectors(state=>state.testimony)

export const getTestimonyStatus=state=>state.testimony.status
export const getTestimonyError=state=>state.testimony.error

export default testimonySlice.reducer