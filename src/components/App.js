import React, { useReducer } from 'react';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers';
import Events from './Events';
import EventForm from './EventForm';
import 'bootstrap/dist/css/bootstrap.min.css';

console.log({AppContext});

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={'Test value'}>
      <div className='container-fluid'>
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
