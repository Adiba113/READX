import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
function Freebook() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    const filterData = list.filter((data)=> data.category === "Free");
    console.log(filterData)
  return (
   
    <>   
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <h1 className="font-semibold text-xl pb-2">
            Free Offerd Books
        </h1>
        <p>
            Books to read without purchasing or downloading
        </p>
    </div>
    </>
   
  )
}

export default Freebook