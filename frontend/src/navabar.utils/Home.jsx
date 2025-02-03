import React from 'react'
import { Link } from 'react-router-dom';  
import { useState, useEffect} from 'react';
import Footer from '../components/Footer';


const AutoImageSlider = () => {
    const images = [
      '../image-media/Americano-Coffee.jpg',
      '../image-media/cappuccino.jpg',
      '../image-media/cofee.jpg',
      '../image-media/espresso.jpg',
      '../image-media/matcha_latte.webp',
      '../image-media/latte.jpg',
      '../image-media/Macchiato.webp'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
      // Set an interval to change the image every 3 seconds (3000ms)
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to the first image after last
      }, 2000);

      return () => clearInterval(interval);
    }, [images.length]);

    return (
      <div className="flex justify-center border-0 mx-2 lg:mx-48 py-10 lg:border-2">
    {/* Render the current image based on currentIndex */}
    <img 
      src={images[currentIndex]} 
      alt="Sliding" 
      className="rounded-xl object-cover w-100 h-[30rem] sm:h-[35rem]" 
    />
  </div>

    );
    
  };

  const coffeeProduct = [{
    id: 1,
    image: '../image-media/Americano-Coffee.jpg',
    name: 'Dreamy on Top',
    details: 'The new Creamy Pure Matcha Latte takes the matcha you know and love to new heights.',
    button: 'Sip, Sip, go'
  },{
    id: 2,
    image: '../image-media/Americano-Coffee.jpg',
    name: 'Comfort is Calling',
    details: 'Elevate the season with comforting bites and uplifting twists.',
    button: 'Explore'
  },{
    id: 3,
    image: '../image-media/Americano-Coffee.jpg',
    name: '2025 Zodiac and Lunar New Year',
    details: 'Fill your favorite drink and go wherever the day takes you.',
    button: 'See more'
  },{
    id: 4,
    image: '../image-media/Americano-Coffee.jpg',
    name: 'No time to head out?',
    details: 'Have your favorites delivered straight to your doorstep.',
    button: 'Learn More'
  }]




  const Home = () => {
    return (
      <div className=' flex flex-col'>
        <div className='relative flex items-start lg:block'>
            <img src="../image-media/background-image.png" alt="image" className='object-cover w-full h-[35rem]' />  
            <h1 className='absolute left-6 top-40 sm:left-60 font-semibold text-6xl font-sans'>Bring On The <br/>Bliss</h1>
            <button className='absolute left-7 top-72  sm:top-72 sm:left-60 text-xl  px-6 py-2 rounded-full bg-black text-white text-center  hover:opacity-70 transition-all duration-100 ms-1 ease-in-out'>
            <Link to="/menu" className="text-white">Discovery flavor</Link>
            </button>
          
        </div>
        
        <div className="w-[100rem] mx-auto border-b-2 border-gray-200 mt-14 shadow-2xl"></div>

        <div className='mt-10'>
          <div className='flex justify-center'>
            <h1 className='mb-10 text-2xl font-semibold font-sans'>coffee that we serve for you</h1>
          </div>
          <AutoImageSlider/>
        </div>  
        {/* mid section */}
        <div className="grid grid-cols-1 gap-16 mt-10 mx-5 lg:mx-40 flex-2 lg:grid-cols-2">
            {coffeeProduct.map((item , keyItem) => (
              <div key={keyItem} className={`bg-green-950 h-[550px] text-center font-sans ${item.id === 3 || item.id === 4 ? 'bg-[#D4E9E2] ': ''}`}>
                <img src={item.image } alt=""  className=' lg:w-[800px] lg:h-[350px] w-[962px] h-[340px]' />
                <h1 className={`text-2xl font-bold text-[#D4E9E2] my-5 ${item.id === 3 || item.id === 4 ? 'text-[#1E3932] ': ''}`}>{item.name}</h1>
                <p className={`text-md text-[#D4E9E2] ${item.id === 3 || item.id === 4 ? 'text-[#1E3932] ': ''}`}>{item.name}</p>
                <button className={`border mt-5 font-bold px-5 py-1 rounded-full text-[#D4E9E2]  
                hover:bg-[#c0c0c049] hover:bg-opacity-50 transition-all duration-200 ease-in-out ${item.id === 3 || item.id === 4 ? 'text-[#1E3932] border-black': ''}`}>
                  <Link to={item.id === 4 ? '/about' : '/menu'}>{item.button}</Link>
                  </button>

              </div>
                ))}
        </div>

          <div className='mt-10 flex justify-center flex-col lg:flex-row '>
              <div className='bg-[#FAF6EE] text-center font-sans flex justify-center px-10 flex-col lg:px-[78px]'>
                  <h1 className='text-3xl font-semibold mb-7'>Starbucks Stories</h1>
                  <p className='max-w-[400px] mx-10 sm:mx-56 lg:mx-5 mb-5'>Continuing to inspire and nurture the human spirit-one person, one cup and one neighborhood at a time.</p>
                  <button className='border px-6  mb-10 lg:mb-0 lg:mx-52 font-semibold border-black rounded-full mx-auto hover:bg-[#000000c0] hover:text-white transition-all duration-300'>
                   <Link to='/story'>Explore</Link> 
                    </button>
              </div>
              <div className='w-full lg:w-[750px] lg:h-[400px] overflow-hidden '>
                <img src="../image-media/Americano-Coffee.jpg" alt="" 
                className='w-full h-full object-cover' />
              </div>
          </div>

          {/* footer */}
          <div className='border mt-10'> </div>
          <div className='mb-10 overflow-hidden w-full'>      
              <Footer />
          </div>
      </div>
      
    )
  }

  export default Home
