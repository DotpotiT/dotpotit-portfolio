import Image from "next/image";
// import { useEffect, useRef } from "react";

// import Swiper from "swiper";
// import "swiper/css";


function Partners() {


    
    
    
   
      // const swipperRef = useRef(null);
    
      // useEffect(() => {
      //   if (swipperRef.current) {
      //     let swiperPopular = new Swiper(".popular__container", {
      //       loop: true,
      //       spaceBetween: 24,
      //       slidesPerView: 1,
      //       grabCursor: true,
    
      //       pagination: {
      //         el: ".swiper-pagination",
      //         dynamicBullets: true,
      //       },
    
      //       breakpoints: {
      //         768: {
      //           slidesPerView: 2,
      //         },
      //         1024: {
      //           slidesPerView: 3,
      //           spaceBetween: 48,
      //         },
      //       },
      //     });
      //   }
      // }, []);
      
      return (
        <div className=" pt-12  mx-auto" id="popular">
          <h2 className="text-center text-2xl py-8 text-gray-400 ">Our Partners</h2>
          
         
            <div className=" px-1 flex flex-row max-w-full flex-wrap gap-2 lg:max-w-7xl lg:mx-auto" >
                <Image width={150} height={20} src="https://portfolio.dotsoft.buzz/img/partnership/pt6.PNG" alt="corner stripe" />
                <Image width={150} height={20} src="https://portfolio.dotsoft.buzz/img/partnership/pt7.PNG" alt="Brain Storms station" />
                <Image width={150} height={20} src="https://portfolio.dotsoft.buzz/img/partnership/pt2.PNG" alt="Sunny International" />
                <Image width={150} height={20} src="https://portfolio.dotsoft.buzz/img/partnership/pt1.PNG" alt="Adon" />
                <Image width={150} height={20} src="https://portfolio.dotsoft.buzz/img/partnership/pt-10.png" alt="bitbyte technology" />
                <Image width={150} height={20} src="https://portfolio.dotsoft.buzz/img/partnership/pt4.PNG" alt="Audacity" />
                <Image width={150} height={20} src="https://portfolio.dotsoft.buzz/img/partnership/pt8.PNG" alt="Spring Devs" />
                <Image width={150} height={20} src="https://portfolio.dotsoft.buzz/img/partnership/pt3.PNG" alt="Shooting Star Ltd" />
            
          </div>
        </div>

  )
}

export default Partners