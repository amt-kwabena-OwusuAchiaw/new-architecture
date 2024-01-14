import Image from 'next/image'
import React from 'react'
import googleImage from "../../assets/images/Google logo.png"
import { buttonProps } from '@/types'
export default function Button({image, hasImage, name , buttonStyle, imageStyle}:buttonProps) {
  return (
    <div >

    <button className={`cursor-pointer ${buttonStyle}`} >
       {hasImage && <Image  src={image?image:''} alt={name}  className={imageStyle}/>}  {name} </button> 

    </div>
  )
}
