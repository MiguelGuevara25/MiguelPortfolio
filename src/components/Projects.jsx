import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProjectCripto from "../img/projectCripto.png";
import ProjectPokemon from "../img/projectFightPokemon.png";
import ProjectCotiAutos from "../img/projectCotizadorAutos.png";
import ProjectFestivalMusic from "../img/projectFestivalMusic.png";
import ProjectCitasVeterinaria from "../img/projectCitasVeterinaria.png";
import { Card, CardMedia, Typography, CardContent } from "@mui/material";

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
        <Card sx={{ maxWidth: { xs: 280, lg: 370 }, height: 300 }}>
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
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: { xs: 280, lg: 370 }, height: 300 }}>
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
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: { xs: 280, lg: 370 }, height: 300 }}>
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
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: { xs: 280, lg: 370 }, height: 300 }}>
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
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: { xs: 280, lg: 370 }, height: 300 }}>
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
          </CardContent>
        </Card>
      </Slider>
    </div>
  );
};

export default Projects;
