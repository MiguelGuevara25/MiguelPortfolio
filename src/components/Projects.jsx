import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMui,
  SiVite,
  SiJquery,
  SiAstro,
  SiNextdotjs,
  SiStrapi,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandVercel } from "react-icons/tb";
import { Card, CardMedia, Typography, CardContent } from "@mui/material";

import ProjectCripto from "../img/projectCripto.png";
import ProjectComfisa from "../img/projectComfisa.png";
import ProjectGlinseal from "../img/projectGlinseal.png";
import ProjectSusanaFerrel from "../img/projectSusana.png";
import ProjectPokemon from "../img/projectFightPokemon.png";
import ProjectCyberborder from "../img/projectCyberborder.png";
import ProjectCotiAutos from "../img/projectCotizadorAutos.png";
import ProjectFestivalMusic from "../img/projectFestivalMusic.png";
import ProjectEstudioJuridico from "../img/projectEstudioJuridico.png";
import ProjectCitasVeterinaria from "../img/projectCitasVeterinaria.png";
import ProjectMuseosLima from "../img/projectMuseosLima.png";
import ProjectCfGandia from "../img/projectCfGandia.png";
import ProjectPristinePools from "../img/projectPristinePools.png";

const Projects = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerPadding: "50px",
    centerMode: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const technology = (tech) => {
    switch (tech) {
      case "HTML5":
        return <FaHtml5 />;
      case "CSS3":
        return <FaCss3Alt />;
      case "React":
        return <FaReact />;
      case "Sass":
        return <FaSass />;
      case "Bootstrap":
        return <FaBootstrap />;
      case "Tailwindcss":
        return <SiTailwindcss />;
      case "Material-UI":
        return <SiMui />;
      case "Vite":
        return <SiVite />;
      case "Javascript":
        return <DiJavascript1 />;
      case "jQuery":
        return <SiJquery />;
      case "Astro":
        return <SiAstro />;
      case "Next.js":
        return <SiNextdotjs />;
      case "Strapi":
        return <SiStrapi />;
      case "Vercel":
        return <TbBrandVercel />;
      default:
        return <FaHtml5 />;
    }
  };

  const data = [
    {
      title: "Susana Ferrel",
      image: ProjectSusanaFerrel,
      technologies: ["React", "Tailwindcss", "Vite", "Strapi"],
      link: "https://susanaferrel.com/",
    },

    {
      title: "Museos Lima",
      image: ProjectMuseosLima,
      technologies: ["Astro", "React", "Tailwindcss"],
      link: "https://museos-lima.vercel.app/",
    },

    {
      title: "Cyberborder",
      image: ProjectCyberborder,
      technologies: ["Next.js", "Bootstrap", "Vercel"],
      link: "https://www.cyberborder.com/",
    },

    {
      title: "Veterinary Appointments",
      image: ProjectCitasVeterinaria,
      technologies: ["React", "Tailwindcss", "Vite"],
      link: "https://veterinarycitas.netlify.app",
    },
    {
      title: "Cryptocurrency Quote",
      image: ProjectCripto,
      technologies: ["React", "Tailwindcss", "Vite"],
      link: "https://coticriptos.netlify.app",
    },
    {
      title: "Festival Music",
      image: ProjectFestivalMusic,
      technologies: ["HTML5", "CSS3", "Sass"],
      link: "https://festivaldemusicaa.netlify.app",
    },
    {
      title: "Legal Firm Innova",
      image: ProjectEstudioJuridico,
      technologies: ["HTML5", "CSS3", "Javascript"],
      link: "https://abogaest.netlify.app",
    },
    {
      title: "Pokemon Fight Simulator",
      image: ProjectPokemon,
      technologies: ["React", "Tailwindcss", "Material-UI", "Vite"],
      link: "https://fightpokemon.netlify.app",
    },
    {
      title: "Car Quotation",
      image: ProjectCotiAutos,
      technologies: ["React", "Tailwindcss", "Vite"],
      link: "https://cotiautos.netlify.app",
    },
    {
      title: "COMFISA SAC",
      image: ProjectComfisa,
      technologies: ["HTML5", "CSS3", "Bootstrap", "jQuery"],
      link: "https://comfisasac.netlify.app",
    },

    {
      title: "Glinseal Website",
      image: ProjectGlinseal,
      technologies: ["Astro", "Bootstrap", "Javascript"],
      link: "https://glinsealastro.vercel.app/",
    },

    {
      title: "Pristine Pool & Spa",
      image: ProjectPristinePools,
      technologies: ["Next.js", "Bootstrap", "Vercel"],
      link: "https://glinsealastro.vercel.app/",
    },
    
    {
      title: "CF Gandia",
      image: ProjectCfGandia,
      technologies: ["Next.js", "Bootstrap", "Strapi", "Vercel"],
      link: "https://www.cyberborder.com/",
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-white uppercase font-bold text-3xl titles my-5">
        My Projects
      </h1>
      <Slider {...settings}>
        {data.map((project, index) => {
          return (
            <a href={project.link} target="_blank" rel="noreferrer" key={index}>
              <Card
                sx={{
                  height: { xs: 380, md: 350 },
                  maxWidth: { xs: 265, lg: 370, xl: 450 },
                }}
              >
                <CardMedia
                  sx={{ height: 250 }}
                  component="img"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>

                  <div className="flex gap-2 font-bold">
                    <Typography variant="body2">Made with:</Typography>
                    {project.technologies.map((tech) => {
                      return (
                        <div key={tech} className="text-xl">
                          {technology(tech)}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </a>
          );
        })}
      </Slider>
    </div>
  );
};

export default Projects;
