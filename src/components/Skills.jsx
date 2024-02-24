import { FaReact, FaVuejs, FaGithub, FaGitlab, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiVisualstudio,
  SiGit,
  SiVite,
  SiTypescript,
  SiStrapi,
  SiPostgresql,
  SiAstro,
  SiNextdotjs,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-white uppercase font-bold text-3xl titles mb-5">
        Skills and Technologies
      </h1>

      <section className="text-6xl grid grid-create text-yellow-400 gap-4 place-items-center">
        <FaReact className="hover:scale-125 transition-all" />
        <SiTypescript className="hover:scale-125 transition-all" />
        <SiTailwindcss className="hover:scale-125 transition-all" />
        <SiNextdotjs className="hover:scale-125 transition-all" />
        <SiStrapi className="hover:scale-125 transition-all" />
        <FaNodeJs className="hover:scale-125 transition-all" />
        <SiAstro className="hover:scale-125 transition-all" />
        <FaGithub className="hover:scale-125 transition-all" />
        <SiVisualstudio className="hover:scale-125 transition-all" />
        <SiGit className="hover:scale-125 transition-all" />
        <SiPostgresql className="hover:scale-125 transition-all" />
        <FaGitlab className="hover:scale-125 transition-all" />
        <SiVite className="hover:scale-125 transition-all" />
        <FaVuejs className="hover:scale-125 transition-all" />
      </section>
    </div>
  );
};

export default Skills;
