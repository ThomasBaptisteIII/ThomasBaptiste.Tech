"use client";
import { motion } from "framer-motion";
import {AiFillGithub,AiFillInstagram,AiFillLinkedin } from "react-icons/ai";
import {GrLinkedinOption} from "react-icons/gr";
import {SiVercel} from "react-icons/si";


  const card = () => {
    return(
          <div className="mx-auto px-4 py-5 sm:py-12 sm:px-10 lg:py-16 lg:px-8 ">
  <div className="flex flex-col bg-gradient-to-t  from-white via-emerald-100 to-white rounded-2xl p-10 shadow-lg outline-dashed outline-emerald-50">
   
    <div className="relative rounded-lg text-center">
      <h1 className="text-4xl font-bold pb-5 text-emerald-950">Contact Me</h1>

      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-emerald-400"></div>
        <span className="flex-shrink mx-4 text-emerald-400">
          <h2 className="text-3xl font-extralight text-emerald-600">
            Social Media
          </h2>
        </span>
        <div className="flex-grow border-t border-emerald-400"></div>
      </div>
    </div>

    <div>
      <ul className="flex justify-center gap-6 text-4xl py-10 text-gray-700">
        
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <li>
            <a
              href="https://github.com/ThomasBaptisteIII"
              className="hover:text-emerald-600 ease-in duration-700"
            >
              <AiFillGithub />
            </a>
          </li>
        </motion.div>
        
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <li>
            <a
              href="https://www.linkedin.com/in/thomasbaptisteiii/"
              className="hover:text-emerald-600 ease-in duration-700"
            >
              <GrLinkedinOption />
            </a>
          </li>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <li>
            <a
              href="https://www.instagram.com/bertliii3/"
              className="hover:text-emerald-600 ease-in duration-700"
            >
              <AiFillInstagram />
            </a>
          </li>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <li>
            <a
              href=""
              className="hover:text-emerald-600 ease-in duration-700"
            >
              <SiVercel />
            </a>
          </li>
        </motion.div>
      </ul>
    </div>

 

  </div>
</div>
    );
        };

        export default card;