import { useState } from 'react'
import axios from 'axios'
import './app.css'

function App() {
  const [quote, setQuote] = useState('')

  const apiKey = 'NQE55XjcGZTghTBVmVioSw==BaPSN8fqiIvjJNJf';
  const url = 'https://api.api-ninjas.com/v1/jokes?limit=1'; 


  const getQuote = async () => {
    try {
      const response = await axios.get(url, {
        headers: { 'X-Api-Key': apiKey }
      });
      console.log(response.data);
      setQuote(response.data[0].joke);
    } catch (err) {
      console.log(err.message);
    }
  };


  return (
    <>
    <div className='container'>
    <button className='btn' onClick={getQuote}>Get a random joke!</button>
    <p>{quote}</p>
    </div>
    </>
  )
}

export default App
