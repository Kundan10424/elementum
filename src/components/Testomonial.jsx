import { motion } from "motion/react";

export default function Testimonials() {
  return (
    <section className="w-full bg-[#F5F5F5] py-[60px] md:py-[80px]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-[60px]">
        <div className="relative py-[40px] md:py-[60px]">
          {/* Header */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <h2
                style={{ fontFamily: "Gerbil" }}
                className="
                  text-center
                  text-[36px]
                  sm:text-[45px]
                  lg:text-[50px]
                  leading-[42px]
                  sm:leading-[54px]
                  lg:leading-[58px]
                  text-black
                "
              >
                <span className="rounded-full bg-[#DCEBDD] px-[12px] sm:px-[18px]">
                  What
                </span>{" "}
                our customer
                <br />
                says About Us
              </h2>

              {/* Yellow Scribble */}
              <div className="absolute left-1/2 top-[75px] sm:top-[90px] lg:top-[105px] -translate-x-1/2">
                <img
                  src="/Vector 5.png"
                  alt="Yellow Scribble"
                  className="h-[18px] sm:h-[22px] lg:h-[25px] w-[180px] sm:w-[240px] lg:w-[300px]"
                />
              </div>
            </div>
          </div>

          {/* Main Testimonial Card */}
          <div className="mt-[40px] flex justify-center">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="
                relative
                w-full
                max-w-[580px]
                rounded-[25px]
                bg-[#E7ECE6]
                px-[24px]
                sm:px-[40px]
                py-[24px]
                sm:py-[30px]
              "
            >
              {/* Opening Quote */}
              <div className="absolute left-[5px] top-[5px] text-[45px] sm:text-[70px] text-[#C9CDC8]">
                ❝
              </div>

              <p className="text-center text-[14px] sm:text-[16px] leading-[24px] sm:leading-[30px] text-[#3F3F3F]">
                Elementum delivered the site within the timeline as they
                requested. In the end, the client found a 50% increase in
                traffic within days since its launch. They also had an
                impressive ability to use technologies that the company had not
                used before, which proved to be easy to use and reliable.
              </p>

              {/* Closing Quote */}
              <div className="absolute bottom-[-10px] right-[20px] text-[45px] sm:text-[70px] text-[#C9CDC8]">
                ❞
              </div>
            </motion.div>
          </div>

          {/* ===== DESKTOP AVATARS ONLY ===== */}

          {/* Top Left */}
          <div className="absolute left-[80px] top-[10px] hidden lg:block">
            <img
              src="/Ellipse 263.png"
              alt=""
              className="h-[90px] w-[90px] rounded-full"
            />
          </div>

          {/* Left Small */}
          <div className="absolute left-[20px] top-[150px] hidden lg:block">
            <img
              src="/Ellipse 266.png"
              alt=""
              className="h-[55px] w-[55px] rounded-full"
            />
          </div>

          {/* Left Large */}
          <div className="absolute left-[100px] top-[200px] hidden lg:block">
            <img
              src="/Ellipse 268.png"
              alt=""
              className="h-[130px] w-[130px] rounded-full"
            />
          </div>

          {/* Bottom Left */}
          <div className="absolute left-[10px] bottom-[30px] hidden lg:block">
            <img
              src="/Ellipse 267.png"
              alt=""
              className="h-[90px] w-[90px] rounded-full"
            />
          </div>

          {/* Top Right Small */}
          <div className="absolute right-[140px] top-[70px] hidden lg:block">
            <img
              src="/Ellipse 264.png"
              alt=""
              className="h-[55px] w-[55px] rounded-full"
            />
          </div>

          {/* Right Middle */}
          <div className="absolute right-[95px] top-[170px] hidden lg:block">
            <img
              src="/Ellipse 265.png"
              alt=""
              className="h-[70px] w-[70px] rounded-full"
            />
          </div>

          {/* Top Right */}
          <div className="absolute right-[30px] top-[10px] hidden lg:block">
            <img
              src="/Ellipse 270.png"
              alt=""
              className="h-[90px] w-[90px] rounded-full"
            />
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-[0px] right-[10px] hidden lg:block">
            <img
              src="/Ellipse 269.png"
              alt=""
              className="h-[140px] w-[140px] rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}