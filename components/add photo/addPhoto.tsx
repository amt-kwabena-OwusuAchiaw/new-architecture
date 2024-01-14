import Image from "next/image";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useRef,
  useState,
} from "react";
import noImage from "../../assets/images/noImage.png";
import { Button } from "..";
import { activeComponentProps } from "@/types";

export default function AddPhoto({
  setActiveComponent,
  setStep,
  image, 
  setImage,
  setImageState
}: activeComponentProps) {
  

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const imageClick = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    imageClick.current?.click();
  };

  return (
    <div className="flex flex-col justify-between h-[80vh] items-center">
      <div>
        <p className="text-center text-[2.07375rem] font-[700] mt-[3.4rem]">
          {" "}
          Add Photo
        </p>

        <p className="text-center text-thin-gray mt-[0.44rem]">
          {" "}
          Add a photo so other members know who you <br /> are
        </p>

        <div className="m-auto flex justify-center mt-[2.19rem]">
          {image ? (
            <Image
              src={image}
              alt="Uploaded Image"
              width={150}
              height={150}
              className="rounded-full "
            />
          ) : (
            <Image src={noImage} alt="No image available" />
          )}
        </div>
      </div>

      {!image ? (
        <div className="">
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              ref={imageClick}
            />
          </div>
          <div onClick={handleImageClick}>
            <Button
              hasImage={false}
              name="Upload photo"
              buttonStyle="bg-deep-blue h-[2.5rem] w-[14.5rem] m-auto text-white font-[400] rounded-[0.25rem] mb-[1.5rem] mt-[7px] shadow-input-shadow"
            />
          </div>

          <div
            onClick={() => {
              setActiveComponent("Interest");
              setStep(3);
              setImageState("Interest")
            }}
          >
            <Button
              hasImage={false}
              name="Skip"
              buttonStyle="m-auto w-[14.75rem]"
            />
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            setActiveComponent("Interest");
            setStep(3);
            setImageState("Interest")
          }}
        >
          <Button
            hasImage={false}
            name="Continue"
            buttonStyle="bg-deep-blue h-[2.5rem] w-[14.5rem] m-auto text-white font-[400] rounded-[0.25rem] mb-[1.5rem] mt-[7px] "
          />
        </div>
      )}
    </div>
  );
}
