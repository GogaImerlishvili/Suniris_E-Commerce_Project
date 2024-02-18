import React from 'react'
import img22 from "../assets/images/old-parchment-paper-ai-generative-free-photo.jpg"
import paperImg from "../assets/video/structure-old-paper-5336220.webp"
import "./orderinfo.css";
const OrderInfo = () => {
  return (
    <div className='insturction'>
      <div className='take-pic-instruction'>
        <div className="change-color">
        <h1 className='take-pic-title'>
        თვალის ფოტოს გადაღების ინსტრუქცია
        </h1>
       <p> <strong>I.</strong>ვაბნელებთ ოთახს, სანათს ან ტელეფონის ფანარს მიინათებთ თვალის გვერდითა ჭრილიდან, რაც შეიძლება ახლოს მიიტანთ თვალთან რომ კარგად განათდეს, ვიყურებით კამერაში და არ ვიყენებთ კამერის შუქს, ვიღებთ ფოტოს რაც შეიძლება ახლო მანძილიდან.</p>
         <p><strong>II.</strong> თვალის ირისი უნდა ჩანდეს მთლიანად, ეცადეთ ფართოდ გაახილოთ თვალი, ხელის დახმარებაც არ იქნება პრობლემა.</p>
        {/* Add more content as needed */}

        </div>
      </div>
    </div>
  )
}

export default OrderInfo
