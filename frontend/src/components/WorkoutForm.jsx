import { useState } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [errorState, setErrorState] = useState(null);

  let emptyFields = errorState?.emptyFields;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch('/api/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(workout),
    });
    const json = await response.json();

    if (!response.ok) {
      setErrorState(json);
      emptyFields = [...json.emptyFields];
    }
    if (response.ok) {
      setErrorState(null);
      setTitle('');
      setLoad('');
      setReps('');
      emptyFields = [];
      dispatch({ type: 'SET_WORKOUT', payload: json });
    }
  };

  return (
    <form className='create' onSubmit={handleSubmit}>
      <label htmlFor='excersize-title'>Excersize Title:</label>
      <input
        type='text'
        id='excersize-title'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields?.includes('title') ? 'error' : ''}
      />
      <label htmlFor='excersize-load'>Load (in Kg):</label>
      <input
        type='number'
        id='excersize-load'
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields?.includes('load') ? 'error' : ''}
      />
      <label htmlFor='excersize-reps'>Reps:</label>
      <input
        type='text'
        id='excersize-reps'
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields?.includes('reps') ? 'error' : ''}
      />
      <button type='submit'>Add Workout</button>
      {errorState?.msg && <p className='error'>{errorState.msg}</p>}
    </form>
  );
};

export default WorkoutForm;
