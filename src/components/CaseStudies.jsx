import { motion } from "motion/react";

export default function CaseStudies() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F5F5F5] py-16 md:py-24 lg:py-[120px]">
      {/* Pink Glow */}
      <div className="absolute right-[10%] top-[40px] h-[150px] w-[150px] md:h-[250px] md:w-[250px] rounded-full bg-[#F5C8D5]/40 blur-[20px]" />

      {/* Background Squiggly */}
      <img
        src="/Vector 2517 (1).png"
        alt=""
        className="
          absolute
          hidden
          xl:block
          top-[300px]
          right-[-300px]
          md:right-[-150px]
          -z-10
          pointer-events-none
          w-[800px]
          md:w-[1200px]
          max-w-none
          object-contain
        "
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-[60px]">
        {/* FIRST BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] items-center gap-12 lg:gap-[60px]">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="relative inline-block">
              <h2
                style={{ fontFamily: "Gerbil" }}
                className="
                  text-[38px]
                  sm:text-[50px]
                  lg:text-[50px]
                  leading-[48px]
                  sm:leading-[72px]
                  text-black
                "
              >
                Tomorrow should
                <br />
                be better than{" "}
                <span className="relative inline-flex items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-[#DCEBDD]" />
                  <span className="relative z-10 px-3 sm:px-[20px]">today</span>
                </span>
              </h2>

              <div className="absolute sm:top-[50px] top-[40px]">
                <img
                  src="/Vector 5.png"
                  alt=""
                  className="h-[16px] sm:h-[25px] w-[180px] sm:w-[350px] "
                />
              </div>
            </div>

            <div className="mt-4 sm:mt-[18px] px-0 sm:px-[10px]">
              <p className="max-w-[500px] text-[14px] sm:text-[15px] leading-[20px] text-black">
                We are a team of strategists, designers, communicators,
                researchers. Together, we believe that progress only happens
                when you refuse to play things safe.
              </p>

              <div className="mt-5 flex items-center gap-[10px]">
                <span className="text-[12px] text-black">Read more</span>

                <span className="text-[20px] leading-none">→</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative mx-auto lg:ml-auto order-1 lg:order-2"
          >
            <div className="absolute right-[-10px] sm:right-[-20px] top-[10px] z-0 h-[60px] w-[60px] sm:h-[90px] sm:w-[90px] bg-[#F96D73] rotate-[20deg]" />

            <div className="relative z-10 flex h-[250px] w-[250px] sm:h-[320px] sm:w-[320px] items-center justify-center overflow-hidden rounded-full">
              <img
                src="/image 348.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* SECOND BLOCK */}
        <div className="mt-20 md:mt-[120px] grid grid-cols-1 lg:grid-cols-[450px_1fr] items-center gap-12 lg:gap-[80px]">
          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative mx-auto"
          >
            {/* Top Triangle */}
            <div
              className="absolute left-[-10px] top-[-20px] z-0"
              style={{
                width: 0,
                height: 0,
                borderLeft: "50px solid transparent",
                borderRight: "50px solid transparent",
                borderBottom: "100px solid #F96D73",
              }}
            />

            <div className="relative z-10 flex h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] items-center justify-center overflow-hidden rounded-full bg-gray-300">
              <img
                src="/image 348 (1).png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* Bottom Triangle */}
            <div
              className="absolute right-[40px] sm:right-[80px] bottom-[-25px] z-20"
              style={{
                width: 0,
                height: 0,
                borderLeft: "50px solid transparent",
                borderRight: "50px solid transparent",
                borderBottom: "100px solid #F96D73",
              }}
            />
          </motion.div>

          {/* Content */}
          <div>
            <div className="relative inline-block">
              <h2
                style={{ fontFamily: "Gerbil" }}
                className="
                  text-[38px]
                  sm:text-[50px]
                  leading-[48px]
                  sm:leading-[72px]
                  text-black
                "
              >
                <span className="rounded-full bg-[#DCEBDD] px-3 sm:px-[20px]">
                  See
                </span>{" "}
                how we can
                <br />
                help you progress
              </h2>

              <div className="absolute right-0 sm:right-[20px] top-[90px] sm:top-[125px]">
                <img
                  src="/Vector 5.png"
                  alt=""
                  className="h-[16px] sm:h-[25px] w-[180px] sm:w-[350px]"
                />
              </div>
            </div>

            <div className="mt-4 sm:mt-[18px] px-0 sm:px-[10px]">
              <p className="max-w-[500px] text-[14px] sm:text-[15px] leading-[20px] text-black">
                We are a team of strategists, designers, communicators,
                researchers. Together, we believe that progress only happens
                when you refuse to play things safe.
              </p>

              <div className="mt-5 flex items-center gap-[10px]">
                <span className="text-[12px] text-black">Read more</span>

                <span className="text-[20px] leading-none">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}