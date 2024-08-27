import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Clock from './components/Clock';

function App() {
  const [advice, setAdvice] = useState("");
  //const [btnclicked, setbtnclicked] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  const apiBaseUrl = process.env.REACT_APP_ADVICE_API_URL;

  const fetchAdvice = async () => {
    try {
      setisLoading(true)
      const { data, status } = await axios.get(apiBaseUrl);
      setisLoading(false)
      if (status === 200) {
        console.log("status is : ", status);
        console.log("data is: ", data.slip.advice);
        setAdvice(data?.slip?.advice);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  },[]); 



  return (

    
    <div class="screen">
      <span class="clock"> <Clock/></span>
    
    <div className="advice">

    {isLoading?"Loading...":  <div>
      {advice} 
    </div> }
    </div>
  
    <div><button class = "btn "onClick={fetchAdvice}> Get advice!</button></div>
    <span class="footer">
      &copy; Akshay 
    </span>
    </div>
  );
}

export default App;
