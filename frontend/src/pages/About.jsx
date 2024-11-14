import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Style Fusion, where fashion meets innovation. We're a clothing brand that redefines style, blending cutting-edge designs with timeless elegance. 
          </p>
          <p>At Style Fusion, we believe fashion is art. Our story began with a passion for creativity and a vision to inspire.Join our journey, where style meets self-expression.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Style Fusion was born from a dream to bring people together through fashion. Our clothing tells stories of individuality, resilience, and hope. We're not just a brand – we're a community that celebrates diversity and self-expression.</p>
        </div>

      </div>
        <div className='text-2xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>"Style Fusion promises uncompromising quality, combining premium materials, precise craftsmanship, and meticulous attention to detail."
            </p>
           </div>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>
            "Experience seamless shopping with Style Fusion: easy returns, secure checkout, fast shipping, and 24/7 support."
            </p>
           </div>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>
            - "30-day returns and exchanges"
            - "Free shipping on orders over [$X]"
            - "Dedicated stylists for personalized advice"
            - "Multilingual support"
            </p>
           </div>
        </div>
        <NewsletterBox/>
    </div>
  )
}

export default About