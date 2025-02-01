import React from 'react'
import { Link } from 'react-router-dom';  
import { useState, useEffect} from 'react';



const AutoImageSlider = () => {
  const images = [
    '../image-media/Americano-Coffee.jpg',
    '../image-media/cappuccino.jpg',
    '../image-media/cofee.jpg',
    '../image-media/espresso.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    // Set an interval to change the image every 3 seconds (3000ms)
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to the first image after last
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex justify-center rounded-full ">
      {/* Render the current image based on currentIndex */}
      <img 
        src={images[currentIndex]} 
        alt="Sliding" 
        className=" rounded-lg object-cover w-50 h-[35rem]" 
      />
    </div>
  );
  
};




const Home = () => {
  return (
    <div className='h-[1000vh] flex flex-col'>
      <div className='relative flex items-start lg:block'>
          <img src="../image-media/background-image.png" alt="image" className='object-cover w-full h-[35rem]' />  
          <h1 className='absolute top-32 sm:top-40 sm:left-60 font-semibold text-6xl font-sans'>Bring On The Bliss</h1>
          <button className='absolute block top-64  sm:top-60 sm:left-60 text-xl  px-6 py-2 rounded-full bg-black text-white text-center hover:bg-[#6e2c00] transition-all duration-100 ms-1 ease-in-out'>
          <Link to="/menu" className="text-white">See Menu</Link>
          </button>
        
      </div>

      <div className='mt-10'>
        <AutoImageSlider/>
      </div>  
    </div>
    
  )
}

export default Home
