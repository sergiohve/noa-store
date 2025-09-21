"use client";
import Header from "./Header";

const Navbar = () => {
  return (
    <div className="fixed z-50 h-16 transition-all duration-700 border-none top-4 inset-x-4">
      <header className="absolute w-full -translate-y-1/2 top-1/2">
        <Header />
      </header>
    </div>
  );
};

export default Navbar;
