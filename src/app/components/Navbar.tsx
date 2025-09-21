"use client";
import Header from "./Header";

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 z-50 h-16 transition-all duration-700 border-none top-4 sm:inset-x-6">
      <header className="absolute w-full -translate-y-1/2 top-1/2">
        <Header />
      </header>
    </div>
  );
};

export default Navbar;
