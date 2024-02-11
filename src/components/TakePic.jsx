import React,{useState} from 'react'
import "./takepic.css"
import Img11 from "../assets/images/unnamed (1).jpg"
import Img2 from "../assets/images/IMG_4276.jpg"
import Img3 from "../assets/images/unnamed.jpg"
import video1 from "../images/Black and Grey Aesthetic Dark GIrl Phone Wallpaper.mp4"
import UnfoldMoreDoubleIcon from '@mui/icons-material/UnfoldMoreDouble';
import Img1 from "../images/MVI_8743_vsnsik.jpg"
import img22 from "../assets/images/old-parchment-paper-ai-generative-free-photo.jpg"
import Rotate from './divanimation/Rotate'
import paperImg from "../assets/video/structure-old-paper-5336220.webp"

import { height, margin } from '@mui/system'
const TakePic = () => {
  const [isVisible,setIsvisible] = useState(false);
  const toggleVisibility = () => {
    setIsvisible(!isVisible)
  }

  return (
  <>
        <div className='pictures-container'>
            <div className='picture'>
            <img className='image top-left' src={Img11} alt="" />
            <img className='image top-right' src={Img2} alt="" />
            <img className='image bottom-left' src={Img3} alt="" />
           <img className="image bottom-right" src={Img1} alt="" />
      
       
        </div>
  
        <div className='button-div'>
            <button className="button" onClick={toggleVisibility}>თვალის ფოტოს გადაღების ინსტრუქცია</button>
{/* Test */}
{isVisible && <div className="roman-scroll">
      <div className="scroll-content" style={{
          width:"550px",
          height:"405px",
          backgroundImage: `url(${paperImg})`,
          backgroundSize: "cover",
          // margin:"22px"
          
        }}>
       
        <p><strong>I.</strong>ვაბნელებთ ოთახს, სანათს ან ტელეფონის ფანარს მიინათებთ თვალის გვერდითა ჭრილიდან, რაც შეიძლება ახლოს მიიტანთ თვალთან რომ კარგად განათდეს, ვიყურებით კამერაში და არ ვიყენებთ კამერის შუქს, ვიღებთ ფოტოს რაც შეიძლება ახლო მანძილიდან.</p>
         <p><strong>II.</strong> თვალის ირისი უნდა ჩანდეს მთლიანად, ეცადეთ ფართოდ გაახილოთ თვალი, ხელის დახმარებაც არ იქნება პრობლემა.</p>
        {/* Add more content as needed */}

      </div>
    </div>}
    {!isVisible && <Rotate />}
   


{/*                 
        <div className='text'>
                  {isVisible && <p className='title-insturction1'><UnfoldMoreDoubleIcon className="desc-icon" /> ვაბნელებთ ოთახს, სანათს ან ტელეფონის ფანარს მიინათებთ თვალის გვერდითა ჭრილიდან, რაც შეიძლება ახლოს მიიტანთ თვალთან რომ კარგად განათდეს, ვიყურებით კამერაში და არ ვიყენებთ კამერის შუქს, ვიღებთ ფოტოს რაც შეიძლება ახლო მანძილიდან.</p>}
        {isVisible && <p className='title-instruction2'><UnfoldMoreDoubleIcon className="desc-icon" /> თვალის ირისი უნდა ჩანდეს მთლიანად, ეცადეთ ფართოდ გაახილოთ თვალი, ხელის დახმარებაც არ იქნება პრობლემა.</p>}

        </div> */}
            </div>
        </div>
     
            {/* <div className='instagram' > */}

{/*          
            {/* <div class="elfsight-app-0044f8bd-fb06-4bfe-acb2-8ed66e151212" data-elfsight-app-lazy></div> */}
            {/* </div> */}
        {/* <div className='picture2'>
            <img src={Img11} alt="" />
            <button className='button'>bf</button>
            </div> */}
          {/* <div className="elfsight-app-0044f8bd-fb06-4bfe-acb2-8ed66e151212" data-elfsight-app-lazy></div>  */}
        </>
  )
}

export default TakePic
