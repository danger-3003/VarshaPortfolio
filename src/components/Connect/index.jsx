"use client"

import React, { useState } from 'react'
import Input from '../ui/Input'
import BlurText from '../ui/Animation/Texts/BlurText'
import LinkButton from '../ui/Button/LinkButton';
import { Text } from '../ui/Text';

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
          className="max-w-[70rem] w-full max-h-[800px] sm:max-h-[700px] h-screen flex items-center justify-start pb-12 pt-20 md:py-24 px-5 sm:px-8"
        >
          <div className='flex items-center md:items-start justify-between flex-col md:flex-row w-full gap-20'>
            <div className='w-full'>
              <div className='w-full md:w-40 text-center md:text-left'>
                <BlurText
                  text={"Let's collaborate together!"}
                  delay={30}
                  animateBy="words"
                  direction="bottom"
                  onAnimationComplete={null}
                  className="text-4xl sm:text-5xl md:text-[3.5rem] font-nunito font-semibold w-full uppercase leading-10 md:leading-[4rem]"
                />
              </div>
              <div className='mt-5 md:mt-10 px-3 md:px-0 w-full text-center md:text-left'>
                <Text>Let’s begin a collaboration that pushes boundaries, sparks new perspectives, and leads us toward exceptional achievements.</Text>
              </div>
            </div>
            <div className='max-w-80 w-full md:basis-1/2 flex items-center md:justify-end lg:justify-center'>
              <form onSubmit={e => handleFormSubmit(e)} className='font-nunito text-sm sm:text-base font-light flex items-center justify-center flex-col gap-4 w-full md:w-min'>
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
                <button
                  type='submit'
                >
                  <LinkButton
                    text={"Submit"}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default ConnectPage