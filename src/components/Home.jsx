import React from 'react'
import Img from "../images/2-eyes-50-50.jpg"
import "./home.css"
import Slider from './Slider'
import list from './data'
import TakePic from './TakePic'
import InstaFeed from './InstaFeed'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
<>
     <div className='home-container'>
        <img className='home-img' src={Img} alt='' />
        <div className='order'>
        <h1 className='title'>გადააქციე შენი თვალი ხელოვნებად</h1>
        <Link className='order-btn' to="/order" >შეკვეთა</Link>
        </div>
      </div>
      <div className='slider'>
      <Slider slides={list} />
      </div>
       <div className='take-pic'>
        <TakePic />
        </div>
        <InstaFeed />
      </>
  )
}

export default Home;
