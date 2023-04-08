import Link from "next/link";
import { TiThMenu } from "react-icons/Ti";
import { Gantari } from "next/font/google";

const gantari = Gantari({ subsets: [], style: ["normal"], weight: ["400"] });

const NavbarComponent = () => {
  return (
    <section className={gantari.className}>
      <header className="">
        <div className="relative flex max-w-screen flex-col overflow-hidden px-6 py-4 md:mx-auot md:flex-row md:items-center">
          <Link
            href="#"
            className="flex items-center whitespace-nowrap text-2xl font-black"
          >
         
            <span className="text-xl">Thomas</span>
          </Link>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
          <label
            className="absolute top-5 right-1 cursor-pointer md:hidden"
            htmlFor="navbar-open"
          >
            <span className="sr-only">Toggle Navigation</span>
            <TiThMenu></TiThMenu>
          </label>
          <nav
            aria-label="Header Navigation"
            className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
          >
            <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
              <li className="md:mr-12">
                <Link href="/">Home</Link>
              </li>
              <li className="md:mr-12">
                <Link href="./contact">Contact</Link>
              </li>
              <li className="md:mr-12">
                <Link href="./resume">Resume</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
};

export default NavbarComponent;
