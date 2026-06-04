import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = ["Home", "Studio", "Services", "Contact", "FAQ`s"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full bg-[#F5F5F5]">
      <div className="mx-auto flex h-[80px] sm:h-[90px] lg:h-[100px] max-w-[1920px] items-center justify-between px-5 sm:px-8 md:px-12 lg:px-20 xl:px-[120px]">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ fontFamily: "Gerbil" }}
          className="text-[22px] sm:text-[24px] lg:text-[28px] font-normal text-black"
        >
          Elementum
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 xl:gap-[70px]">
            {navLinks.map((link) => (
              <motion.li
                key={link}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="list-none cursor-pointer text-[15px] xl:text-[16px] font-normal text-black"
              >
                {link}
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          aria-label="Menu"
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex h-[24px] w-[36px] items-center justify-center lg:hidden"
        >
          <motion.span
            animate={
              isOpen
                ? {
                    rotate: 45,
                    y: 0,
                  }
                : {
                    rotate: 0,
                    y: -5,
                  }
            }
            transition={{ duration: 0.25 }}
            className="absolute h-[2px] w-full bg-black"
          />

          <motion.span
            animate={
              isOpen
                ? {
                    rotate: -45,
                    y: 0,
                  }
                : {
                    rotate: 0,
                    y: 5,
                  }
            }
            transition={{ duration: 0.25 }}
            className="absolute h-[2px] w-full bg-black"
          />
        </button>

        {/* Desktop Hamburger */}
        <button
          aria-label="Menu"
          className="relative hidden h-[24px] w-[42px] items-center justify-center lg:flex"
        >
          <span className="absolute top-[6px] h-[2px] w-full bg-black"></span>
          <span className="absolute bottom-[6px] h-[2px] w-full bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 top-full z-50 w-full border-t border-[#e5e5e5] bg-[#F5F5F5] lg:hidden"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <motion.li
                  key={link}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer px-6 py-4 text-[16px] text-black transition-colors hover:bg-[#ECECEC]"
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}