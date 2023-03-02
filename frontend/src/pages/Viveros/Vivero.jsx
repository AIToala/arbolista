import { Stack, Title, Image, Text, Group, Card, Table, Grid, Button, Divider } from "@mantine/core"
import { BsCheckLg } from "react-icons/bs"
import { CgUnavailable } from "react-icons/cg"
import { MdLocationOn } from "react-icons/md"

const Vivero = () => {
    return (
        <Stack className="main vivero">
            <Image src="/images/viveros/poster.jpg" withPlaceholder className="poster" height={"30vh"} fit="cover" sx={
                {
                    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                    position: 'relative',
                    zIndex: 1,
                    '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%)',
                        zIndex: 2,
                    },
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%)',
                        zIndex: 2,
                    },
                }
            }/>
            <Card shadow="md" radius="md" withBorder sx={{
                width: '75%',
                margin: '0 auto',
                height: '100%',
                padding: '0!important',
            }}>
                <Card.Section sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '0!important',
                    padding: '0',
                    backgroundColor: '#fdfdfd',
                }}>
                    <Image src="/images/viveros/vivero2-logo.jpeg" withPlaceholder className="poster" height={180} width={180} fit="contain" sx={{
                        boxShadow: '0 0.25rem 1.875rem rgb(0 0 0 / 10%)',
                        margin: '1rem 1rem',
                    }
                    }></Image>
                    <Stack sx={{
                        display: 'flex',
                        width: '100%',
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        
                    }}>
                        <Title order={1} className="title">Flores & Jardines</Title>
                        <Text className="text">Sr. Camilo Bottero</Text>
                    </Stack>
                </Card.Section>
                <Divider />
                <Grid sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'flex-start',
                    margin: '20px 20px',
                    height: '100%',
                    padding: '0',
                    backgroundColor: '#fdfdfd',
                }}>
                    <Stack align="center">
                        <Title order={4} color="yellow">Ubicación</Title>
                        <Button variant="subtle" color="teal" leftIcon={<MdLocationOn/>}>Km 3 Vía Samborondón</Button>
                    </Stack>
                    <Divider className="info-divider" orientation="vertical" />
                    <Stack>
                        <Title order={4} color="yellow" align="center">Contáctenos</Title>
                        <Group className="">
                            <Text>Telefonos:</Text>
                            <Text>O92834630</Text>
                        </Group>
                        <Group className="">
                            <Text>Correo:</Text>
                            <Text color="blue">floresyjardines@gmail.com</Text>
                        </Group>
                        
                    </Stack>
                </Grid>
            </Card>
            <Table className="table" highlightOnHover withBorder withColumnBorders>
                <thead>
                    <tr>
                        <th>Especie</th>
                        <th>Disponibilidad</th>
                        <th>Alturas disponibles (m)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Handroanthus chrysanthus</td>
                        <td><BsCheckLg color="teal"/> Disponible</td>
                        <td>1.5 - 2.0</td>
                    </tr>
                    <tr>
                        <td>Sapindus saponaria</td>
                        <td><BsCheckLg color="teal"/> Disponible</td>
                        <td>2.5</td>
                    </tr>
                    <tr>
                        <td>Tabebuia rosea</td>
                        <td><BsCheckLg color="teal"/> Disponible</td>
                        <td>2.5</td>
                    </tr>
                    <tr>
                        <td>Caliandra angustifolia</td>
                        <td><CgUnavailable color="teal"/> Agotado</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </Table>
        </Stack> 
    )
}

export default Vivero
/*
{
    id: 2,
    nombre: "Flores & Jardines",
    propietario: "Sr. Camilo Bottero",
    direccion: "Km 3 Vía Samborondón",
    telefonos: "O92834630",
    img: '/images/viveros/vivero2.jpg'
},
*/