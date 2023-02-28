import { Stack, Title, Text, Group, Grid, Image, Button, Table } from "@mantine/core"
import { BsArrowLeft } from "react-icons/bs"
import { FaClipboardList } from "react-icons/fa"
import { Link } from "react-router-dom"
const Especie = () => {

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
            <Title order={3} className='title'>Odontonema Strictum</Title>
            <Grid className='m-0 species-data' justify='center' align='flex-start' w={"100%"} >
                
                <Grid.Col className="species-images" align="center">
                    <Stack className="container">
                        <Image height={200} width={300} className="species-img" withPlaceholder radius="md" caption="Vista Frontal" src="https://upload.wikimedia.org/wikipedia/commons/1/10/Starr_021122_0008_odontonema_strictum.jpg" alt=""></Image>
                        <Image height={200} width={300} className="species-img" withPlaceholder radius="md" caption="Vista Copa" src="https://static.inaturalist.org/photos/117092516/medium.jpeg" alt=""></Image>
                        <Image height={200} width={300} className="species-img" withPlaceholder radius="md" caption="Vista tallo" src="null" alt=""></Image>
                    </Stack>
                </Grid.Col>
                <Grid.Col className="species-ficha" align="center">
                    <Table className="table" highlightOnHover withBorder withColumnBorders>
                        <thead>
                            <tr>
                                <th colSpan={3}>Ficha Técnica</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={7}>Taxonomía</td> 
                                <td>Nombre Cientifico</td>
                                <td>Odontonema Strictum</td>
                            </tr>
                            <tr>
                                <td>Nombre Común</td>
                                <td>Espiga de Fuego</td>
                            </tr>
                            <tr>
                                <td>Familia</td>
                                <td>Acanthaceae</td>
                            </tr>
                            <tr>
                                <td>Subfamilia</td>
                                <td>Acanthoideae</td>
                            </tr>
                            <tr>
                                <td>Genero</td>
                                <td>Odontonema</td>
                            </tr>
                            <tr>
                                <td>Autor</td>
                                <td>Kuntze 1981</td>
                            </tr>
                            <tr>
                                <td>Habito de crecimiento</td>
                                <td>Arbusto</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>Tallo</td>
                                <td>Atributos de Corteza</td>
                                <td>Glabra</td>
                            </tr>
                            <tr>
                                <td>Color de Corteza</td>
                                <td>Verde</td>
                            </tr>
                            <tr>
                                <td rowSpan={3}>Raiz</td>
                                <td>Forma de reproducción</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Tipo de enraizamiento</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Atributos radiculares</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td rowSpan={6}>Flor</td>
                                <td>Color de flor</td>
                                <td>Rojas</td>
                            </tr>
                            <tr>
                                <td>Atributos Florales</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Disposición Floral</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Sistema de Polinización</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Estado de floración</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Meses de floración</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td rowSpan={4}>Hojas</td>
                                <td>Forma de hoja</td>
                                <td>Elíptica</td>
                            </tr>
                         </tbody>    
                    </Table>    
                </Grid.Col>
            </Grid>
        </Stack>
    )
}

export default Especie;