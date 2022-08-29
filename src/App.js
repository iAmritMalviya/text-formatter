import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React,{useState} from 'react'
import Alert from "./components/Alert";
import About from "./components/About";
import Footer from "./components/Footer";
import Typewriter from "typewriter-effect";
// import { BrowserRouter } from "react-router-dom";
// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Privacy from "./components/Privacy";


function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enable Dark Mode")
  const [alert, setAlert] = useState(null)
  const togglemode = () =>
  {
    if (mode==="light") {
      setMode("dark");
      setText("Enable Light Mode");
      document.body.style.background = "#282e34";
      showAlert("success", "Dark Mode Has Been Enabled");

    }
    else
    {
      setMode("light");
      setText("Enable Dark Mode");
      document.body.style.background = "#FBFBFD";
      showAlert("success", "Light Mode Has Been Enabled");
    }
  }
  const showAlert=(type,message)=>
  {
   setAlert({
     type:type,
     msg:message,
   })
   setInterval(() => {
     setAlert(null)
   }, 1500);
  }


  
  return (
   <>
  
          <BrowserRouter>
         <Navbar title="Textutils" home="Home" about="About" privacy="Privacy" mode={mode} text={text} togglemode={togglemode}/>
         <Alert alert={alert}/>
            <div className="container my-3">
            <Routes>    
               <Route path="/Textutils" element={ <Textform mode={mode} alert={alert} showAlert={showAlert} />}/>
            
               <Route path="/Textform" element={ <Textform mode={mode} alert={alert} showAlert={showAlert} />}/>
              
                <Route path="/About"  element={ <About mode={mode }  />} />
                <Route path="/Privacy"  element={ <Privacy  mode={mode}   />} />
             
            </Routes>
            </div>
            {/* <Typewriter
 
 
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("GeeksForGeeks this is me")
         
       .pauseFor(1000)
       .deleteChars(10)
       .typeString("GeeksForGeeks this is me")
       .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
       .deleteChars(10)

  .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
  .deleteChars(10)
   
       .start();
       }}
 
       /> */}
   

       <Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
    pauseFor: 1000,
   
  
  }}
/>
          </BrowserRouter>,
          <Footer  mode={mode} />
        
    
     
     {/* <Textform mode={mode} alert={alert} showAlert={showAlert} /> */}
    
   </>
  );
}

export default App;
