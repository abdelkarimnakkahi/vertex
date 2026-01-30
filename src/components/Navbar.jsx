import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
function Navbar() {
  const [mobileDrawerOpen, setMobileDrawer] = useState(false);

  const toggleNavBar = () => {
    setMobileDrawer(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="">
            <span className="text-3xl tracking-tight">
              <span className="text-orange-600">V</span>ertex
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              );
            })}
          </ul>
          <div className="hidden lg:flex justify-center space-x-8">
            <a className="py-2 px-3 border rounded-md" href="#">
              Sign In
            </a>
            <a
              className="bg-linear-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
              href="#"
            >
              Create account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button className="cursor-pointer" onClick={toggleNavBar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => {
                return (
                  <li className="py-4" key={index}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                );
              })}
            </ul>
            <div className="flex space-x-6 items-center">
              <a className="py-2 px-3 border rounded-md" href="#">
                Sign In
              </a>
              <a
                className="py-2 px-3 rounded-md bg-linear-to-r from-orange-500 to-orange-800"
                href="#"
              >
                Create account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
