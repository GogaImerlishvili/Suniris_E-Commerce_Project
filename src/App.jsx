import React from 'react';
import {Home,Contact,Loginform,Privacy,Signup,Navbar,Footer,Order} from './components/index';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import "./index.css"
const App = () => {

    
  return (
    <>
   <Router>
   <Navbar />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/order' element={<Order/>} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/loginform' element={<Loginform />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        </Routes>  
   </Router>
   <Footer />
    </>
  )
} 

export default App;


