import { useState, useEffect, useMemo } from "react";
import { NavLink, Link } from "react-router-dom";
import { Search, Cart, Auth, Menu, Cross } from "../../constants/icons";
import logo from "../../assets/images/logo-light.svg";
import { links } from "../../constants/linksList";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const cart = useMemo(
    () => JSON.parse(localStorage.getItem("cart")) || [],
    []
  );
  const [cartLength, setCartLength] = useState(cart.length);

  useEffect(() => {
    setCartLength(cart.length);
  }, [cart]);

  return (
    <header className="bg-dark-gray text-gray-500 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between h-20 p-4">
        {/* Logo */}
        <a href="/" className="logo">
          <img src={logo} className="w-36" alt="Tronmark logo" />
        </a>

        {/* Navigation */}
        <nav
          className={`absolute top-20 left-0 w-full bg-dark-gray transition-all duration-300 
          lg:static lg:w-fit lg:translate-y-0 lg:opacity-100 lg:z-10
          ${
            isOpen
              ? "translate-y-0 z-50 opacity-100"
              : "translate-y-20 -z-50 opacity-0 lg:opacity-100 lg:z-10"
          }`}
        >
          <ul className="flex flex-col items-center gap-10 lg:flex-row h-screen lg:h-fit lg:gap-5">
            {links.map(({ id, link, name }) => (
              <li key={id}>
                <NavLink
                  to={link}
                  className={({ isActive }) =>
                    `font-medium ${
                      isActive ? "text-white" : "text-gray-500 hover:text-white"
                    }`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Cart */}
          <button
            className="relative p-3 rounded-full bg-primary-100 hover:bg-primary-200"
            aria-label="View cart"
          >
            <Link to="/cart" className="flex items-center gap-2 text-white">
              <Cart />
              {cartLength > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 text-[10px] text-white bg-red-700 rounded-full">
                  {cartLength}
                </span>
              )}
            </Link>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-200 hover:text-white"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Cross /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export default Header;
