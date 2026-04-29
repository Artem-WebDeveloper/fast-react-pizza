import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispath = useDispatch.withTypes<AppDispatch>();

export default store;
