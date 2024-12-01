import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16 '>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex  flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est soluta iure officiis neque fuga distinctio alias ut quaerat beatae sit.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus esse reprehenderit magni repellat beatae laboriosam hic tempora iusto veritatis voluptates!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur at officiis aliquid minus officia ea unde vitae natus incidunt totam?</p>
          </div>
          </div>
          <div className='text-4xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'}/>

            <div className='flex flex-col md:flex-row text-sm mb-20'>
              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance:</b>
                <p className='text-gray-600'>with our user-friendly interface and hassle free ordering process , shopping</p>
              </div>

              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p>with our user-friendly interface and hassle free ordering process , shopping</p>
              </div>

              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service:</b>
                <p>with our user-friendly interface and hassle free ordering process , shopping</p>
              </div>
            </div>

            <NewsLetterBox/>
            
          </div>
    </div>

  )
}

export default About