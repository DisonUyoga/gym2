import { configureStore } from "@reduxjs/toolkit";
import pricingSlice from "./slices/pricingSlice";
import exerciseSlice from "./slices/exerciseSlice";
import classSlice from "./slices/classSlice";
import AuthSlice from "./slices/AuthSlice";
import testimonySlice from "./slices/testimonialsSlice";



const store= configureStore({
  reducer:{
    schedule:pricingSlice,
    exercise:exerciseSlice,
    class: classSlice,
    auth:AuthSlice,
    testimony: testimonySlice

  }
})

export default store