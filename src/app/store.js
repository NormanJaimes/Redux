import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/taskSlide';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
