import { Box, Button, Card, Group, Text, Grid, Image } from '@mantine/core'
import { Link } from 'react-router-dom'

const HorizontalCard = ({cardData}) => {
    const showData = () => {
        console.log(cardData);
    }
    return (
        <Card w={"70%"} withBorder shadow='sm' radius='md' sx={{
            padding: '0!important', overflow:'hidden!important',
            margin: '0!important'
        }}>
            <Box className='card-content' sx={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    gap: '1rem',
                    radius: 'md', 
                }
            }>
                <Box className='img-box' sx={
                    {
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }
                }>
                    <Image radius="md" height={180} width={180} fit="contain" src={cardData.img} withPlaceholder />
                </Box>
                <Grid className='grid-viveros'>
                    <Group spacing="xs">
                        <Text className='text-label'>Nombre:</Text>
                        <Text className='text'>{cardData.nombre}</Text>
                    </Group>
                    <Group spacing="xs">
                        <Text className='text-label'>Propietario:</Text>
                        <Text className='text'>{cardData.propietario}</Text>
                    </Group>
                    <Group spacing="xs">
                        <Text className='text-label'>Dirección:</Text>
                        <Text className='text'>{cardData.direccion}</Text>
                    </Group>
                    <Group spacing="xs">
                        <Text className='text-label'>Telefono:</Text>
                        <Text className='text'>{cardData.telefonos}</Text>
                    </Group>
                </Grid>
                <Box sx={{
                    padding: '0.5rem',
                }}>
                    <Button component={Link} to="/viveros/vivero" color='teal' onClick={showData}>Más información</Button>
                </Box>
            </Box>
        </Card> 
    )
}

export default HorizontalCard