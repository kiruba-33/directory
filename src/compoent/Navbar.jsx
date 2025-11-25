import { memo, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Home, Info, Tag, Briefcase, Store, Phone, Search, MapPin } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: <Home size={18} /> },
  { name: "Offers", path: "/offers", icon: <Tag size={18} /> },
  { name: "Store", path: "/store", icon: <Store size={18} /> },
   { name: "Jobs", path: "/jobs", icon: <Briefcase size={18} /> },
   { name: "About", path: "/about", icon: <Info size={18} /> },
  { name: "Contact", path: "/contact", icon: <Phone size={18} /> },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // --- NEW STATES FOR SMART SCROLL ---
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // --- SMART SCROLL EFFECT ---
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsSticky(currentY > 10);

      if (currentY > lastScrollY) setIsVisible(false);  // Hide on scroll down
      else setIsVisible(true); // Show on scroll up

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isSticky ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-white"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >

      {/* MAIN NAVBAR */}
      <div className="px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-center">
          <img src="/src/assets/images/logo.png" alt="Logo" className="w-14 mx-auto" />
          <h1 className="text-xl font-bold">
            DIRECTORY<span className="text-red-500">PLUS</span>
          </h1>
        </div>

        {/* CENTER MENU */}
        <ul className="hidden md:flex gap-10 font-medium tracking-wide">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative group flex items-center gap-1 ${
                  isActive ? "text-red-500 font-semibold" : "text-black"
                } hover:text-red-500 transition`
              }
            >
              {item.icon} {item.name}
              <span className="absolute left-0 bottom-[-3px] w-0 group-hover:w-full h-[2px] bg-red-500 transition-all"></span>
            </NavLink>
          ))}
        </ul>

        {/* RIGHT BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          <button className="border border-red-500 text-red-500 px-4 py-1 rounded hover:bg-red-500 hover:text-white transition">
            Login
          </button>
          <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-black transition">
            Register
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden text-black" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* SEARCH BAR (DESKTOP + TABLET) */}
<div className="w-full flex justify-center mt-4">
  <div className="flex items-center bg-[#f6f8fa] w-[70%] rounded-full px-4 py-2 shadow-sm">
    
    <input
      type="text"
      placeholder="Search for any brand or product"
      className="w-full bg-transparent outline-none text-gray-700"
    />

    {/* Search Button */}
    <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-all duration-200">
      Search
    </button>
  </div>
</div>



      {/* 📱 MOBILE MENU */}
      {open && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 text-white p-6 z-50 overflow-y-auto">

          {/* MENU ITEMS */}
          <div className="flex flex-col gap-6 text-lg mt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 hover:text-red-500 transition"
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>

          {/* LOGIN / REGISTER */}
          <div className="flex flex-col gap-3 pt-6">
            <button className="bg-red-500 w-full py-2 rounded-md">Login</button>
            <button className="bg-white text-black w-full py-2 rounded-md">Register</button>
          </div>

          {/* 🔽 SEARCH BELOW MENU */}
          <div className="flex flex-col gap-3 pt-6">
            <div className="flex items-center bg-white border rounded-md px-3 py-2 shadow">
              <Search size={16} className="text-gray-600" />
              <input type="text" placeholder="Name or Keyword" className="ml-2 outline-none text-sm w-full" />
            </div>

            <div className="flex items-center bg-white border rounded-md px-3 py-2 shadow">
              <MapPin size={16} className="text-gray-600" />
              <input type="text" placeholder="City or Location" className="ml-2 outline-none text-sm w-full" />
            </div>

            <button className="bg-red-500 hover:bg-black text-white px-6 py-2 rounded-md w-full">
              Search
            </button>
          </div>

        </div>
      )}
    </nav>
  );
};

export default memo(Navbar);
