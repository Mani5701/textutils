import "./App.css";

import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
// import About from "./components/About";
import React, {useState} from 'react';
import Alert from "./components/Alert";




function App() {
  const [mode, setMode] = useState('light');

  const [alert , setAlert] = useState(null);

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert('Dark Mode Has Been Enabled', 'success');
    }else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert('Light Mode Has Been Enabled', 'success');
    }
  }

  const showAlert = (message,type)=>{
    setAlert ({
      msg : message,
      type : type  
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    
    <>
     <Navbar  mode={mode}  toggleMode= {toggleMode} />
     <Alert alert={alert}/>
    <div className="container my-3">
      <Textarea heading="Enter The Text Below To Analyze" mode={mode} showAlert = {showAlert}/>
      {/* <About /> */}
     </div> 
     </> 

  );
}

export default App;
