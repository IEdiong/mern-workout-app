import { createContext, useReducer } from 'react';

export const WorkoutsContext = createContext();

export function WorkoutsContextProvider({ children }) {
  const [state, dispatch] = useReducer(WorkoutsReducer, { workouts: null });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
}

function WorkoutsReducer(state, action) {
  switch (action.type) {
    case 'GET_WORKOUTS':
      return {
        workouts: [...action.payload],
      };
    case 'SET_WORKOUT':
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case 'DELETE_WORKOUT':
      return {
        workouts: state.workouts.filter((w) => w._id !== action.payload._id),
      };

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
