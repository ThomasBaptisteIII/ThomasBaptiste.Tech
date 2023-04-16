"use client";
import { motion } from "framer-motion";

const card = ({children}: {children:React.ReactNode}) => {
    
  return (
    <div className="mx-auto px-4 py-5 sm:py-12 sm:px-10 lg:py-16 lg:px-8 ">
      {/* Card Background*/}
      <div className="flex flex-col dark:bg-gradient-to-b  dark:from-emerald-500 dark:via-emerald-700 dark:to-emerald-950 rounded-2xl p-12 shadow-lg dark:outline dark:outline-1 dark:outline-emerald-500 dark:text-emerald-100
      
      bg-gradient-to-b  from-emerald-100 via-emerald-200 to-emerald-200  outline outline-1 outline-emerald-300">
    {children}
      </div>
    </div>
  );
            };

export default card;
