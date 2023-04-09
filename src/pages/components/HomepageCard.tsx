"use client";
import { motion } from "framer-motion";

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

    <div className="mt-4 text-gray-600">
      <motion.div
        initial={{ opacity: 0, x: 5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <p>
          Welcome to my portfolio! My name is Thomas Baptiste, and I am
          a young developer with a passion for technology and a drive to
          become a full-stack developer. I will graduate in May and am
          excited to take the next step in my career.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <p>
          <br />
          Throughout my academic journey, I have gained a strong
          foundation in computer science, web development, and
          programming languages like Python, JavaScript, and SQL. I have
          also completed various projects, individually and as part of a
          team, which have given me practical experience in developing
          web applications and mobile apps.
        </p>
        <br />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <p>
          As a full-stack developer, I aim to utilize my skills to
          create innovative and user-friendly web applications that
          solve real-world problems. I believe in a user-centered
          approach to development, where the end-user is always at the
          forefront of the design process. With a keen eye for detail
          and a passion for creating clean, efficient code, I am
          confident in delivering high-quality products.{" "}
        </p>
        <br />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <p>
          Thank you for taking the time to visit my portfolio. I am
          excited about the opportunities and look forward to connecting
          with you soon!
        </p>
      </motion.div>
    </div>

  </div>
</div>
    );
        };

        export default card;