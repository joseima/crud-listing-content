import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type UserId = number

export interface User {
    name: string;
    email: string;
    github: string
}

export interface UserWithId extends User {
    id:UserId
}

const DEFAULT_STATE = [
  {
    id: 1,
    name: 'Bender Rodriguez',
    email: 'bendy@gmail.com',
    github: 'bender'
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'doe@gmail.com',
    github: 'leo'
  },
  {
    id: 3,
    name: 'Joseima Ferreira',
    email: 'joseima@gmail.com',
    github: 'joseima'
  }
]

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem('__redux_state__')
  return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE
})()

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = Math.floor(Math.random() * 90) + 10
      return [...state, { id, ...action.payload }]
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload
      return state.filter((user) => user.id !== id)
    },
    rollbackUser: (state, action: PayloadAction<UserWithId>) => {
      const isUserAlreadyDefined = state.some(user => user.id === action.payload.id)
      if (!isUserAlreadyDefined) {
        return [...state, action.payload]
      }
    }
  }
})

export default usersSlice.reducer

export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions
