import './App.css';
import {useEffect, useState} from 'react'


const apiURL='https://api.api-ninjas.com/v1/dadjokes?limit=1';
const apiKey='itFHQwuJtKwN1zz9HC2rPg==ObsXt6bqFxRITwoj';

function App() {

const [getData, setGetData] = useState([]);

console.log(getData,'-----');

const option ={
  method:'GET',
  headers: { 
    'X-Api-Key': apiKey
  },
};

const makeAPICall= async () => {
  try{
    const response = await fetch(apiURL,option)
    const result =  await response.json();
    setGetData(result[0].joke)

  }catch(err){
    console.log(err.message)
  }
}

useEffect(() => {
  if(getData!=''){
    makeAPICall();
  }
}, []);


  return (
    
    <div className="App">
      <header className="App-header">
        <h1 className="heading">Hey Raj...!</h1>
        <p className="para" id="replaceText">{getData!='' ? getData : 'Let`s Have some fun...!'}</p>
        <button className="btn" onClick={makeAPICall} >Get a Joke</button>
      </header>
    </div>
  );
}

export default App;
