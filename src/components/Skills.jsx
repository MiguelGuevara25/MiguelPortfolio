import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaGithub,
  FaNpm,
  FaPhp,
  FaGitlab,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiVisualstudio,
  SiGit,
  SiMysql,
  SiVite,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-white uppercase font-bold text-3xl titles mb-5">
        Skills and Technologies
      </h1>

      <section className="text-6xl grid grid-create text-yellow-400 gap-4 place-items-center">
        <FaHtml5 className="hover:scale-125 transition-all" />
        <FaCss3Alt className="hover:scale-125 transition-all" />
        <SiJavascript className="hover:scale-125 transition-all" />
        <FaReact className="hover:scale-125 transition-all" />
        <SiTailwindcss className="hover:scale-125 transition-all" />
        <FaVuejs className="hover:scale-125 transition-all" />
        <SiVisualstudio className="hover:scale-125 transition-all" />
        <FaGithub className="hover:scale-125 transition-all" />
        <SiGit className="hover:scale-125 transition-all" />
        <FaNpm className="hover:scale-125 transition-all" />
        <SiMysql className="hover:scale-125 transition-all" />
        <FaPhp className="hover:scale-125 transition-all" />
        <FaGitlab className="hover:scale-125 transition-all" />
        <SiVite className="hover:scale-125 transition-all" />
      </section>
    </div>
  );
};

export default Skills;
