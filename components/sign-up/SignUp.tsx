import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button, Input } from "..";
import googleIcon from "../../assets/images/Google logo.png";
import { form } from "@/types";

export default function SignUp({
  form,
  setForm,
  handleSubmit
}: {
  form: form;
  setForm: Dispatch<SetStateAction<form>>;
  handleSubmit:React.FormEventHandler<HTMLFormElement>;
}) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((prevValue) => ({ ...prevValue, [name]: value }));
  };


   


  return (
    <div>
      <div className="w-[20rem] m-auto">
        <p className="pt-[4.31rem] text-[2.07375rem] font-bold text-left text-shadow">
          {" "}
          Create Account
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex items-left mt-[1.31rem] flex-col">
            <Input
              name="name"
              type="text"
              placeholder="John Doe"
              label="Name"
              value={form.name}
              onChange={handleInputChange}
            />

            <Input
              name="email"
              type="text"
              placeholder={"     johndoe@gmail.com"}
              label="E-mail"
              value={form.email}
              onChange={handleInputChange}
            />

            <Input
              name="password"
              type="password"
              placeholder="*********"
              label="Password"
              onChange={handleInputChange}
              value={form.password}
            />
          </div>

          <div>
            <Button
              hasImage={false}
              name="Create Account"
              buttonStyle="bg-deep-blue h-[2.5rem] w-[18.75rem] m-auto text-white font-[400] rounded-[0.25rem] mb-[1.5rem] mt-[7px] shadow-input-shadow"
            />

            <Button
              hasImage={true}
              image={googleIcon}
              name="Sign Up with Google"
              buttonStyle="google-sign-up"
              imageStyle="h-[1.5rem]"
            />
          </div>
        </form>
        <div>
          <p className="text-shadow text-account-gray">
            Already have an account?{" "}
            <span className="text-deep-blue text-shadow font-semibold">
              Log In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
