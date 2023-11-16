import {createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit"
import axios from 'axios'


const URL="/api/category/"

const adapter=createEntityAdapter()

const initialState=adapter.getInitialState({
  status:"idle",
  error:null
})

export const classData=createAsyncThunk("class/classData", async()=>{
  try {
    const res=await axios.get(URL)
    return [...res.data]
  } catch (error) {
    return error.message
    
  }
})



const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(classData.pending, (state, action)=>{
        state.status="loading"
      })
      .addCase(classData.fulfilled, (state, action)=>{
        state.status="success"
        adapter.upsertMany(state, action.payload)
        
      })
      .addCase(classData.rejected, (state, action)=>{
        state.status="failed"
        state.error=action.error.message
      })
  }
});

export const {
  selectAll: selectAllClass,
  selectById: selectClassById,
  selectIds:selectClassIds
}= adapter.getSelectors(state=>state.class)

export const getClassStatus=state=>state.class.status
export const getClassError=state=>state.class.error

export default classSlice.reducer