"use client"
import { inputProps } from "@/types";
import Image from "next/image";
import smile_emoji  from "../../assets/icons/smile.svg"
import { useState } from "react";

export default function Input({name,type,placeholder, value, onChange, classStyle, label}:inputProps) {


  return (
    <div>
      <label className="text-thin-gray font-[400] text-shadow text-[1rem] custom-letter-spacing custom-line-height">
        {label}
      </label>
      <br />
     <div className="relative">
     <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className=" mt-[0.44rem] border border-custom-gray rounded-[0.25rem] shadow-input-shadow pl-4 py-1 w-[18.75rem] mb-[1.44rem] h-[2.5rem]"
        placeholder={placeholder}
    
      />
      { name==="email" && value?.length!<1 && <Image
       src={smile_emoji}
       alt="smile_emoji"
       className="absolute top-[1rem] left-[0.8rem]" 
      />}
     </div>
      
    </div>
  );
}
