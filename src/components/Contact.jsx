import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
          <form className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit texr-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <div className="lg:flex gap-10 mt-5">
        <div className="lg:w-full mt-5">
          <motion.div
            variants={slideIn("left", "tween", 0.4, 1)}
            className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
          >
            <div className="flex justify-between">
              <p className={styles.sectionSubText}>Mobile</p>
              <p className={styles.sectionSubText}>+91 9969939599</p>
            </div>
            <div className="flex justify-between mt-1">
              <p className={styles.sectionSubText}>Email</p>
              <p className={`${styles.sectionSubText} lowercase`}>
                mayurmewada00@gmail.com
              </p>
            </div>
          </motion.div>
        </div>
        <div className="lg:w-full mt-5">
          <motion.div
            variants={slideIn("left", "tween", 0.6, 1)}
            className="flex-[0.75] flex h-full items-center bg-black-100 p-8 rounded-2xl"
          >
            <div className="flex w-full justify-between items-center">
              <p className={styles.sectionSubText}>Social</p>
              <div className="flex justify-end">
                <a href="https://www.linkedin.com/in/mayur-mewada-419873212/" target='_blank' className={`${styles.sectionSubText} cursor-pointer hover:text-white text-[22px] ml-5`}>
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/mayurmewada" target='_blank' className={`${styles.sectionSubText} cursor-pointer hover:text-white text-[22px] ml-5`}>
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://twitter.com/mayurmewadaa" target='_blank' className={`${styles.sectionSubText} cursor-pointer hover:text-white text-[22px] ml-5`}>
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/mayurmewadaa" target='_blank' className={`${styles.sectionSubText} cursor-pointer hover:text-white text-[22px] ml-5`}>
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
