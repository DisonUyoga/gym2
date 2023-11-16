import {createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit"
import axios from 'axios'


const URL="/api/category/service/"

const adapter=createEntityAdapter()

const initialState=adapter.getInitialState({
  status:"idle",
  error:null
})

export const ScheduleData=createAsyncThunk("schedule/ScheduleData", async()=>{
  try {
    const res=await axios.get(URL)
    console.log("res",res)
    return [...res.data]
  } catch (error) {
    return error.message
    
  }
})



const pricingSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(ScheduleData.pending, (state, action)=>{
        state.status="loading"
      })
      .addCase(ScheduleData.fulfilled, (state, action)=>{
        state.status="success"
        adapter.upsertMany(state, action.payload)
        
      })
      .addCase(ScheduleData.rejected, (state, action)=>{
        state.status="failed"
        state.error=action.error.message
      })
  }
});

export const {
  selectAll: selectAllSchedule,
  selectById: selectScheduleById,
  selectIds:selectScheduleIds,
}= adapter.getSelectors(state=>state.schedule)

export const getScheduleStatus=state=>state.schedule.status
export const getScheduleError=state=>state.schedule.error

export default pricingSlice.reducer