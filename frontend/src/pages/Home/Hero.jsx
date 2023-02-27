import {
	Text,
	Stack,
	Center,
	BackgroundImage,
	Title,
	Group,
	Button,
} from '@mantine/core';
import { BiImages } from 'react-icons/bi';
import { RiPlantLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const HomeHero = () => {
	return (
		<BackgroundImage
            className="hero"
            src="/images/main.jpg"
        >
            <Center p="md" className='heroContent'>
                <Stack className='card'>
                    <Title order={5} className='subtitle'>Especies nativas de esta región</Title>
                    <Title className='title'>Conoce la variedad de especies en Guayaquil</Title>
                    <Text className='description'>
                        Observa información clave de cada especie, como su nombre científico, como sembrarlas y como obtenerlas.
                    </Text>
                    <Group sx={()=>{
                        return {
                            justifyContent: 'center',
                        }
                    }} spacing="md">
                        <Link to="galeria">
                            <Button leftIcon={<BiImages size={18} />}>Galería</Button>
                        </Link>
                        <Link to="especies">
                            <Button leftIcon={<RiPlantLine size={18} />}>Especies</Button>
                        </Link>
                    </Group>
                </Stack>
            </Center>
    </BackgroundImage>
	);
};

export default HomeHero;
