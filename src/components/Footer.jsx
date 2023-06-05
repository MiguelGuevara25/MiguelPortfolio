import { FaReact, FaCopyright } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

const Footer = () => {
  return (
    <div className="text-white flex flex-col items-center gap-3 text-lg py-5 border-t-4 border-yellow-500">
      <div className="flex items-center gap-2">
        <p>All Right Reserved</p>
        <span>
          <FaCopyright />
        </span>
      </div>

      <div className="flex items-end gap-2">
        <p>Built Whit:</p>
        <span className="flex gap-1 text-3xl">
          <FaReact />
          <SiTailwindcss />
          <SiVite />
        </span>
      </div>
    </div>
  );
};

export default Footer;
