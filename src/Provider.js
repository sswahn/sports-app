
import { createContext, useReducer } from 'react'

export const Context = createContext([])

export default function Provider({ children }) {
  const data = {
    drill: undefined
  }
  const reducer = (state, action) => {
    switch(action.type) {
      case 'drill':
        return { ...state, drill: action.payload }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, data)
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}
