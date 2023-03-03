import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image className="rounded-full" src={logo} alt="Logo" width={50} height={50} />
        </Link>
        <h1>The JAVASCRIPT SPACE</h1>
      </div>
      <div>
        <Link href="https://www.javascripttutorial.net/" target="_blank" className="hidden md:inline-flex px-5 py-3 text-sm md:text-base bg-[#4150B6] text-white flex items-center rounded-full text-center shadow-xl">
            Join the JavaScript Space 🌎🚀
        </Link>
      </div>
    </header>
  );
};

export default Header;
