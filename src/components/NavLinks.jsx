import "../styles/links.css";

const NavLinks = () => {
  return (
    <div className="z-10 flex lg:flex-row lg:gap-10 text-lg font-bold cursor-pointer text-white">
      <a className="links hover:text-white text-center relative hover:before:top-0">
        About Me
      </a>
      <a className="links hover:text-white text-center relative hover:before:top-0">
        Skills
      </a>
      <a className="links hover:text-white text-center relative hover:before:top-0">
        My Projects
      </a>
      <a className="links hover:text-white text-center relative hover:before:top-0">
        Contact me
      </a>
    </div>
  );
};

export default NavLinks;
