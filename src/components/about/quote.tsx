import Image from "next/image";
import SlideFadeIn from "../animation/on-scroll/SlideFadeIn";

export default function AboutQuote() {
  return (
    <div className="p-2">
      <SlideFadeIn
        items={[
          { selector: "[data-animate='quote-image']", direction: "x", from: -70, start: "top bottom" },
          { selector: "[data-animate='header']", direction: "y", from: 70 },
          { selector: "[data-animate='paragraph']", direction: "y", from: 70 },
          { selector: "[data-animate='profile-name']", direction: "y", from: 30 },
          { selector: "[data-animate='profile-position']", direction: "y", from: 30 },
        ]}
      >
        <div className="quote-section bg-[url('/background/bg-about.svg')] bg-cover bg-center bg-no-repeat rounded-[12px]  lg:max-h-[38rem] py-12 px-6 md:py-20 md:px-12 lg:py-[6.5rem] lg:px-4 flex flex-col justify-center items-center">
          <div className="container max-w-[67rem] w-full mx-auto flex flex-col lg:flex-row gap-14 lg:justify-between lg:items-center">
            <Image
              src="quote.svg"
              alt="quote"
              className="w-full h-auto"
              width={435}
              height={400}
              data-animate="quote-image"
            />
            <div className="content flex flex-col gap-[2rem] lg:max-w-[32.875rem]">
              <div className="header flex flex-col gap-[1rem]" data-animate="header">
                <div className="typography font-semibold text-grayscale-950">
                  <h3 className="text-[28px] md:text-[36px] leading-[140%] font-semibold lg:text-[40px]">
                    Together, We Grow Better
                  </h3>
                </div>
                <p className="text-large md:text-xlarge text-grayscale-600" data-animate="paragraph">
                  “At Custo, we believe growth is not a solo journey. Every step we take is in collaboration with those we serve and that’s what makes the journey meaningful. We&apos;re here to grow with you, every step of the way.”
                </p>
              </div>
              <div className="profile flex flex-col gap-[0.03125rem]">
                <p className="font-medium text-large md:text-xlarge text-grayscale-950" data-animate="profile-name">
                  Raul Christiansen
                </p>
                <p className="text-small md:text-medium text-grayscale-600" data-animate="profile-position">
                  Chief Executive Officer
                </p>
              </div>
            </div>
          </div>
        </div>
      </SlideFadeIn>
    </div>
  );
}
