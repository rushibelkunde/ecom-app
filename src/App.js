
import { useEffect } from 'react';
import './App.css';

function App() {


  useEffect(()=>{

    const fetchData = async ()=>{
      const res = await fetch("https://my-json-server.typicode.com/rushibelkunde/ecom-app/products",{
        method: "POST",
        body : JSON.stringify({id: 101, name: "Rushikesh"}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      console.log(res)

    const data = await res.json()
    console.log(data)

    }
    fetchData()
  },[])
  return (
    <div className="App">

      <h1>App</h1>
      
    </div>
  );
}

export default App;
