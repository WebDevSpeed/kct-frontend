import React from 'react'
import qamar from '@/public/images/qamar.jpg';
import Image from 'next/image';

function page() {
  return (
    <>
      <div className='py-20 max-w-6xl mx-auto '>
        <div className='border-4 border-blue-700 p-4 mx-10 rounded-lg lg:flex  gap-8'>
          <div className='mb-4'><Image src={qamar} alt="img" className="lg:w-[160rem]" width={720} /></div>
          <div>
            <h1 className='font-bold text-3xl mb-2'>Aalijanab Alhaj Qamar-ul-Islam Sahab</h1>
            <h3 className='text-gray-400 mb-4'>President</h3>
            <p className='text-justify mb-4'>Aalijanab Alhaj Qamar-ul-Islam Sahab being an Engineering Graduate preferred to start Technical Institutions keeping in view of the backwardness of the community from all points of view for the faster upliftment of the community in particular and the people in general, irrespective of caste and creed. So a polytechnic College is functioning since last 35 years very successfully and Trust has gone one step forward and very pleasantly ventured into start of KCT Engineering College in view of the above mentioned aims and objectives from the academic year 2001 – 2002.
            </p>
            <p className='text-justify mb-4'>
              Gulbarga is a Historical, Educational and Commercial city. It is a place of religious importance for all communities because of many Shrines and templates of Sufis & Saints. Historically, Gulbarga was a most important area in past days, during the regime of Bhamani Kingdom it was Capital City of Bhamani Kingdom.</p>
            <p className='border-l-4 border-blue-400 px-5 italic'>
              “The vital need of future generation is to take into account global issues for survival and an intention of joint ventures through whose eyes we can peep into the future laying special emphasis on technical education within permissible limits”.
            </p>
          </div>
        </div>
        <div className='border-4 border-blue-700 p-4 mx-10 rounded-lg lg:flex  gap-8 mt-6'>
          <div className='mb-4'><Image src="" alt="img" className="lg:w-[20rem]" width={220} /></div>
          <div>
            <h1 className='font-bold text-3xl mb-2'>Janab Mohammed Yousuf Sahab</h1>
            <h3 className='text-gray-400 mb-4'>Secretary</h3>
            <br />
            <p className='border-l-4 border-blue-400 px-5 italic'>
              “The aim of the institution is to provide not only best Engineer’s but also good citizens who can help their family, the nation in their march towards progress”.
            </p>
          </div>
        </div>
      </div>
    </>

  )
}

export default page
