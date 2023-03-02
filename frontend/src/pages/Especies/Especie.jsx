import { Stack, Title, Text, Group, Image, Button, Table, Paper, createStyles } from "@mantine/core"
import { BsArrowLeft } from "react-icons/bs"
import { FaClipboardList } from "react-icons/fa"
import { Link } from "react-router-dom"
import { Carousel } from "@mantine/carousel"
import { openModal, closeModal } from '@mantine/modals';


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
    const openImage = () => {
        openModal({
            overlayOpacity: 0.9,
            size: '75%',
            children: (
                <Image width={"100%"} height={"auto"} src={image} withPlaceholder />
            ),
        });
    };
    return (
      <Paper
        shadow="md"
        p="xs"
        radius="md"
        sx={{ backgroundImage: `url(${image})` }}
        className={classes.card}
      >
        <Button size="xs" color="cyan" onClick={openImage}>
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
            'image': 'https://static.inaturalist.org/photos/18561338/large.jpg' 
        },
        {
            'title': 'Fruto',
            'image': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cedrela_odorata-fruit.jpg'
        },
        {
            'title': 'Hojas',
            'image': 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Starr_030807-9001_Cedrela_odorata.jpg'
        },
        {
            'title': 'Flor',
            'image': 'https://inaturalist-open-data.s3.amazonaws.com/photos/7619761/large.jpeg'
        },
        {
            'title': 'Flor Detalles',
            'image': ''
        },
        {
            'title': 'Corteza',
            'image': 'https://inaturalist-open-data.s3.amazonaws.com/photos/30791470/original.jpeg'
        },
        {
            'title': 'Semilla',
            'image': 'https://inaturalist-open-data.s3.amazonaws.com/photos/224514754/large.jpg'
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
			<Title className='title'>Cedro</Title>
            <Title order={3} italic className='title'>Cedrela odorata</Title>
            <Stack className='m-0 species-data' justify='center' align='flex-start' w={"100%"} >
                <Carousel
                    sx={{ maxWidth: '100%', width: '100%'}} 
                    slideSize="45%"
                    slideGap="xs"
                    align="center"
                    slidesToScroll={1}
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
                            <td>Meliaceae</td>
                        </tr>
                        <tr>
                            <td>Genero</td>
                            <td>Cedrela odorata</td>
                        </tr>
                        <tr>
                            <td>Especie</td>
                            <td>Equisetopsida C. Agardh</td>
                        </tr>
                        <tr>
                            <td>Subespecie</td>
                            <td>Magnoliidae Novák ex Takht.</td>
                        </tr>
                        <tr>
                            <td>Variedad</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Autor</td>
                            <td>L.</td>
                        </tr>
                        <tr>
                            <td>Sinónimos</td>
                            <td>Cedrela brachystachya, Cedrela brownii Loefl. ex Kuntze, Cedrela caldasana C. DC.</td>
                        </tr>
                        <tr>
                            <td>Etimología</td>
                            <td>Cedrela, diminutivo de Cedrus, por su similaridad con la madera de este género; odorata, adjetivo latino que significa perfumado, oloroso, por su madera</td>
                        </tr>
                        <tr>
                            <td>Nombres Comunes</td>
                            <td>Cedro</td>
                        </tr>
                        <tr>
                            <td>Hábito de crecimiento</td>
                            <td>Arborea</td>
                        </tr>
                        <tr>
                            <td>Bibliografía</td>
                            <td>EN A2cd - Endangered - National</td>
                        </tr>
                        <tr>
                            <td className="category" rowSpan={2}>Tallo</td>
                            <td>Atributos de la corteza</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Color de corteza</td>
                            <td>gris</td>
                        </tr>
                        <tr>
                            <td className="category" rowSpan={3}>Raíz</td>
                            <td>Forma de reproducción</td>
                            <td>por viento y por aves</td>
                        </tr>
                        <tr>
                            <td>Atributos radiculares</td>
                            <td>profundos</td>
                        </tr>
                        <tr>
                            <td>Tipo de enraizamiento</td>
                            <td>profundos</td>
                        </tr>
                        <tr>
                            <td className="category" rowSpan={6}>Flor</td>
                            <td>Atributos florales</td>
                            <td>Las flores son unisexuales, pequeñas, con 4 sépalos en forma de copa, corola con apariencia tubular, 5 pétalos angostos.</td>
                        </tr>
                        <tr>
                            <td>Color de flor</td>
                            <td>blanco</td>
                        </tr>
                        <tr>
                            <td>Disposición de flores</td>
                            <td>Panicula</td>
                        </tr>
                        <tr>
                            <td>Sistema de polinización</td>
                            <td>insectos</td>
                        </tr>
                        <tr>
                            <td>Estación de floración</td>
                            <td>Época Húmeda</td>
                        </tr>
                        <tr>
                            <td>Meses de floración</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="category" rowSpan={4}>Hoja</td>
                            <td>Atributos foliares</td>
                            <td>Miden entre 15 y 50 cm de longitud, con 5 a 11 pares de folíolos, lanceolados a oblongos, margen entero y ápice acuminado.</td>
                        </tr>
                        <tr>
                            <td>Persistencia de la hoja</td>
                            <td>Caducifolia</td>
                        </tr>
                        <tr>
                            <td>Posición de la hoja en el tallo</td>
                            <td>alterna</td>
                        </tr>
                        <tr>
                            <td>Composición de la hoja</td>
                            <td>Compuesta paripinnada</td>
                        </tr>
                        <tr>
                            <td className="category" rowSpan={5}>Fruto / Semilla</td>
                            <td>Tipo de fruto</td>
                            <td>Capsula</td>
                        </tr>
                        <tr>
                            <td>Sistemas de dispersión de frutos</td>
                            <td>Anemocoria (viento), Aves frugívoras</td>
                        </tr>
                        <tr>
                            <td>Atributos de fruto</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Atributos de semilla</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Meses de fructificación</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td className="category" rowSpan={4}>Ecología</td>
                            <td>Rango altitudinal</td>
                            <td>0 - 1000 msnm, 1001 - 1500 msnm, 1501 - 2000 msnm</td>
                        </tr>
                        <tr>
                            <td>Distribución geográfica</td>
                            <td>de Mexico Hasta Argentina</td>
                        </tr>
                        <tr>
                            <td>Origen</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Estado de conservación</td>
                            <td>En peligro</td>
                        </tr>
                        <tr>
                            <td className="category" rowSpan={2}>Etnobotánica</td>
                            <td>Categoría de uso</td>
                            <td>Ornamental</td>
                        </tr>
                        <tr>
                            <td>Detalle de uso</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td className="category" rowSpan={16}>Arboricultura</td>
                            <td>Uso en espacio público</td>
                            <td>Separador autopistas, Orejas de puente, Cerros, Retiros de quebrada, Parques, Separador arterias principales, Andenes vías de servicio, Plazas/Plazoletas, Edificios institucionales</td>
                        </tr>
                        <tr>
                            <td>Limitaciones de flores</td>
                            <td>ninguna</td>
                        </tr>
                        <tr>
                            <td>Limitaciones de frutos</td>
                            <td>Masivos: afecta movilidad de peatones y vehículos</td>
                        </tr>
                        <tr>
                            <td>Longevidad</td>
                            <td>Alta</td>
                        </tr>
                        <tr>
                            <td>Plagas y enfermedades</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Atracción de la fauna</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Fauna asociada</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Requerimiento de luminosidad</td>
                            <td>Alta</td>
                        </tr>
                        <tr>
                            <td>Tasa de crecimiento</td>
                            <td>Rapida</td>
                        </tr>
                        <tr>
                            <td>Altura máxima (m)</td>
                            <td>2000 msnm</td>
                        </tr>
                        <tr>
                            <td>Amplitud de copa (m)</td>
                            <td>7-14 </td>
                        </tr>
                        <tr>
                            <td>Forma de copa</td>
                            <td>Oval</td>
                        </tr>
                        <tr>
                            <td>DAP (cm)</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Densidad del follaje</td>
                            <td>Alta</td>
                        </tr>
                        <tr>
                            <td>Tipo de suelo</td>
                            <td>Bien drenado</td>
                        </tr>
                        <tr>
                            <td>Zona Humedad</td>
                            <td>seca, humeda</td>
                        </tr>
                         </tbody>    
                    </Table>    
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Especie;