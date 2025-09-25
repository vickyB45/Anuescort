// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile sidebar
  const [activeDropdown, setActiveDropdown] = useState(null); // dropdown control

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
     {
      name: "Service",
      dropdown: [
        { label: "Collage Girl", href: "/collage-girl" },
        { label: "Housewife", href: "/house-wife" },
        { label: "Pretty Girl", href: "/pretty-girl" },
        { label: "Russion", href: "/russion" },
      ],
    },
    {
      name: "Location",
      dropdown: [
        { label: "Udaipur ", href: "/udaipur" },
      ],
    },
  ];

  return (
    <nav className="bg-black sticky top-0 left-0 z-50 text-white p-6 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
<Link to="/">
        <img className="w-40 cursor-pointer" src="/images/logo.png" alt="logo" />
</Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 font-medium">
        {links.map((link) =>
          link.dropdown ? (
            <li
              key={link.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 hover:text-purple-400 transition">
                <span>{link.name}</span>
                <ChevronDown size={16} />
              </button>

              {/* Dropdown */}
              {activeDropdown === link.name && (
                <ul className="absolute left-0   bg-black shadow-lg rounded-md w-40">
                  {link.dropdown.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className="block px-4 py-2 hover:bg-purple-600 transition rounded-md"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li key={link.name}>
              <Link to={link.href} className="hover:text-purple-400 transition">
                {link.name}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Call Button */}
      <a
        href="tel:+919654416731"
        className="hidden md:inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
      >
        +91 99963 65001
      </a>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Sidebar */}
      {open && (
         <div className="fixed inset-0 z-[999] bg-black/90">
        <div className="absolute z-[60] top-0 right-0 w-64 h-full bg-black text-white p-6 flex flex-col space-y-6 shadow-lg">
          <button className="self-end mb-6" onClick={() => setOpen(false)}>
            <X size={28} />
          </button>

          {links.map((link) =>
            link.dropdown ? (
              <div key={link.name}>
                <button
                  className="flex items-center justify-between w-full hover:text-purple-400 transition"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === link.name ? null : link.name
                    )
                  }
                >
                  {link.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      activeDropdown === link.name ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeDropdown === link.name && (
                  <ul className="ml-4 mt-2 space-y-2 text-sm">
                    {link.dropdown.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="block hover:text-purple-400 transition"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-purple-400 transition"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            )
          )}

          {/* CTA Button */}
          <a
            href="tel:+919654416731"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-center transition"
          >
            +91 7690000848
          </a>
        </div>
        </div>
      )}
    </nav>
  );
}
