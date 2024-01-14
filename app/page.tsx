"use client";
import { AddPhoto, Completed, Interest, Layout, SignUp } from "@/components";
import Image from "next/image";
import { useState } from "react";
import back from "../assets/icons/back.svg";
import ExtraInterest from "@/components/extraInterest/extraInterest";
import { form } from "@/types";

export default function Home() {
  const [imageState, setImageState] = useState<string>("Added a Page");

  const [step, setStep] = useState<number>(1);
  const [activeComponent, setActiveComponent] = useState<string>("signUp");

  const [image, setImage] = useState<string | null>(null);

  const [selected, selectedOption] = useState<"social Interaction" | "Personal Development" |  "Entertainment" | "Rewards"| null >(null );

  const [form, setForm] = useState<form>({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      form.name.length > 3 &&
      form.email.includes("@") &&
      form.password.length > 5
    ) {
      setImageState("addAPhoto");
      setActiveComponent("addAPhoto");
      setStep(2);
    } else {
      alert("please fill all fields ");
    }
  };

  return (
    <Layout imageState={imageState}>
      <div>
      { step !== 5 &&  <div className="flex justify-between w-full pl-[3.6rem] pr-[3.56rem] pt-[3.5rem] cursor-pointer">
          {step !== 1 && (
            <div
              className="flex gap-[0.5rem]"
              onClick={() => {
                setStep((step) => step - 1);
                step === 2
                  ? (setActiveComponent("signUp"), setImageState("noImage"))
                  : step === 3
                  ? (setActiveComponent("addAPhoto"),
                    setImageState("addAPhoto"))
                  : step ===4 ? (setActiveComponent("Interest") , setImageState("Interest")):''
              }}
            >
              <Image src={back} alt="back" />{" "}
              <p className="font-semibold text-[1rem]">Back</p>
            </div>
          )}
          <div>
            <p>
              {" "}
              <span className="font-semibold text-[1rem]">Step {step}</span> of
              4
            </p>
          </div>
          <div>
            <p>Exit</p>
          </div>
        </div>}

        {activeComponent === "signUp" && (
          <SignUp form={form} setForm={setForm} handleSubmit={handleSubmit} />
        )}

        {activeComponent === "addAPhoto" && (
          <AddPhoto
            setActiveComponent={setActiveComponent}
            setStep={setStep}
            image={image}
            setImage={setImage}
            setImageState={setImageState}
          />
        )}

        {activeComponent === "Interest" && (
          <Interest
            setImageState={setImageState}
            setStep={setStep}
            setActiveComponent={setActiveComponent}
            selected = {selected}
            selectedOption= {selectedOption}
          />
        )}

      {activeComponent==="ExtraInterest" && <ExtraInterest
      
      setImageState={setImageState}
      setStep={setStep}
      setActiveComponent={setActiveComponent}
      />}

    { activeComponent==="completed" &&<Completed />}
      </div>
    </Layout>
  );
}
