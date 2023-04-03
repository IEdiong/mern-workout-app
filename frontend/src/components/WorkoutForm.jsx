import { useState } from 'react';

const WorkoutForm = () => {
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);

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
      setError(json.msg);
    } else {
      setError(null);
      setTitle('');
      setLoad('');
      setReps('');
      console.log(`Workout added: ${json}`);
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
      />
      <label htmlFor='excersize-load'>Load (in Kg):</label>
      <input
        type='number'
        id='excersize-load'
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label htmlFor='excersize-reps'>Reps:</label>
      <input
        type='text'
        id='excersize-reps'
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button type='submit'>Add Workout</button>
      {error && <p className='error'>{error}</p>}
    </form>
  );
};

export default WorkoutForm;
