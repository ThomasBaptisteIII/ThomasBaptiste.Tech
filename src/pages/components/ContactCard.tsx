"use client";
import { motion } from "framer-motion";
import { TiSocialLinkedinCircular, TiSocialGithubCircular, TiSocialInstagramCircular } from "react-icons/ti";


  const card = () => {
    return(
          <div className="mx-auto px-4 py-5 sm:py-12 sm:px-10 lg:py-16 lg:px-8 ">
  <div className="flex flex-col bg-gradient-to-t  from-white via-emerald-100 to-white rounded-2xl p-10 shadow-lg outline-dashed outline-emerald-50">
    <motion.div
    
      animate={{
        borderRadius: ["0%", "10%", "0%", "20%", "50%"],
        scale:1.15,
        
        
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
      }}
      className="rounded-full mx-auto h-50 w-48 bg-gradient-to-b from-emerald-600 via-gray-900 to-black  outline-dotted outline-offset-4 outline-emerald-400 object-fill my-10 shadow-inner"
    >
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.8 },
        }}
        className=""
        src="profile.webp"
        alt="Profile Portrait"
      />
    </motion.div>
    <div className="relative rounded-lg text-center">
      <h1 className="text-5xl font-bold pb-5 text-emerald-950">Thomas Baptiste III</h1>

      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-emerald-400"></div>
        <span className="flex-shrink mx-4 text-emerald-400">
          <h2 className="text-3xl font-extralight text-emerald-600">
            Web Developer
          </h2>
        </span>
        <div className="flex-grow border-t border-emerald-400"></div>
      </div>
    </div>

    <div>
      <ul className="flex justify-center gap-6 text-5xl py-10 text-gray-700">
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
              <TiSocialInstagramCircular />
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
              href="https://github.com/ThomasBaptisteIII"
              className="hover:text-emerald-600 ease-in duration-700"
            >
              <TiSocialGithubCircular />
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
              <TiSocialLinkedinCircular />
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