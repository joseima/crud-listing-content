import { Middleware, configureStore } from '@reduxjs/toolkit'
import usersReducer from './users/slice'

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem('__redux_state__', JSON.stringify(store.getState()))
}

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(persistanceLocalStorageMiddleware)
  }
})

// pr facilitaar typescript en redux definimos el tipo del estado raiz (o algo así)
export type RootState = ReturnType<typeof store.getState>
// lo mismo para typar los dispatchs
export type AppDispatch = typeof store.dispatch
