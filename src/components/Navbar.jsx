import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { AuthContext } from "../contects/AuthProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
const {user}=useContext(AuthContext)
console.log(user)
  //toggle

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  //scrolling sticky condition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //navbarLink

  const navLinks = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full bg-transparent transition-all ease-in-out duration-700 fixed top-0 left-0 right-0">
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "bg-red-500" : ""}`}>
        <div className="flex justify-between items-center">
          <Link
            className="inline-block font-semibold font-sans uppercase"
            to="/"
          >
            Book Store
          </Link>

          <ul className="md:flex space-x-5 hidden">
            {navLinks.map(({ link, path }, index) => (
              <Link
                key={index}
                className="block cursor-pointer uppercase font-sans hover:text-blue-700 font-semibold"
                to={path}
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* mobile responsive */}

          <div >
            <button
              onClick={toggleHandler}
              className="focus:outline-none text-black md:hidden"
            >
              {isOpen ? (
                <RxCross1 className="w-5 h-4 text-black" />
              ) : (
                <CiMenuBurger className="w-5 h-5 text-black" />
              )}
            </button>
            {
              user&& <div>{user.email}</div>
            }
          </div>

          <div
            className={`p-5 mt-16 space-y-6 bg-green-200 ${
              isOpen ? "block fixed top-0 left-0 right-0 md:hidden" : "hidden"
            }`}
          >
            {navLinks.map(({ link, path }, index) => (
              <Link
                key={index}
                className="block cursor-pointer uppercase font-sans hover:text-blue-700 font-semibold"
                to={path}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
