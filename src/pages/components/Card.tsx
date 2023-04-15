"use client";
import { motion } from "framer-motion";

const card = ({children}: {children:React.ReactNode; className:String;id:String}) => {
    
  return (
    <div className="mx-auto px-4 py-5 sm:py-12 sm:px-10 lg:py-16 lg:px-8 ">
      {/* Card Background*/}
      <div className="flex flex-col dark:bg-gradient-to-t  dark:from-white dark:via-emerald-100 dark:to-white rounded-2xl p-12 shadow-lg dark:outline-dashed dark:outline-emerald-50
      
      bg-gradient-to-t  from-emerald-300 via-emerald-200 to-emerald-300   outline-dashed outline-emerald-300">
    {children}
      </div>
    </div>
  );
            };

export default card;
