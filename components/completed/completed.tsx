import Image from "next/image";
import React from "react";
import conferty from "../../assets/icons/conferty.svg";
import { Button } from "..";

export default function Completed() {
  return (
    <div>
      {" "}
      <p className="mt-[4.36rem] text-[2.0375rem] font-semibold text-center text-thin-black">
        Woohoo!
      </p>
      <p className="text-center mt-[1.12rem] text-thin-black">
        Hey there! Your registration is complete, get <br /> excited for the
        ultimate quiz experience of your <br /> life. Let's do this!
      </p>
      <div className="flex items-center justify-between h-[56.5vh] flex-col mt-[2.52rem]">
        <div>
          <Image src={conferty} alt="conferty" />
        </div>
        <div className="flex justify-center items-center">
          <Button
            hasImage={false}
            name="continue"
            buttonStyle="text-[1rem] bg-deep-blue text-white  w-[14.5rem] h-[2.25rem] rounded-[0.25rem]"
          />
        </div>
      </div>
    </div>
  );
}
