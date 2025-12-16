"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import LinkButton from "../ui/Button/LinkButton";
import { Text } from "../ui/Text";
import { useRouter } from 'next/navigation';
import { useThemeStore } from "@/store/ThemeStore";
import Particles from "../ui/Particles";

gsap.registerPlugin(ScrollTrigger);

export default function Quotation() {
  const theme = useThemeStore(state => state.theme);
  const [defaultColors, setDefaultColors] = useState(["#ffffff", "#ffffff", "#ffffff"]);

  useEffect(() => {
    if (theme === "light") {
      setDefaultColors(["#191919", "#191919", "#191919"]);
    }
    else {
      setDefaultColors(["#ffffff", "#ffffff", "#ffffff"]);
    }
  }, [theme]);

  const scrollDown = () => {
    const el = document.getElementById("aboutSection");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  const router = useRouter();
  const handleNavigate = () => {
    router.push("/my-work")
  }

  return (
    <>
      <div id="homeSection" className="w-full"></div>
      <section className="h-dvh flex items-center justify-center flex-col relative overflow-hidden w-full will-change-transform">
        {/* This inner wrapper stays constant */}
        <div className="absolute flex items-center justify-center w-full max-w-[70rem] z-[1]">
          <div className="h-dvh w-full relative flex items-center justify-center flex-col px-5 sm:px-8 md:px-10">
            <div className="text-center">
              <Text data-aos="fade-up" className="text-xl sm:text-2xl md:text-3xl font-semibold text-text custom-transition">
                Hi There!
              </Text>
              <h1 className="hidden">Hima Varsha Barla - UI/UX Designer Portfolio</h1>
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="font-poppins text-4xl md:text-5xl lg:text-[4rem] leading-10 md:leading-[4rem] w-max"
              >
                <span className="text-2xl md:text-3xl lg:text-4xl">I'm</span>&nbsp;
                <span className="bg-gradient-to-r from-[#AC52F2] to-[#D11C9F] bg-clip-text text-transparent w-max font-semibold tracking-wider">
                  Hima&nbsp;Varsha
                </span>
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className={
                  "text-[1rem] sm:text-2xl tracking-[0.3rem] mt-2 font-nunito font-light"
                }
              >
                UI/UX Designer
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex items-center justify-center gap-5 mt-5 md:mt-10"
            >
              <div className="overflow-hidden rounded-full w-min">
                <LinkButton
                  target={"_blank"}
                  href={"/assets/profile/HimaVarsha.pdf"}
                  text={"Resume"}
                />
              </div>
              <div className="overflow-hidden rounded-full w-min">
                <LinkButton
                  target={""}
                  onClick={handleNavigate}
                  text={"My work"}
                />
              </div>
            </div>
            <div className='absolute bottom-0 flex items-center justify-center mb-16 sm:mb-5 font-nunito text-sm tracking-widest'>
              <div className="flex items-center justify-center">
                <p>Scroll For More</p>
                <ArrowDown width={14} className="-mt-0.5 ml-0.5" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-text absolute bottom-0 flex items-center justify-center mb-16 sm:mb-5 font-nunito text-sm tracking-widest">
          <div className="flex items-center justify-center">
            <p>Scroll For More</p>
            <ArrowDown width={14} className="-mt-0.5 ml-0.5" />
          </div>
        </div>
        <div className="absolute w-screen h-screen">
          <Particles
            particleColors={defaultColors}
            particleCount={150}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={70}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            cameraDistance={30}
          />
        </div>
      </section>
    </>
  );
}
