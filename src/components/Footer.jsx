import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Footer = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      {/* footer top */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        {/* Logo + Links */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
        >
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            className="w-32 sm:w-44"
            alt="logo"
          />
          <p className="max-w-md">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          <ul className="flex gap-8 flex-wrap">
            <li>
              <a className="hover:text-primary" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#our-work">
                Our Work
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 max-w-md"
        >
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm mt-2 mb-6">
            Stay updated with our latest news and offers.
          </p>
          <div className="flex gap-2 text-sm">
            <input
              type="text"
              placeholder="Enter your email"
              className="flex-1 border border-gray-300 dark:border-gray-600 rounded-md p-2"
            />
            <button className="bg-primary text-white rounded px-6">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 dark:border-gray-600 my-8" />

      {/* footer bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity:1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
       className="pb-6 text-sm text-gray-500 flex flex-col md:flex-row justify-center items-center gap-4">
        <p>Copyright 2025 @ agency.io - All Rights Reserved</p>
        <div className="flex items-center gap-4">
          <img src={assets.facebook_icon} alt="Facebook" className="w-5 h-5" />
          <img src={assets.twitter_icon} alt="Twitter" className="w-5 h-5" />
          <img
            src={assets.instagram_icon}
            alt="Instagram"
            className="w-5 h-5"
          />
          <img src={assets.linkedin_icon} alt="LinkedIn" className="w-5 h-5" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
