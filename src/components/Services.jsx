import { motion } from "motion/react";

export default function Services() {
  return (
    <section className="w-full overflow-hidden bg-[#F5F5F5] py-[60px] md:py-[90px] lg:py-[120px]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-[60px]">
        {/* Header */}
        <div className="relative mb-[60px] lg:mb-[120px] flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-[60px]">
          <div className="relative">
            <h2
              style={{ fontFamily: "Gerbil" }}
              className="
                text-[40px]
                sm:text-[50px]
                lg:text-[60px]
                font-normal
                leading-[50px]
                sm:leading-[60px]
                lg:leading-[70px]
                text-black
              "
            >
              What we{" "}
              <span className="inline-block rounded-full bg-[#DCEBDD] px-[18px] sm:px-[24px] lg:px-[30px]">
                can
              </span>
              <br />
              offer you!
            </h2>

            {/* Yellow Scribble */}
            <div className="absolute left-[-10px] top-[85px] sm:top-[105px] lg:left-[-20px] lg:top-[125px]">
              <img
                src="/Vector 5.png"
                alt="Yellow Scribble"
                className="h-[18px] sm:h-[22px] lg:h-[25px] w-[120px] sm:w-[150px] lg:w-[190px]"
              />
            </div>
          </div>

          {/* Red Squiggly */}
          <div className="hidden lg:flex h-[180px] w-[600px] shrink-0 items-center justify-center">
            <img
              className="mr-[-120px] mt-[-350px]"
              src="/Vector 2516.png"
              alt=""
            />
          </div>
        </div>

        {/* Services List */}
        <div className="border-t border-[#D9D9D9]">
          {/* Row 1 */}
          <motion.div
            whileHover={{ x: 6 }}
            transition={{ duration: 0.25 }}
            className="
              grid
              grid-cols-1
              lg:grid-cols-[220px_1fr_80px]
              gap-4
              lg:gap-0
              border-b
              border-[#D9D9D9]
              py-6
              lg:py-[30px]
            "
          >
            <p className="text-[14px] lg:text-[15px] leading-[22px] lg:leading-[24px] text-[#555]">
              Office of multiple
              <br />
              interest content
            </p>

            <h3
              style={{ fontFamily: "Gerbil" }}
              className="
                text-[32px]
                sm:text-[38px]
                lg:text-[45px]
                font-normal
                leading-[40px]
                lg:leading-[58px]
                text-black
              "
            >
              Collaborative & partnership
            </h3>

            <motion.button
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
              className="
                justify-self-start
                lg:justify-self-end
                text-[50px]
                lg:text-[80px]
                leading-none
              "
            >
              →
            </motion.button>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            whileHover={{ x: 6 }}
            transition={{ duration: 0.25 }}
            className="
              grid
              grid-cols-1
              lg:grid-cols-[220px_1fr_80px]
              gap-4
              lg:gap-0
              border-b
              border-[#D9D9D9]
              py-6
              lg:py-[30px]
            "
          >
            <p className="text-[14px] lg:text-[15px] leading-[22px] lg:leading-[24px] text-[#555]">
              The hanger US Air force
              <br />
              digital experimental
            </p>

            <h3
              style={{ fontFamily: "Gerbil" }}
              className="
                text-[32px]
                sm:text-[38px]
                lg:text-[45px]
                font-normal
                leading-[40px]
                lg:leading-[58px]
                text-black
              "
            >
              We talk about our weight
            </h3>

            <motion.button
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
              className="
                justify-self-start
                lg:justify-self-end
                text-[50px]
                lg:text-[80px]
                leading-none
              "
            >
              →
            </motion.button>
          </motion.div>

          {/* Row 3 */}
          <motion.div
            whileHover={{ x: 6 }}
            transition={{ duration: 0.25 }}
            className="
              grid
              grid-cols-1
              lg:grid-cols-[220px_1fr_80px]
              gap-4
              lg:gap-0
              border-b
              border-[#D9D9D9]
              py-6
              lg:py-[30px]
            "
          >
            <p className="text-[14px] lg:text-[15px] leading-[22px] lg:leading-[24px] text-[#555]">
              Delta faucet content,
              <br />
              social, digital
            </p>

            <h3
              style={{ fontFamily: "Gerbil" }}
              className="
                relative
                text-[32px]
                sm:text-[38px]
                lg:text-[45px]
                font-normal
                leading-[40px]
                lg:leading-[58px]
                text-black
              "
            >
              Piloting digital{" "}
              <span className="relative inline-block">
                <img
                  src="/Rectangle 661.png"
                  alt=""
                  className="
                    absolute
                    left-[45px]
                    lg:left-[70px]
                    top-[-6px]
                    lg:top-[-9px]
                    z-0
                    h-[70px]
                    w-[70px]
                    lg:h-[100px]
                    lg:w-[100px]
                    object-contain
                  "
                />

                <span className="relative z-10">confidence</span>
              </span>
            </h3>

            <motion.button
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
              className="
                justify-self-start
                lg:justify-self-end
                text-[50px]
                lg:text-[80px]
                leading-none
              "
            >
              →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}