import { StaticImageData } from "next/image";
import { ChangeEventHandler, Dispatch, SetStateAction } from "react";



  export interface inputProps{
  
    name: string;
    type: string;
    placeholder: string;
    classStyle?: string;
    label:string;
  value?:string;
  onChange?:  (event: React.ChangeEvent<HTMLInputElement>) => void;
 }



 export interface buttonProps{
  image?:StaticImageData;
  hasImage?:boolean;
  name:string;
  buttonStyle:string;
  imageStyle?: string
 }



 export interface form{
  name:string;
  email:string;
  password:string;
 }


 export interface activeComponentProps{
  setActiveComponent: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<SetStateAction<number>>;
  image: string | null;
  setImage:Dispatch<SetStateAction<string | null>>
  setImageState:Dispatch<SetStateAction<string>>;

 }


 export interface interestComponentProps{
  setActiveComponent: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<SetStateAction<number>>;
  setImageState:Dispatch<SetStateAction<string>>;

  selectedOption: Dispatch<SetStateAction<"social Interaction" | "Personal Development" | "Entertainment" | "Rewards" | null>>;
  selected:string |null;
 }



 export interface   extraInterestProps {

 setActiveComponent: Dispatch<SetStateAction<string>>;
 setStep: Dispatch<SetStateAction<number>>;
 setImageState:Dispatch<SetStateAction<string>>

 }
