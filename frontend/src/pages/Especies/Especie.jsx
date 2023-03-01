import { Stack, Title, Text, Group, Image, Button, Table, Paper, createStyles } from "@mantine/core"
import { BsArrowLeft } from "react-icons/bs"
import { FaClipboardList } from "react-icons/fa"
import { Link } from "react-router-dom"
import { Carousel } from "@mantine/carousel"

import { useMediaQuery } from '@mantine/hooks'

const useStyles = createStyles((theme) => ({
    card: {
      height: 200,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
}));
  

function Card({ image, title, category }) {
    const { classes } = useStyles();
  
    return (
      <Paper
        shadow="md"
        p="xs"
        radius="md"
        sx={{ backgroundImage: `url(${image})` }}
        className={classes.card}
      >
        <Button size="xs" color="cyan">
          {title}
        </Button>
      </Paper>
    );
}

const Especie = () => {

    const mobile = useMediaQuery('(max-width: 500px)');
    const images = [
        {
            'title': 'Presentación',
            'image': 'https://upload.wikimedia.org/wikipedia/commons/1/10/Starr_021122_0008_odontonema_strictum.jpg' 
        },
        {
            'title': 'Fruto',
            'image': 'https://static.inaturalist.org/photos/117092516/medium.jpeg'
        },
        {
            'title': 'Hojas',
            'image': 'https://static.inaturalist.org/photos/117092516/medium.jpeg'
        },
        {
            'title': 'Flor',
            'image': 'https://static.inaturalist.org/photos/117092516/medium.jpeg'
        },
        {
            'title': 'Flor Detalles',
            'image': 'https://static.inaturalist.org/photos/117092516/medium.jpeg'
        },
        {
            'title': 'Corteza',
            'image': 'https://static.inaturalist.org/photos/117092516/medium.jpeg'
        },
        {
            'title': 'Semilla',
            'image': 'https://static.inaturalist.org/photos/117092516/medium.jpeg'
        }
    ];
    const slides = images.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));
    
    return (
        <Stack className='main'>
            <Group className="btn-group">
                <Link to="/especies">
                    <Button leftIcon={<BsArrowLeft/>}  color="teal">Regresar</Button>
                </Link>
                <Link to="/viveros">
                    <Button leftIcon={<FaClipboardList/>} color="dark">Ver disponibilidad</Button>
                </Link>
            </Group>
			<Title className='title'>Espiga de Fuego</Title>
            <Title order={3} italic className='title'>Odontonema Strictum</Title>
            <Stack className='m-0 species-data' justify='center' align='flex-start' w={"100%"} >
                <Carousel
                    sx={{ maxWidth: '100%', width: '100%'}} 
                    slideSize="45%"
                    slideGap="xs"
                    align="center"
                    slidesToScroll={1}
                    slidesToShow={mobile ? 1 : 3}
                >
                    {slides}
                </Carousel>
                <Stack className="species-ficha" align="center">
                    <Table className="table" highlightOnHover withBorder withColumnBorders>
                        <thead>
                            <tr>
                                <th colSpan={3}>Ficha Técnica</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="category" rowSpan={11}>Taxonomía</td> 
                                <td>Familia</td>
                                <td>--------</td>
                            </tr>
                            <tr>
                                <td>Genero</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Especie</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Subespecie</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Variedad</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Autor</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Sinónimos</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Etimología</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Nombres Comunes</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Hábito de crecimiento</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Bibliografía</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td className="category" rowSpan={3}>Tallo</td>
                                <td>Atributos de la corteza</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Color de corteza</td>
                                <td>-</td>
                            </tr>
                            
                         </tbody>    
                    </Table>    
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Especie;