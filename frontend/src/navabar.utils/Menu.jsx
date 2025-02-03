import React from 'react'
import { CiSearch } from "react-icons/ci";

const ProductItem = () => {
  const product = [{
    id: 1,
    image: '../image-media/matcha.png',
    feature: 'Feature Drink'
  }, {
    id: 2,
    image: '../image-media/matcha.png',
    feature: 'Brewed Coffee'
  }, {
    id: 3,
    image: '../image-media/matcha.png',
    feature: 'Espresso'
  }, {
    id: 4,
    image: '../image-media/matcha.png',
    feature: 'Blended Beverage'
  }, {
    id: 5,
    image: '../image-media/matcha.png',
    feature: 'Teavana Tea'
  }, {
    id: 6,
    image: '../image-media/matcha.png',
    feature: 'Chocolate & More'
  }];



  return (
      <div className='grid grid-cols-2 mt-5 mb-14'>
        {product.map((products) => (
        <div className='flex items-start mb-10 cursor-pointer'> 
          <div key={products.id} className=' w-[150px] rounded-full bg-green-50 overflow-hidden'>
            <img src={products.image} alt="" className='w-[150px] h-[150px] rounded-full transform hover:scale-[1.1] hover:translate-z-[5px] transition duration-300 ease-in-out'/>
          </div>
          <h1 className='text-xl ml-5 mt-14 font-sans text-[#000000b4] font-medium'>{products.feature}</h1>
        </div>
      ))}
      </div>
  );
};


const featureDrink = () => {




  return (
    <div>
      
    </div>
  );
};

const Menu = () => {
  return (
    <div>
      <div className='flex items-center w-full h-20 gap-24 m-auto bg-[#5a5a5a18]'>
        <h1 className='text-2xl font-bold font-sans text-center lg:ml-52 m-6'>Menu</h1>
        <label className='border-2 rounded-lg w-80 lg:flex items-center bg-white hidden'>
          <input type="text" placeholder='Search our drinks, food, coffee beans' className='p-2 rounded-md w-full h-full overflow-hidden'/>
          <CiSearch  className='ml-2 mr-2 text-black  cursor-pointer' size={30}/>
        </label>
      </div>
      <div className='flex mt-10 w-full'>
          <div className='ml-40 font-sans w-56'>
            <h3 className='mb-5 text-xl font-bold'>Drink</h3>
            <ul>   
              <li className=''>Featured Drinks</li>
              <li>Brewed Coffee</li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <div className='mb-10 '>
              <h1 className='text-2xl font-bold mb-2'>Feature Drink</h1>
              <div className='border rounded-lg border-[#44444421] w-[1200px]'></div>
              <div>
                <ProductItem />
              </div>
            </div>
            <div className='mb-10'>
              <h1 className='text-2xl font-bold mb-2'>Hot Coffee</h1>
              <div className='border rounded-lg border-[#44444421] w-[1200px]'></div>
              <div></div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Menu
