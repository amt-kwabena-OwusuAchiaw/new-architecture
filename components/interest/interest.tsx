"use client"
import { Button } from '..';
import addIcon from "../../assets/icons/add.svg"
import selectedWhite from "../../assets/icons/add  white.svg"
import { useState } from 'react';
import { interestComponentProps } from '@/types';

export default function Interest({setImageState,setStep,setActiveComponent,selectedOption, selected}: interestComponentProps) {


 const handleInterest =() =>{

  if(selected){
    setActiveComponent("ExtraInterest");
    setStep(4);
    setImageState("ExtraInterest");
  }
  else{
    alert("Can't leave the select option empty")
  }
 }

  return (
    <div>
        <p className='mt-[3.97rem] text-[2.0375rem] font-semibold text-center'> Hey there! What brings you here?</p>
        <p className='text-center mt-[1.44rem]'> This will help us make great <br/> recommendations.</p>
   
        <div className="flex justify-between flex-col h-[51.5vh]">
            <div className='flex justify-center items-center flex-col gap-[1.5rem] mt-[0.87rem]'>
                <div onClick={()=>selectedOption("social Interaction")}>
                <Button hasImage={true} 
                 image={selected==="social Interaction"?selectedWhite:addIcon}
                 buttonStyle={selected==="social Interaction"?"socials-active" :'socials-not-active'}
                name='Social Interaction'
                />
                </div>
                  <div onClick={()=> selectedOption("Personal Development")}>
                  <Button hasImage={true} 
               image={selected==="Personal Development"?selectedWhite:addIcon}
               buttonStyle={selected==="Personal Development"?"socials-active" :'socials-not-active'}
                name='Personal Development'
                />
                </div>
                <div onClick={()=> selectedOption("Entertainment")}>
                  <Button hasImage={true} 
                 image={selected==="Entertainment"?selectedWhite:addIcon}
                 buttonStyle={selected==="Entertainment"?"socials-active" :'socials-not-active'}
                name='Entertainment and Fun'
                />
                </div>
                <div onClick={()=> selectedOption("Rewards")}>
                  <Button hasImage={true} 
                image={selected==="Rewards"?selectedWhite:addIcon}
                buttonStyle={selected==="Rewards"?"socials-active" :'socials-not-active'}
                name='Rewards and Recognition'
                />
                </div>
            </div>

            <div className='flex justify-center items-center' onClick={()=> handleInterest()}>
              <Button hasImage={false}  name="continue" buttonStyle='text-[1rem] bg-deep-blue text-white  w-[14.5rem] h-[2.25rem] rounded-[0.25rem]'/>
              </div>
          </div>
    </div>
  )
}
