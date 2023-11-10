import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reduxSlices/userSlice';
export default configureStore({
    reducer: {
        user: userSlice
    }
})