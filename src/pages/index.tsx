import Navbar from "./components/navbar";
import Card from "./components/Card";
import PageWrapper from "./components/page-wrapper";
import { motion } from "framer-motion";
import { AiFillDownCircle } from "react-icons/ai";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper>
      <main className="min-h-screen">
        <Navbar></Navbar>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="min-h-screen "
        >
          {/* Center Topic Landing Sentence */}
          <div className="relative rounded-lg text-center">
            {/* Start of Image Animation */}
            <motion.div
              animate={{
                borderRadius: ["0%", "10%", "0%", "20%", "50%"],
                scale: 1.15,
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
              }}
              className="rounded-full mx-auto h-64 w-64 bg-gradient-to-b from-emerald-600 via-gray-900 to-black outline-dotted outline-offset-4 outline-emerald-400  object-fill my-10 shadow-inner"
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

            {/* End of Image Animation */}

            {/* Introduction Heading */}
            <h1 className="text-5xl  font-bold pb-5 text-emerald-950 dark:text-emerald-200">
              <motion.span
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="flex justify-center text-5xl  font-extralight pb-5 text-emerald-950 dark:text-emerald-200"
              >
                I'm
              </motion.span>{" "}
              Thomas Baptiste III
            </h1>
            {/* Career Title  */}
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-emerald-400 dark:border-emerald-300"></div>
              <span className="flex-shrink mx-4">
                <motion.h2
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="text-5xl font-light text-emerald-600 dark:text-emerald-400"
                >
                  Software Engineer
                </motion.h2>
              </span>

              <div className="flex-grow border-t border-emerald-400 dark:border-emerald-300"></div>
            </div>
          </div>
          {/* End of Career title */}
          {/* Go To Bottom Icon */}
          <div className=" animate-bounce flex flex-col items-center text-5xl text-emerald-600 dark:text-emerald-400">
            <Link href="#FirstCard">
              <AiFillDownCircle></AiFillDownCircle>
            </Link>
          </div>
          {/* End of Go To Bottom Icon */}
        </motion.div>
        {/* Next Card */}
        <Card className="" id="FirstCard">
          {/* Start of Introductory Paragraphs */}

          <div className="mt-4 dark:text-emerald-950">
            <motion.div
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <h1 className="">
                Unlocking the Power of Technology for Businesses
              </h1>
              <p className="">
                Hello, I'm Thomas Baptiste, a highly skilled and motivated IT
                professional with a passion for leveraging technology to drive
                business success. With a strong background in IT management, web
                development, and programming, I bring a unique blend of
                technical expertise and business acumen to deliver exceptional
                results.
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
                foundation in computer science, web development, and programming
                languages like Python, JavaScript, and SQL. I have also
                completed various projects, individually and as part of a team,
                which have given me practical experience in developing web
                applications and mobile apps.
              </p>
              <br />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <p>
                As a full-stack developer, I aim to utilize my skills to create
                innovative and user-friendly web applications that solve
                real-world problems. I believe in a user-centered approach to
                development, where the end-user is always at the forefront of
                the design process. With a keen eye for detail and a passion for
                creating clean, efficient code, I am confident in delivering
                high-quality products.{" "}
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
        </Card>
      </main>
    </PageWrapper>
  );
}
