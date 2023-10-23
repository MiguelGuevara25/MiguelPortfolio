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
import { SiTailwindcss, SiMui, SiVite, SiJquery, SiAstro } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { Card, CardMedia, Typography, CardContent } from "@mui/material";

import ProjectCripto from "../img/projectCripto.png";
import ProjectComfisa from "../img/projectComfisa.png";
import ProjectGlinseal from "../img/projectGlinseal.png";
import ProjectPokemon from "../img/projectFightPokemon.png";
import ProjectCotiAutos from "../img/projectCotizadorAutos.png";
import ProjectFestivalMusic from "../img/projectFestivalMusic.png";
import ProjectEstudioJuridico from "../img/projectEstudioJuridico.png";
import ProjectCitasVeterinaria from "../img/projectCitasVeterinaria.png";

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

  return (
    <div className="container mx-auto">
      <h1 className="text-white uppercase font-bold text-3xl titles my-5">
        My Projects
      </h1>
      <Slider {...settings}>
        <a
          href="https://veterinarycitas.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            sx={{
              maxWidth: { xs: 280, lg: 370, xl: 450 },
              height: { md: 300, xs: 325 },
            }}
          >
            <CardMedia
              sx={{ height: 200 }}
              component="img"
              alt="Project Citas Veterinaria"
              image={ProjectCitasVeterinaria}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Veterinary Appointments
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: 17,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Made With:{" "}
                <div className="flex gap-2 font-bold">
                  <FaReact />
                  <SiTailwindcss />
                  <SiVite />
                </div>
              </Typography>
            </CardContent>
          </Card>
        </a>

        <a
          href="https://coticriptos.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            sx={{
              maxWidth: { xs: 280, lg: 370, xl: 450 },
              height: 300,
            }}
          >
            <CardMedia
              component="img"
              sx={{ height: 200 }}
              alt="Project Cripto"
              image={ProjectCripto}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cryptocurrency Quote
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: 17,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Made With:{" "}
                <div className="flex gap-2 font-bold">
                  <FaReact />
                  <SiTailwindcss />
                  <SiVite />
                </div>
              </Typography>
            </CardContent>
          </Card>
        </a>

        <a
          href="https://festivaldemusicaa.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <Card sx={{ maxWidth: { xs: 280, lg: 370, xl: 450 }, height: 300 }}>
            <CardMedia
              sx={{ height: 200 }}
              component="img"
              alt="Project Festival Music"
              image={ProjectFestivalMusic}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Festival Music
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: 17,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Made With:{" "}
                <div className="flex gap-2 font-bold">
                  <FaHtml5 />
                  <FaCss3Alt />
                  <FaSass />
                </div>
              </Typography>
            </CardContent>
          </Card>
        </a>

        <a href="https://abogaest.netlify.app" target="_blank" rel="noreferrer">
          <Card sx={{ maxWidth: { xs: 280, lg: 370, xl: 450 }, height: 300 }}>
            <CardMedia
              component="img"
              sx={{ height: 200 }}
              alt="Project Estudio Juridico"
              image={ProjectEstudioJuridico}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Legal Firm Innova
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: 17,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Made With:{" "}
                <div className="flex gap-2 font-bold">
                  <FaHtml5 />
                  <FaCss3Alt />
                  <DiJavascript1 />
                </div>
              </Typography>
            </CardContent>
          </Card>
        </a>

        <a
          href="https://fightpokemon.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            sx={{
              maxWidth: { xs: 280, lg: 370, xl: 450 },
              height: { md: 300, xs: 325 },
            }}
          >
            <CardMedia
              sx={{ height: 200 }}
              component="img"
              alt="Project Fight Pokemon"
              image={ProjectPokemon}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pokemon Fight Simulator
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: 17,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Made With:{" "}
                <div className="flex gap-2 font-bold">
                  <FaReact />
                  <SiTailwindcss />
                  <SiMui />
                  <SiVite />
                </div>
              </Typography>
            </CardContent>
          </Card>
        </a>

        <a
          href="https://cotiautos.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <Card sx={{ maxWidth: { xs: 280, lg: 370, xl: 450 }, height: 300 }}>
            <CardMedia
              sx={{ height: 200 }}
              component="img"
              alt="Project Coti Autos"
              image={ProjectCotiAutos}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Car Quotation
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: 17,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Made With:{" "}
                <div className="flex gap-2 font-bold">
                  <FaReact />
                  <SiTailwindcss />
                  <SiVite />
                </div>
              </Typography>
            </CardContent>
          </Card>
        </a>

        <a
          href="https://comfisasac.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <Card sx={{ maxWidth: { xs: 280, lg: 370, xl: 450 }, height: 300 }}>
            <CardMedia
              component="img"
              sx={{ height: 200 }}
              alt="Project Comfisa"
              image={ProjectComfisa}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                COMFISA SAC
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: 17,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Made With:{" "}
                <div className="flex gap-2 font-bold">
                  <FaHtml5 />
                  <FaCss3Alt />
                  <FaBootstrap />
                  <SiJquery />
                </div>
              </Typography>
            </CardContent>
          </Card>
        </a>

        <a
          href="https://glinsealastro.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Card sx={{ maxWidth: { xs: 280, lg: 370, xl: 450 }, height: 300 }}>
            <CardMedia
              component="img"
              sx={{ height: 200 }}
              alt="Project Glinseal"
              image={ProjectGlinseal}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Glinseal Website
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: 17,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Made With:{" "}
                <div className="flex gap-2 font-bold">
                  <SiAstro />
                  <FaBootstrap />
                  <DiJavascript1 />
                </div>
              </Typography>
            </CardContent>
          </Card>
        </a>
      </Slider>
    </div>
  );
};

export default Projects;
