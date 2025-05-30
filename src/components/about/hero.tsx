"use client";

import Image from "next/image";
import SlideFadeIn from "../animation/on-scroll/SlideFadeIn";

export default function AboutHero() {
  return (
    <div className="p-2">
      <div className="hero-section pt-[7.5rem] pb-20 px-6 rounded-[12px] md:pt-[9.5rem] md:pb-[6rem] md:px-[3.5rem] flex flex-col bg-grayscale-50 items-center">
        <SlideFadeIn
          items={[
            { selector: "[data-animate='title']", direction: "y", from: 50, start: "top bottom" },
            { selector: "[data-animate='desc']", direction: "y", from: 50 },
            { selector: "[data-animate='img1']", direction: "y", from: 70 },
            { selector: "[data-animate='img2']", direction: "y", from: 70 },
            { selector: "[data-animate='img3']", direction: "y", from: 70 },
            { selector: "[data-animate='img4']", direction: "y", from: 70 },
            { selector: "[data-animate='img5']", direction: "y", from: 70 },
            { selector: "[data-animate='client-text']", direction: "y", from: 50 },
            { selector: "[data-animate='client-logos']", direction: "y", from: 40, toOpacity: 0.4 },
          ]}
          staggerDelay={0.15}
        >
          <div className="container w-full mx-auto max-w-[67rem] flex flex-col gap-16 items-center justify-center">
            <div className="header flex flex-col gap-4 items-center">
              <div
                className="text-[32px] leading-[120%] font-semibold md:text-[56px] md:leading-[120%]"
                data-animate="title"
              >
                <h1>About Custo</h1>
              </div>
              <p
                className="text-[16px] leading-[160%] max-w-[41rem] text-center text-grayscale-600 md:text-xlarge"
                data-animate="desc"
              >
                Custo is a team of passionate makers dedicated to building tools
                that empower businesses to grow.
              </p>
            </div>

            <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.25rem] w-full">
              <div className="flex flex-col gap-[1.25rem]">
                <Image
                  data-animate="img1"
                  src="content/content1.svg"
                  alt="content"
                  width={344}
                  height={198}
                  priority
                />
                <Image
                  data-animate="img2"
                  src="content/content2.svg"
                  alt="content"
                  width={344}
                  height={198}
                  priority
                />
              </div>
              <div>
                <Image
                  data-animate="img3"
                  src="content/content3.svg"
                  alt="content"
                  width={344}
                  height={416}
                  priority
                />
              </div>
              <div className="flex flex-col gap-[1.25rem] hidden lg:flex">
                <Image
                  data-animate="img4"
                  src="content/content4.svg"
                  alt="content"
                  width={344}
                  height={198}
                  priority
                />
                <Image
                  data-animate="img5"
                  src="content/content5.svg"
                  alt="content"
                  width={344}
                  height={198}
                  priority
                />
              </div>
            </div>

            <div className="clients flex flex-col gap-8 pt-[0.5rem] justify-center items-center w-full overflow-hidden">
              <p
                className="text-[16px] leading-[160%] max-w-[41rem] text-center text-grayscale-600 md:text-xlarge"
                data-animate="client-text"
              >
                Trusted by companies around the world
              </p>
              <div
                className="flex flex-row opacity-40 gap-[4rem]"
                data-animate="client-logos"
              >
                <Image
                  src="client/client1.svg"
                  alt="client"
                  width={154}
                  height={28}
                  priority
                />
                <Image
                  src="client/client2.svg"
                  alt="client"
                  width={154}
                  height={28}
                  priority
                />
                <Image
                  src="client/client3.svg"
                  alt="client"
                  width={154}
                  height={28}
                  priority
                />
                <Image
                  src="client/client4.svg"
                  alt="client"
                  width={154}
                  height={28}
                  priority
                />
                <Image
                  src="client/client5.svg"
                  alt="client"
                  width={154}
                  height={28}
                  priority
                />
                <Image
                  src="client/client6.svg"
                  alt="client"
                  width={154}
                  height={28}
                  priority
                />
              </div>
            </div>
          </div>
        </SlideFadeIn>
      </div>
    </div>
  );
}
