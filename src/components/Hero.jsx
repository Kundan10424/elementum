import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F5] pt-6 sm:pt-8 lg:pt-10 pb-16 sm:pb-20 lg:pb-24">
      {/* Left Decorative Shapes */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="absolute left-[-5px] top-[220px] hidden lg:block z-0">
          <img
            src="/Vector 2510.png"
            alt=""
            className="h-[160px] xl:h-[200px] w-auto"
          />
        </div>

        <div className="absolute left-[18px] top-[220px] hidden lg:block z-0">
          <img
            src="/Vector 2511.png"
            alt=""
            className="h-[160px] xl:h-[200px] w-auto"
          />
        </div>
      </motion.div>

      {/* Purple Shape */}
      <motion.div
        animate={{ rotate: [28, 34, 28] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[20px] sm:right-[60px] lg:right-[180px] top-[120px] sm:top-[150px] lg:top-[180px] z-10"
      >
        <div className="relative h-[50px] w-[50px] sm:h-[65px] sm:w-[65px] lg:h-[82px] lg:w-[82px] rotate-[180deg]">
          <div className="absolute right-0 top-0 h-full w-1/2 rounded-l-full bg-[#9747FF]" />
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 md:px-12 lg:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-fit"
        >
          {/* Yellow Scribble */}
          <div className="absolute left-[45%] top-[48px] sm:top-[65px] lg:left-[300px] lg:top-[65px]">
            <img
              src="/Vector 5.png"
              alt=""
              className="h-[14px] sm:h-[18px] lg:h-[25px] w-[120px] sm:w-[180px] lg:w-[300px]"
            />
          </div>

          <h1
            style={{ fontFamily: "Gerbil" }}
            className="
              text-center
              text-[42px]
              sm:text-[60px]
              md:text-[60px]
              lg:text-[60px]
              font-normal

              text-black
            "
          >
            The thinkers and
            <br />
            doers were{" "}
            <span className="relative inline-flex items-center justify-center">
              <span className="absolute inset-0 rounded-[60px] bg-[#F2C4E8]" />
              <span className="relative z-10 px-3 sm:px-5">changing</span>
            </span>
            <br />
            the{" "}
            <span className="relative inline-flex items-center justify-center">
              <span className="absolute inset-0 rounded-[60px] bg-[#DCEBDD]" />
              <span className="relative z-10 px-3 sm:px-5">status</span>
            </span>{" "}
            Quo with
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-4 sm:mt-6"
        >
          <p className="text-center text-[13px] sm:text-[15px] leading-[20px] text-black">
            We are a team of strategists, designers, communicators, researchers.
            <br className="hidden sm:block" />
            Together we believe that progress only happens when you refuse to
            play things safe.
          </p>
        </motion.div>

        {/* Team Members Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 sm:mt-10 flex justify-center"
        >
          <img
            src="/image.png"
            alt="Team Members"
            className="
              w-full
              max-w-[600px]
              sm:max-w-[600px]
              md:max-w-[850px]
              lg:max-w-[1200px]
              object-contain
            "
          />
        </motion.div>
      </div>
    </section>
  );
}