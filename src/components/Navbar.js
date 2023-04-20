import React,{useState} from 'react'
import Alert from './Alert';
import TextForm from './TextForm';
import About from './About'
import Test from './Test';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Navbar(props) {
  
  // Color, Mode
  const [color, setColor] = useState("white");
  const [mode, setmode] = useState("light")
  document.body.style.backgroundColor = color;

  // Alert
  const [alert, setalert] = useState(null)
  
  const showAlert = (type, message)=>{
    setalert({
      typ: type,
      msg: message
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  return (
    <>
  <Router>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode ==="light"?"light":"dark"} bg-${props.mode ==="light"?"light":"dark"}`} style={{paddingBottom: 2,paddingTop: 2}}>
  <div className="container-fluid">
    
    <Link className="navbar-brand" to="/">TextUtils</Link>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/test">Test</Link>
        </li>
      </ul>

    <div className="form-check form-switch" >
      <input style={{backgroundColor: "white",borderRadius: "50%",height:"20px",width:"20px", border: "none",marginLeft:12,cursor:'pointer'}} onClick={()=>{setColor("white");setmode("light")}} readOnly/>
        
      <input style={{backgroundColor: "#373e98",borderRadius: "50%",height:"20px",width:"20px", border: "none",marginLeft:12,cursor:'pointer'}} onClick={()=>{setColor("#373e98");setmode("dark")}} readOnly/>
        
      <input style={{backgroundColor: "#f16775",borderRadius: "50%",height:"20px",width:"20px", border: "none",marginLeft:12,cursor:'pointer'}} onClick={()=>{setColor("#f16775");setmode("dark")}} readOnly/>
        
      <input style={{backgroundColor: "#c29591",borderRadius: "50%",height:"20px",width:"20px", border: "none",marginLeft:12,cursor:'pointer'}} onClick={()=>{setColor("#c29591");setmode("dark")}} readOnly/>

      <input style={{backgroundColor: "#b999be",borderRadius: "50%",height:"20px",width:"20px", border: "none",marginLeft:12,cursor:'pointer'}} onClick={()=>{setColor("#b999be");setmode("dark")}} readOnly/>

      <input style={{backgroundColor: "#703f37",borderRadius: "50%",height:"20px",width:"20px", border: "none",marginLeft:12,cursor:'pointer'}} onClick={()=>{setColor("#703f37");setmode("dark")}} readOnly/>
        
      <input style={{backgroundColor: "#b6c199",borderRadius: "50%",height:"20px",width:"20px", border: "none",marginLeft:12,cursor:'pointer'}} onClick={()=>{setColor("#b6c199");setmode("dark")}} readOnly/>
      
    </div>
    </div>
  </div>
</nav>

      <Alert alert={alert}/>
      <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<TextForm mode={mode} color={color} showAlert={showAlert}/>}/>
          <Route path='/test' element={<Test/>}/>
        </Routes>
 </Router>
</>
  )
}

