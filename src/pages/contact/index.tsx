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
              <h1 className="" id="Contact">
              Contact Me
              </h1>
            </div>
          </CardHead>
          <div>
          <motion.div
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
            <p>Let's Connect!<br /><br />

I am excited about the opportunity to contribute my skills and experience to your organization. Feel free to reach out to me at ThomasBaptisteIII@outlook.com or call me at 940 882-0181. You can also connect with me on LinkedIn at https://www.linkedin.com/in/thomasbaptisteiii/ or visit my website at thomasbaptiste.tech to learn more about my expertise and achievements.

Thank you for visiting my website, and I look forward to connecting with you soon!
<br /><br />
Sincerely,
<br />
Thomas Baptiste</p>
              
            </motion.div>
          </div>
        </Card>
       
      </main>
    </PageWrapper>
  );
}
