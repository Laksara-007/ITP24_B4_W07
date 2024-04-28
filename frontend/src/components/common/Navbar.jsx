import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [burgerNav, setBurgerNav] = useState(false);
  const [selectedItem, setSelectedItem] = useState("About");

  const navItems = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Facilities",
      path: "/facilities",
    },
    {
      name: "Room & Suits",
      path: "/room&suits",
    },
    {
      name: "Dining",
      path: "/food",
    },
    {
      name: "Offers",
      path: "/offers",
    },
    {
      name: "Register",
      path: "/register",
    },
  ];
  return (
    <div className="h-20 w-full bg-[#967F57] flex items-center shadow-xl fixed z-50">
      <div className="flex items-center w-full">
        <Link to="/" className="w-full ml-8 lg:ml-32">
          <div className="w-full ml-8 lg:ml-32">
            <img
              src="images/heritageLogo.png"
              alt="Heritage"
              className="w-32"
            />
          </div>
        </Link>

        <div className="hidden lg:flex items-center w-full justify-between mr-32">
          {navItems.map((item) => {
            return (
              <a href={item.path}>
                <span
                  className={`${
                    item.name === selectedItem ? "text-white" : "text-white"
                  } font-medium`}
                  onClick={() => setSelectedItem(item.name)}
                >
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>

        <TiThMenu
          className={`${
            !burgerNav ? "flex" : "hidden"
          } lg:hidden h-8 w-8 right-0 fixed mr-8`}
          onClick={() => setBurgerNav(true)}
        />
      </div>

      <div>
        <nav
          className={`${
            burgerNav ? "pointer-events-auto" : "pointer-events-none opacity-0"
          } bg-blue-400 backdrop-blur-lg h-full w-full flex flex-col items-center fixed top-0 z-50 left-0 transition-all ease-in-out duration-300`}
        >
          <AiOutlineClose
            className="fixed top-0 right-0 h-9 w-9 text-black mt-2 mr-8 lg:hidden cursor-pointer"
            onClick={() => setBurgerNav(false)}
          />

          {navItems.map((item) => {
            return (
              <div className="w-full h-full flex flex-col justify-center items-center">
                <a href={item.path}>
                  <span
                    className={`${
                      item.name === selectedItem
                        ? "text-white"
                        : "text-[#3E3E3E]"
                    } font-medium text-2xl`}
                    onClick={() => setSelectedItem(item.name)}
                  >
                    {item.name}
                  </span>
                </a>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
