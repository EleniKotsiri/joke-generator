import './App.css';
import useRandomJoke from './useRandomJoke';

function App() {
   const joke = useRandomJoke('Eleni', 'Kotsiri')

   return (
      <div className="App">
         <h1>Joke generator</h1>
         <button>Generate joke</button>
         <p>{joke}</p>
      </div>
   );
}

export default App;
