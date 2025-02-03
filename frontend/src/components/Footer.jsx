import React from 'react'

const footComponent = [{
    id: 1,
    Head:'About Us',
    Tail: ['Our Company', 'Stories and News', 'Customer Servies', 'Careers']
}, {
    Head:'Order Online',
    Tail: ['Order on the App', 'Delivery', 'Send eGifts', 'Grab Partnership']
},{
    Head: 'Reward',
    Tail: ['My Account', 'View Transactions', 'Reload', 'FAQs']
}, {
    Head: 'Social Impact',
}, {
    Head: 'Promotion'
}];

const Footer = () => {
  return (
    <div className='mt-10 px-0'>
        <div className='flex flex-col justify-center lg:flex-row overflow-hidden'>
            {footComponent.map((items, index) => (
            <div key={index} className={`flex flex-col w-full ${items.id === 1 ? 'md-0  lg:ml-52 ' : ''}`}>
                <h3 className='font-bold mb-5 lg:text-left text-xl sm:text-center md:text-center w-full md:w-auto'>{items.Head}</h3>
                {items.Tail && (
                    <ul className=''>
                        {items.Tail.map((subItem, subIndex) => (
                            <li key={subIndex} className='text-[#0000009a] sm:text-center  lg:text-left mb-3 text-md hover:text-gray-950 cursor-pointer transition duration-75 ease-in-out'>
                            {subItem}
                            </li>                          
                        ))}
                    </ul>
                )}
            </div>
            ))}
        </div>
    </div>
  )
}

export default Footer