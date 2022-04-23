import { useEffect, useState } from 'react';
import './App.css';

function App() {
   const [joke, setJoke] = useState('');

   useEffect(() => {
      // fetchJoke makes an API call -> async
      const fetchJoke = async () => {
         await fetch(
            `http://api.icndb.com/jokes/random`
         )
            .then(res => res.json())
            .then(data => {
               // console.log(data.value.joke);
               setJoke(data.value.joke)
            })
      }

      fetchJoke();
   }, [])

   return (
      <div className="App">
         <h1>Joke generator</h1>
         <button>Generate joke</button>
         <p>{joke}</p>
      </div>
   );
}

export default App;
