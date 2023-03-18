import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [response, setresponse] = useState([]);





   const fetchData =()=>{ 
    return axios.get('http://localhost:5001/weather')
          .then((response)=>setresponse(response.data));
    
}
  useEffect(() => {
    fetchData();
  },[])
  // console.log(response);

  return(
    <div>
      {response.map((w)=>(
        <div key={w.id}>{w.temperature}C   {w.humidity}g/m3   {w.pressure}Pa   {w.timestamp}</div>
        
      ))}
    </div>
  )
  
}




export default App;
