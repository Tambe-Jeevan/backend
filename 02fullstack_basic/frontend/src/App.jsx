import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'

function App() {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
   axios.get('/api/joke')
   .then((res) => {
    setJoke(res.data);
   }
  )
   .catch((err) => console.log(err)
   )
  }
);

  return (
    <>
      <h1>Front End App</h1>
      <h3>Joke: {joke.length}</h3>
      
      {
       joke.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.jokename}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
