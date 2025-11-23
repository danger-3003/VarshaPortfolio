"use client"

import React, { useState } from 'react'
import Input from '../ui/Input'
import BlurText from '../ui/Animation/Texts/BlurText'

function ConnectPage() {

  const [formDetails, setFormDetails] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e, field) => {
    setFormDetails({ ...formDetails, [field]: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormDetails({ fullName: "", email: "", message: "", subject: "" });
    console.log(formDetails);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen">
        <div
          className="max-w-[70rem] w-full max-h-[600px] h-screen flex items-center justify-start pb-12 pt-20 md:py-24 px-5 sm:px-8 md:px-10"
        >
          <div className='flex items-start justify-between flex-wrap w-full'>
            <div className='w-40'>
              <BlurText
                text={"Let's collaborate together!"}
                delay={30}
                animateBy="words"
                direction="bottom"
                onAnimationComplete={null}
                className="text-[3.5rem] font-nunito font-semibold w-full uppercase leading-[4rem]"
              />
            </div>
            <div className='basis-1/2 flex items-center justify-center'>
              <form onSubmit={e => handleFormSubmit(e)} className='font-nunito text-sm sm:text-base font-light flex items-center justify-center flex-col gap-4'>
                <div className='w-full'>
                  <Input
                    id={"full_name"}
                    name={"Full name"}
                    type={"text"}
                    placeholder={"Enter your fullname"}
                    onChange={(e) => { handleInputChange(e, "fullName") }}
                    value={formDetails.fullName}
                    required={true}
                  />
                </div>
                <div className='w-full'>
                  <Input
                    id={"email"}
                    name={"Email"}
                    type={"email"}
                    placeholder={"Enter your email"}
                    onChange={(e) => { handleInputChange(e, "email") }}
                    value={formDetails.email}
                    required={true}
                  />
                </div>
                <div className='w-full'>
                  <Input
                    id={"subject"}
                    name={"Subject"}
                    type={"text"}
                    placeholder={"Subject for your message"}
                    onChange={(e) => { handleInputChange(e, "subject") }}
                    value={formDetails.subject}
                    required={true}
                  />
                </div>
                <div className='w-full'>
                  <Input
                    id={"message"}
                    name={"Message"}
                    type={"text"}
                    placeholder={"Enter your message"}
                    onChange={(e) => { handleInputChange(e, "message") }}
                    value={formDetails.message}
                    required={true}
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default ConnectPage