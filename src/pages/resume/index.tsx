import Navbar from "../components/navbar";
import Card from "../components/Card";
import PageWrapper from "../components/page-wrapper";
import { motion } from "framer-motion";
import { AiFillDownCircle } from "react-icons/ai";
import Link from "next/link";
import CardHead from "../components/Titles";

export default function Home() {
  return (
    <PageWrapper>
      <main className="min-h-screen">
        <Navbar></Navbar>

        <Card>
          <CardHead className="" id="">
            <div className="flex justify-center ">
              <h1 className="" id="UnlockThePower">
                Unlocking the Power of Technology for Businesses
              </h1>
            </div>
          </CardHead>
          {/* Start of Introductory Paragraphs */}

          <div className="mt-4 dark:text-white">
            <motion.div
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <br />
              <p className="">
                Hello, I'm Thomas Baptiste, a highly skilled and motivated IT
                professional with a passion for leveraging technology to drive
                business success. With a strong background in IT management, web
                development, and programming, I bring a unique blend of
                technical expertise and business acumen to deliver exceptional
                results.
              </p>
            </motion.div>
          </div>
        </Card>
        <Card>
          <CardHead className="" id="">
            <div className="flex justify-center ">
              <h1 className="" id="Experience">
                Experience that Delivers Results
              </h1>
            </div>
          </CardHead>
          <div>
            <motion.div
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <p>
                <br />
                As an IT Student Assistant at Midwestern State University, I
                played a pivotal role in modernizing campus facilities by
                handling the installation and maintenance of audio and video
                network devices across 15 buildings. My dedication to excellence
                and ability to manage complex projects with precision have
                earned me a reputation for delivering results.
              </p>
              <p>
                As the Chief Sales Officer at EPIC Communications Inc., I drove
                business growth by shaping solutions through market trends and
                effectively managing financial and human resources. I pioneered
                two national telecommunications programs and maintained a robust
                network across an entire island, showcasing my strategic vision
                and leadership skills.
              </p>
              <p>
                At the Immigration Department of the Government of Dominica, I
                streamlined the processing and review of international passport
                applications as a Data Entry Clerk, optimizing the workflow and
                ensuring accuracy in a high-pressure environment. Additionally,
                as a Junior Web Developer at the ICT Department of the
                Government of Dominica, I excelled in multitasking and created
                impactful digital designs for various print materials.
              </p>
              <br />
            </motion.div>
          </div>
        </Card>

        <Card>
          <CardHead className="" id="">
            <div className="flex justify-center ">
              <h1 className="" id="Education">
                Education and Certifications
              </h1>
            </div>
          </CardHead>
          <div>
            <motion.div
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <p>
                I hold a Bachelor's degree in Management Information Systems
                from Midwestern State University, where I gained expertise in
                database management, networking, web development, programming,
                systems analysis, and project management. I also possess an
                Associate's degree in Information Technology and Biology from
                Dominica State College, where I honed my skills in cell biology,
                genetics, ecology, evolution, programming, database management,
                network security, and web development.
              </p>
              <p>
                In addition to my academic achievements, I am a Microsoft
                Certified: Azure Fundamentals professional with expertise in
                Azure Functions, Static Web Apps, Subscription Management, DNS
                Configuration, and Billing. I am also an ApTech Certified PHP
                Programmer, showcasing my technical prowess and commitment to
                staying up-to-date with the latest industry trends.
              </p>
              <br />
            </motion.div>
          </div>
        </Card>

        <Card>
          <CardHead className="" id="">
            <div className="flex justify-center ">
              <h1 className="" id="Skills">
                Skills that Drive Innovation
              </h1>
            </div>
          </CardHead>
          <div>
            <motion.div
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <p>
                I am proficient in various programming languages including C++,
                JavaScript, TypeScript, Python, SQL, React, Next.js, Bash, and
                Git. My expertise in Microsoft Azure enables me to develop
                innovative solutions for businesses through cloud technologies.
                I possess strong analytical and problem-solving skills, and I
                thrive in fast-paced environments where I can apply my
                creativity and technical expertise to drive innovation.
              </p>
            </motion.div>
          </div>
        </Card>
      </main>
    </PageWrapper>
  );
}
