import React, { useState } from "react";
import { Button } from "..";
import correct from "../../assets/icons/done.svg";
import { extraInterestProps } from "@/types";


export default function ExtraInterest({ setActiveComponent, setStep,
  setImageState}:extraInterestProps) {
  const [data, setData] = useState([
    { name: "Gaming", color: "gaming-color", added: false },
    { name: "Fashion", color: "fashion-color", added: false },
    { name: "Music", color: "music-color", added: false },
    { name: "Reading", color: "reading-color", added: false },
  ]);

  const handleAddedInteterst = (name: string): void => {
    setData((prevData) =>
      prevData.map((option) =>
        option.name === name ? { ...option, added: !option.added } : option
      )
    );
  };


  const handleFinalStep =()=>{

    if (data[0].added === true || data[1].added===true  || data[2].added=== true || data[3].added===true ){
      setActiveComponent("completed");
      setStep(5);
      setImageState("completed")
    }
    else{
      alert('Kindly select an additional interest')
    }
    
  }
  return (
    <div>
      <p className="mt-[2.16rem] text-[2.0375rem] font-semibold text-center">
        Let&rsquo;s get started by
        <br /> picking some interests
      </p>
      <p className="text-center mt-[1.44rem]">
        Alright, let's pick something we're <br /> interested in and get
        started!
      </p>

      <div className="flex w-[23rem] flex-col  m-auto mt-[1.5rem] h-[56.5vh] justify-between">
      
          
     <div className="flex flex-wrap gap-[1rem]">
         
        {data.map((option) => (
          <div
            className={`w-[10.75rem] h-[10.75rem] text-black rounded-[0.5rem] flex gap-[3.25rem] flex-col bg-${option.color}`}
          >
            <div className="text-left font-[600] text-light-black text-[1.44rem] pt-[1.75rem] pl-[1.5rem]">
              {" "}
              {option.name}
            </div>

            <div
              className="flex justify-flex-start items-center pl-[1.5rem]"
              onClick={() => handleAddedInteterst(option.name)}
            >
              <Button
                hasImage={option.added ? true : false}
                image={correct}
                name={option.added ? "Added" : "Add"}
                buttonStyle="flex flex-row-reverse gap-[0.5rem] border border-add-gray rounded-[0.25rem] pl-[1rem] pr-[1rem] py-[0.2rem]"
              />
            </div>
          </div>
        ))}

</div>
      
        <div onClick={()=>{handleFinalStep()}}>
          <Button
            hasImage={false}
            name="Continue"
            buttonStyle="bg-deep-blue text-white w-[22.4375rem] h-[2.5rem] rounded-[0.25rem]"
          />
        </div>
      </div>
    </div>
  );
}
