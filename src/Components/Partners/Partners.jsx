import { useEffect, useRef } from "react";

import Swiper from "swiper";
import "swiper/css";


function Partners() {


    
    
    
   
      const swipperRef = useRef(null);
    
      useEffect(() => {
        if (swipperRef.current) {
          let swiperPopular = new Swiper(".popular__container", {
            loop: true,
            spaceBetween: 24,
            slidesPerView: 1,
            grabCursor: true,
    
            pagination: {
              el: ".swiper-pagination",
              dynamicBullets: true,
            },
    
            breakpoints: {
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 48,
              },
            },
          });
        }
      }, []);
    
      return (
        <div className=" pt-12  mx-auto" id="popular">
          <h2 className="text-center text-2xl py-8 text-gray-400 ">Our Partners</h2>
          
          <div ref={swipperRef} className="popular__container  swiper" data-aos="zoom-in" >
            <div className="swiper-wrapper px-3" >
            
              <article className="  swiper-slide max-w-[30vh]">
                <img src="https://portfolio.dotsoft.buzz/img/partnership/pt1.PNG" alt="Adon" />
              
              </article>
              <article className="  swiper-slide max-w-[30vh]">
                <img src="https://portfolio.dotsoft.buzz/img/partnership/pt2.PNG" alt="Sunny International" />
              
              </article>
              <article className="  swiper-slide max-w-[30vh]">
                <img src="https://portfolio.dotsoft.buzz/img/partnership/pt7.PNG" alt="Brain Storms station" />
              
              </article>
              <article className="  swiper-slide max-w-[30vh]">
                <img src="https://portfolio.dotsoft.buzz/img/partnership/pt6.PNG" alt="corner stripe" />
              
              </article>
              <article className="  swiper-slide max-w-[30vh]">
                <img src="https://portfolio.dotsoft.buzz/img/partnership/pt4.PNG" alt="Audacity" />
              
              </article>
              <article className="  swiper-slide max-w-[30vh]">
                <img src="https://portfolio.dotsoft.buzz/img/partnership/pt3.PNG" alt="Shooting Star Ltd" />
              
              </article>
              <article className="  swiper-slide max-w-[30vh]">
                <img src="https://portfolio.dotsoft.buzz/img/partnership/pt8.PNG" alt="Spring Devs" />
              
              </article>
              <article className="  swiper-slide max-w-[30vh]">
                <img src="https://portfolio.dotsoft.buzz/img/partnership/pt-10.png" alt="bitbyte technology" />
              
              </article>
             
    
           
            </div>
    
            <div className="swiper-pagination"></div>
          </div>
        </div>

  )
}

export default Partners