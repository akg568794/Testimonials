import React,{useState} from 'react'
import Card from "./Card"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Testimonials(props) {
  let review=props.reviews;
  const [index,setIndex]=useState(0);
  function leftShiftHandler(){
    if(index-1<0){
      setIndex(review.length-1);
    }
    else{
      setIndex(index-1);
    }
  }
  function rightShiftHandler(){
    if(index+1>=review.length){
      setIndex(0);
    }
    else{
      setIndex(index+1);
    }
  } 
  function surpriseHandler(){
    let randomIndex=Math.floor(Math.random()*review.length);
    setIndex(randomIndex);
  }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-200 hover:shadow-lg rounded-md'>
       <Card reviews={review[index]}/>
       <div className='mx-auto text-3xl mt-9 text-violet-500 gap-5 font-bold'>
            <button onClick={leftShiftHandler} className='cursor-pointer hover:text-violet-300'><IoIosArrowBack /></button>
            <button onClick={rightShiftHandler} className='cursor-pointer hover:text-violet-300'><IoIosArrowForward /></button>
        </div>
        <div className=' mx-auto bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-3 m-4 font-bold rounded-md text-white'>
            <button onClick={surpriseHandler}>Surprise Me</button>
        </div>
       
    </div>
  )
}
