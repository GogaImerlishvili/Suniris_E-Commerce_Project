import React from 'react';
import {Home,Contact,Loginform,Privacy,Signup,Navbar,Footer,Order} from './components/index';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import CartForm from './components/CartForm';
import JewelleryCartForm from './components/JewelleryCartForm';
import BagsCartForm from './components/BagsCartForm';
import "./index.css"
const App = () => {

    
  return (
    <>
   <Router>
   <Navbar />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/order' element={<Order/>} />
        <Route path='/jewellery' element={<JewelleryCartForm />} />
        <Route path='/posters' element={<CartForm />} />
        <Route path='/bags' element={<BagsCartForm />} />
        <Route path='/signup' element={<Signup />} />
        </Routes>  
   </Router>
   <Footer />
    </>
  )
} 

export default App;


