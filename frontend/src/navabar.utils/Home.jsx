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
    <div className="flex justify-center border-2 mx-48 py-10">
      {/* Render the current image based on currentIndex */}
      <img 
        src={images[currentIndex]} 
        alt="Sliding" 
        className=" rounded-xl object-cover w-100  h-[35rem]" 
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
      
      <div className="w-[100rem] mx-auto border-b-2 border-gray-200 mt-14 shadow-2xl"></div>

      <div className='mt-10'>
        <div className='flex justify-center'>
          <h1 className='mb-10 text-2xl font-semibold font-sans'>coffee that we serve</h1>
        </div>
        <AutoImageSlider/>
      </div>  
    </div>
    
  )
}

export default Home
