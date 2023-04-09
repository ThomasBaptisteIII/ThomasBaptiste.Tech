"use client";
import { motion, AnimatePresence } from "framer-motion";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {return( 
  <>
    <AnimatePresence>
      <motion.div>
       {children}
      </motion.div>
    </AnimatePresence>
  </>
);
};
export default PageWrapper;