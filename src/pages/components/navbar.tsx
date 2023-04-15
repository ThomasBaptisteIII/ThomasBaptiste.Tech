import Link from "next/link";
import { useRouter } from "next/router";
import { TiThMenu } from "react-icons/ti";
import { Gantari } from "next/font/google";
import { motion,AnimatePresence } from "framer-motion";

const gantari = Gantari({ subsets: [], style: ["normal"], weight: ["400"] });

const NavbarComponent = () => {
  const router = useRouter();
  const isActive = (href: string) => {
    return router.pathname === href
      ? "font-black"
      : "";
  };

  const linkVariants = {
    active: { scale: 1.2 },
    inactive: { scale: 1 }
  };

  return (

    <section className={gantari.className}>
      <header className="bg-emerald-100 dark:bg-emerald-700  p-5">
        <div className="relative flex max-w-screen flex-col overflow-hidden px-6 py-4 md:mx-auto md:flex-row md:items-center">
          <Link
            href="/"
            className="flex items-center whitespace-nowrap text-2xl font-black"
          >
            <span className="text-xl">Home</span>
          </Link>
          <input type="checkbox" className="peer hidden" id="navbar-open" />
          <label
            className="absolute top-5 right-1 cursor-pointer md:hidden"
            htmlFor="navbar-open"
          >
            <span className="sr-only">Toggle Navigation</span>
            <TiThMenu className="hover:text-emerald-300 transition-all 0.8s ease-in-out"></TiThMenu>
          </label>
          <nav
            aria-label="Header Navigation"
            className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
          >
            <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
              <motion.li
                variants={linkVariants}
                animate={isActive("/resume") ? "active" : "inactive"}
                exit={{ scale: 1.1 }}
                whileHover={{opacity:0.8}}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="md:mr-12 font-medium"
              >
                <Link href="./resume" className={`${isActive("/resume")}`}>
                  Resume
                </Link>
              </motion.li>
              <motion.li
                variants={linkVariants}
                animate={isActive("/contact") ? "active" : "inactive"}
                exit={{ scale: 1.1 }}
                whileHover={{ opacity:0.8 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="md:mr-12 font-medium"
              >
                <Link href="./contact" className={`${isActive("/contact")}`}>
                  Contact
                </Link>
              </motion.li>
            </ul>
          </nav>
        </div>
      </header>
    </section>

  );
};

export default NavbarComponent;
