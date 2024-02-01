import React from 'react'
import "./rotate.scss"
import stage1 from "../../assets/images/IMG_4436.jpg"
import stage2 from "../../assets/images/IMG_4276.jpg"
import stage3 from "../../assets/images/IMG_4434.jpg"
import stage4 from "../../assets/images/IMG_4435.jpg"


const Rotate = () => {
  return (
    <div className='stage-cube-cont'>
        <div className='cubespinner'>
            <div className='face1'>
                <img className='stage1' src={stage1} alt="" />
            </div>
            <div className='face2'>
                <img className='stage1'  src={stage2} alt="" />
            </div>
            <div className='face3'>
                <img className='stage1'  src={stage3} alt="" />
            </div>
            <div className='face4'>
                <img className='stage1'  src={stage4} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Rotate
