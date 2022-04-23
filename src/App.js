import { useState } from 'react';
import './App.css';
import useRandomJoke from './useRandomJoke';

function App() {
   const joke = useRandomJoke('Eleni', 'Kotsiri');

   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');

   const generateJoke = (e) => {
      e.preventDefault();
   }

   return (
      <div className="App">
         <h1>Joke generator</h1>
         <form>
            <input placeholder="First name" value={firstName} onChange = {(e) => setFirstName(e.target.value)} />
            <input placeholder="Last name" value={lastName} onChange = {(e) => setLastName(e.target.value)} />
            <button onClick={generateJoke}>Generate joke</button>
         </form>
         <p>{joke}</p>
      </div>
   );
}

export default App;
