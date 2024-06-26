import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


export default function Card(props) {
    let review=props.reviews;
  return (
    <div className='flex flex-col md:relative'>
        <div className='absolute top-[-7rem] z-[10] mx-auto'>
            <img className='aspect-square rounded-full w-[140px] h-[140px] z-25' src={review.image}/>
            <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-1] left-[10px]'></div>
        </div>
        <div className='text-center mt-7'>
            <p className='tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
        </div>
        <div>
            <p className='uppercase text-violet-400 text-sm'>{review.job}</p>
        </div>
        <div className='mx-auto mt-5 text-violet-500'>
        <FaQuoteLeft />
        </div>
        <div className='text-center mt-4 text-slate-500'>
            {review.text}
        </div>
        <div className='mx-auto mt-5 text-violet-500'>
        <FaQuoteRight />
        </div>
        
    </div>
  )
}
