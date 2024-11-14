import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt=""/>
            <p className='w-full md:w-2/3 text-gray-600'>
            Elevate your style with Style Fusion's expertly crafted pieces. Our designs blend trends and timeless elegance. Experience the fusion of fashion excellence. Stay informed about new arrivals, sales, and events.
            </p>

        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-grey-600'>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
           <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
           <ul className='flex flex-col gap-1 text-grey-600'>
            <li>+92 0310-4616637</li>
            <li>stylefusion@gmail.com</li>
           </ul>
        </div>

      </div>

         <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@HusnulmabHaider - All Rights Reserverd </p>

         </div>

    </div>
  )
}

export default Footer