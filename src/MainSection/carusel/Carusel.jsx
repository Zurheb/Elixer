import { Button, Carousel } from "@material-tailwind/react";
import Zoom from 'react-reveal/Zoom';
export function MyCarousel() {
  return (
    <Carousel  loop={true} autoplay={true} transition={{ duration: 2 }} className="">
    
      <div style={{ backgroundImage: "url('https://www.sport-interfax.ru/ftproot/photos/photostory/2022/04/29/week/week7_1100.jpg')" }} className="h-[680px] bg-cover bg-center">
        <div className=" w-[400px] absolute top-1/3  text-center  left-20 text-white">
         <Zoom>
          <h1 className=" text-4xl font-bold mb-4">Expert Consultants</h1>
          <p className="  text-lg mb-8">Over 10 years of experience in helping clients finding comprehensive solutions.</p>
          <div className=" flex justify-center gap-5">
          <Button color="lightBlue" ripple="light">Learn More</Button>
          <Button color="amber">Contact us</Button>
          </div>
        </Zoom>
        </div>
      </div>
      <div style={{ backgroundImage: "url('https://static-cse.canva.com/blob/846900/photo1502082553048f009c37129b9e1583341920812.jpeg')" }} className="h-[680px] bg-cover bg-center">
        <div className=" w-[400px] absolute top-1/3  text-center  left-20 text-white">
        <Zoom>

       
          <h1 className=" text-4xl font-bold mb-4">Expert Consultants</h1>
          <p className="  text-lg mb-8">Over 10 years of experience in helping clients finding comprehensive solutions.</p>
          <div className=" flex justify-center gap-5">
          <Button color="lightBlue" ripple="light">Learn More</Button>
          <Button color="amber">Contact us</Button>
          </div>
          </Zoom> 
        </div>
      </div>
      <div style={{ backgroundImage: "url('https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg')" }} className="h-[680px] bg-cover bg-center">
        <div className=" w-[400px] absolute top-1/3  text-center  left-20 text-white">
        <Zoom>
          <h1 className=" text-4xl font-bold mb-4">Expert Consultants</h1>
          <p className="  text-lg mb-8">Over 10 years of experience in helping clients finding comprehensive solutions.</p>
          <div className=" flex justify-center gap-5">
          <Button color="lightBlue" ripple="light">Learn More</Button>
          <Button color="amber">Contact us</Button>
          </div>
          </Zoom>
        </div>
      </div>
    </Carousel>
  );
}
