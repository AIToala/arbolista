import {
	Stack, Title, Text, Grid, Image, BackgroundImage, Center
} from '@mantine/core';
import { useState } from 'react';

const GaleriaPage = () => {
	const [hoveringID, setHoveringID] = useState(null);
	const onHover = (id) => {
		setHoveringID(id);
	};
	const onHoverExited = () => {
		setHoveringID(null);
	};

	const galleryCover = [
		{
			id: 1,
			img: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Pelargonium_peltatum_flower.jpg',
			title: 'Pelargonium Peltatum',
			url: '/',
			alt: 'Pelargonium Peltatum',
		},
		{
			id: 2,
			img: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Passion_flower_2r.jpg',
			title: 'Passiflora Andina',
			url: '/',
			alt: 'Passiflora Andina',
		},
		{
			id: 3,
			img: 'https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/5555/590B/0845/6C6B/8E1D/C0A8/DA44/D9BD/Lepanthes_caprimulgus.jpg',
			title: 'Lepanthes Caprimulgus',
			url: '/',
			alt: 'Lepanthes Caprimulgus',
		},
		{
			id: 4,
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Goya_blancs.JPG/1200px-Goya_blancs.JPG',
			title: 'Psidium Galapageium',
			url: '/',
			alt: 'Psidium Galapageium'
		},
	]
	const galleryExtinct = [
		{
			id: 5,
			img: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Licaria_triandra.jpg',
			title: 'Licaria Exserta',
			url: '/',
			class: 'mid-ext',
			alt: 'Licaria Exserta'
		},
		{
			id: 6,
			img: 'https://orchidroots.com/static/utils/images/species/spc_000066957_000028564.jpg',
			title: 'Encyclia Angustiloba',
			url: '/',
			class: 'high-ext',
			alt: 'Encyclia Angustiloba'
		},
		{
			id: 7,
			img: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Bomarea_Southern_Ecuador.jpg',
			title: 'Bomarea Ceratophora',
			url: '/',
			class: '',
			alt: 'Bomarea Ceratophora'
		},
		{
			id: 8,
			img: 'https://inaturalist-open-data.s3.amazonaws.com/photos/159601420/large.png',
			title: 'Gentianella Jamesonii',
			url: '/',
			class: '',
			alt: 'Gentianella Jamesonii'
		},
		{
			id: 9,
			img: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Starr_021122_0008_odontonema_strictum.jpg',
			title: 'Odontonema Strictum',
			url: '/',
			class: '',
			alt: 'Odontonema Strictum'
		},
		{
			id: 10,
			img: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Eudema_nubigena_65440388.jpg',
			title: 'Eudema Nubigena',
			url: '/',
			class: '',
			alt: 'Eudema Nubigena'
		},
	]


	return (
		<Stack className='gallery'>
			<Title c="white">Galería de Especies Nativas</Title>
			<Text color='#EAEAEA'>Ayúdanos a promover su cuidado y protección</Text>
			<Grid className='m-0 gallery-cover' justify='center' align='center' w="100%" columns={4}>
				{galleryCover.map((item) => (
					<Grid.Col span={3} key={item.id} className='imgSq'>
						<BackgroundImage className='image' src={item.img} alt={item.alt} component='a' href={item.url} onMouseEnter={()=>onHover(item.id)} onMouseLeave={onHoverExited}>
							{hoveringID === item.id && <Center className='textBox'>
								<Title order={4}>{item.title}</Title>
							</Center>
							}
						</BackgroundImage>
					</Grid.Col>	
				))}				
			</Grid>
			<Title c="white">Especies en <span className='red'>Peligro de Extinción</span></Title>
			<Text color='#EAEAEA'>Diferentes especies con niveles de peligro de extinción</Text>
			<Grid className='m-0 gallery-extinct' justify='center' align='center' w="100%">
				{galleryExtinct.map((item) => (
					<Grid.Col className={"extinct-item " + item.class} key={item.id}>
						<BackgroundImage className='image' src={item.img} alt={item.alt} component='a' href={item.url} onMouseEnter={()=>onHover(item.id)} onMouseLeave={onHoverExited}>
							{hoveringID === item.id && <Center className='textBox'>
								<Title order={5}>{item.title}</Title>
							</Center>
							}
						</BackgroundImage>
					</Grid.Col>
				))}
			</Grid>
		</Stack>
	);
};

export default GaleriaPage;
