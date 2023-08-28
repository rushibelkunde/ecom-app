
import { useEffect } from 'react';
import './App.css';

function App() {


  useEffect(()=>{

    const fetchData = async ()=>{
      const res = await fetch("https://my-json-server.typicode.com/rushibelkunde/ecom-app/db")

    const data = await res.json()
    console.log(data)

    }
    fetchData()
  },[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
