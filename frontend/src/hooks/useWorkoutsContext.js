import { useContext } from 'react';
import { WorkoutsContext } from '../contexts/WorkoutsContext';

export function useWorkoutsContext() {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error(
      'useWorkoutsContext must be used inside an WorkoutsContextProvider'
    );
  }
  return context;
}
