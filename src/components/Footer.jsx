import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#DDEBDD] px-5 sm:px-8 lg:px-[55px] pt-10 lg:pt-[30px] pb-6 lg:pb-[20px]">
      {/* Decorative Red Arrows */}
      <div className="absolute left-[500px] top-[5px] hidden xl:block">
        <img src="/Vector 2519.png" alt="" />
      </div>

      <div className="absolute left-[580px] top-[5px] hidden xl:block">
        <img src="/Vector 2519.png" alt="" />
      </div>

      {/* Purple Decorative Shape */}
      <motion.div
        animate={{ rotate: [0, 5, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[70px]
          sm:right-[60px]
          lg:right-[150px]
          top-[190px]
          lg:top-[200px]
          rotate-[40deg]
        "
      >
        <div className="h-[70px] w-[35px] sm:h-[90px] sm:w-[45px] lg:h-[110px] lg:w-[55px] rounded-l-full bg-[#9747FF]" />
      </motion.div>

      {/* Newsletter */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-[900px] py-10 sm:py-14 lg:py-[90px]"
      >
        <h2
          style={{ fontFamily: "Gerbil" }}
          className="
            text-center
            text-[42px]
            sm:text-[55px]
            lg:text-[60px]
            font-normal
            leading-[50px]
            sm:leading-[70px]
            lg:leading-[88px]
            text-black
          "
        >
          Subscribe to
          <br />
          our newsletter
        </h2>

        <p className="mt-3 text-center text-[12px] leading-[18px] text-black">
          To make your stay special and even more memorable
        </p>

        <div className="mt-5 flex justify-center">
          <button className="rounded-full bg-black px-6 py-3 text-[11px] text-white transition duration-300 hover:scale-105">
            Subscribe Now
          </button>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="mx-auto mt-8 lg:mt-[65px] h-[1px] max-w-[1200px] bg-black/20" />

      {/* Footer Columns */}
      <div
        className="
          mx-auto
          mt-8
          lg:mt-[35px]
          max-w-[1200px]
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10
          lg:gap-[80px]
        "
      >
        {/* Company */}
        <div style={{ fontFamily: "Gerbil" }}>
          <h3 className="mb-4 text-[18px] text-black">Company</h3>

          <ul className="space-y-3 text-[13px] text-black">
            <li>Home</li>
            <li>Studio</li>
            <li>Service</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Policies */}
        <div style={{ fontFamily: "Gerbil" }}>
          <h3 className="mb-4 text-[18px] text-black">Terms & Policies</h3>

          <ul className="space-y-3 text-[13px] text-black">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Explore</li>
            <li>Accessibility</li>
          </ul>
        </div>

        {/* Socials */}
        <div style={{ fontFamily: "Gerbil" }}>
          <h3 className="mb-4 text-[18px] text-black">Follow Us</h3>

          <ul className="space-y-3 text-[13px] text-black">
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
            <li>Twitter</li>
          </ul>
        </div>

        {/* Contact */}
        <div style={{ fontFamily: "Gerbil" }}>
          <h3 className="mb-4 text-[18px] text-black">Contact</h3>

          <ul className="space-y-3 text-[13px] text-black">
            <li>1498W Fulton st, STE</li>
            <li>20 Chicago, IL 63867</li>
            <li>(123) 45678900</li>
            <li>info@elementum.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{ fontFamily: "Gerbil" }}
        className="mt-10 lg:mt-[55px] text-center text-[11px] text-black/70"
      >
        ©2023 Elementum. All rights reserved
      </div>
    </footer>
  );
}