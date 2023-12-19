import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/counterSlice';
import catReducer from '../feature/cat/catSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cat: catReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch