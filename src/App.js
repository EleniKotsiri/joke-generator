import { useRef, useState } from 'react';
import './App.css';
import useRandomJoke from './useRandomJoke';

function App() {
   // useRef, which points at nothing (null) when we initialize it.
   const firstNameRef = useRef(null)
   const lastNameRef = useRef(null)


   const [firstName, setFirstName] = useState('Eleni');
   const [lastName, setLastName] = useState('Kotsiri');
   
   // custom hook
   const joke = useRandomJoke(firstName, lastName);


   const generateJoke = (e) => {
      e.preventDefault();
      setFirstName(firstNameRef.current.value);
      setLastName(lastNameRef.current.value);
   }

   return (
      <div className="App">
         <h1>Joke generator (grab something warm, they're bad)</h1>

         <form>
            <input placeholder="First name" ref={firstNameRef} />
            <input placeholder="Last name" ref={lastNameRef} />
            <button onClick={generateJoke}>Generate joke</button>
         </form>

         <p>{joke}</p>
      </div>
   );
}

export default App;
