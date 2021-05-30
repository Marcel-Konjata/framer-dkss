import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="px-3 flex items-center py-3 shadow">
      <nav className="block">menu</nav>
      <h5 className="text-2xl mx-auto">
        <Link href="/">
          <a>DKSS with framer motion</a>
        </Link>
      </h5>
    </header>
  );
};

export default Header;
