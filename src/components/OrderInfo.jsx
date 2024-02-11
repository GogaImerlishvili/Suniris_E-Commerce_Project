import React from 'react'
import img22 from "../assets/images/old-parchment-paper-ai-generative-free-photo.jpg"

const OrderInfo = () => {
  return (
    <div className='insturction'>
      <div className='take-pic-instruction'>
        <button className='take-pic'>
        თვალის ფოტოს გადაღების ინსტრუქცია
        </button>
        <div className="roman-scroll">
      <div className="scroll-content" style={{
          width:"550px",
          height:"405px",
          backgroundImage: `url(${img22})`,
          // backgroundSize: "cover",
          // margin:"22px"
          
        }}>
    
        <p>ვაბნელებთ ოთახს, სანათს ან ტელეფონის ფანარს მიინათებთ თვალის გვერდითა ჭრილიდან, რაც შეიძლება ახლოს მიიტანთ თვალთან რომ კარგად განათდეს, ვიყურებით კამერაში და არ ვიყენებთ კამერის შუქს, ვიღებთ ფოტოს რაც შეიძლება ახლო მანძილიდან.</p>
         <p> თვალის ირისი უნდა ჩანდეს მთლიანად, ეცადეთ ფართოდ გაახილოთ თვალი, ხელის დახმარებაც არ იქნება პრობლემა.</p>
        {/* Add more content as needed */}

      </div>
    </div>
      </div>
    </div>
  )
}

export default OrderInfo
