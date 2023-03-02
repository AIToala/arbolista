import {
	Stack, Title, Text, Grid, Image, BackgroundImage, Center
} from '@mantine/core';
import { Link } from 'react-router-dom';
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
			img: 'https://static.inaturalist.org/photos/179562165/medium.jpg',
			title: 'Cedrela odorata',
			url: '/especies/nombre',
			alt: 'Cedrela odorata',
		},
		{
			id: 2,
			img: 'https://inaturalist-open-data.s3.amazonaws.com/photos/187265529/medium.jpeg',
			title: 'Pseudobombax millei',
			url: '',
			alt: 'Pseudobombax millei',
		},
		{
			id: 3,
			img: 'https://static.inaturalist.org/photos/44332284/medium.jpg',
			title: 'Sapindus saponaria',
			url: '',
			alt: 'Sapindus saponaria',
		},
		{
			id: 4,
			img: 'https://inaturalist-open-data.s3.amazonaws.com/photos/1475986/medium.jpg',
			title: 'Guaiacum officinale',
			url: '',
			alt: ''
		},
	]
	const galleryExtinct = [
		{
			id: 5,
			img: 'https://inaturalist-open-data.s3.amazonaws.com/photos/3007672/large.JPG',
			title: 'Swietenia macrophylla',
			url: '',
			class: 'mid-ext',
			alt: 'Swietenia macrophylla'
		},
		{
			id: 6,
			img: 'https://inaturalist-open-data.s3.amazonaws.com/photos/64767563/large.jpg',
			title: 'Prosopis juliflora',
			url: '',
			class: 'high-ext',
			alt: 'Prosopis juliflora'
		},
		{
			id: 7,
			img: 'https://static.inaturalist.org/photos/13086892/medium.jpeg',
			title: 'Gustavia Angustifolia',
			url: '',
			class: '',
			alt: 'Gustavia Angustifolia'
		},
		{
			id: 8,
			img: 'https://static.inaturalist.org/photos/33572615/medium.jpeg',
			title: 'Handroanthus chrysanthus',
			url: '',
			class: '',
			alt: 'Handroanthus chrysanthus'
		},
		{
			id: 9,
			img: 'https://inaturalist-open-data.s3.amazonaws.com/photos/103375965/medium.jpg',
			title: 'Vitex gigantea',
			url: '',
			class: '',
			alt: 'Vitex gigantea'
		},
		{
			id: 10,
			img: 'https://inaturalist-open-data.s3.amazonaws.com/photos/108066793/medium.jpeg',
			title: 'Cordia alliodora',
			url: '',
			class: '',
			alt: 'Cordia alliodora'
		},
	]


	return (
		<Stack className='gallery'>
			<Title c="white">Galería de Especies Nativas</Title>
			<Text color='#EAEAEA'>Ayúdanos a promover su cuidado y protección</Text>
			<Grid className='m-0 gallery-cover' justify='center' align='center' w="100%" columns={4}>
				{galleryCover.map((item) => (
					<Grid.Col span={3} key={item.id} className='imgSq'>
						<BackgroundImage className='image' src={item.img} alt={item.alt} component={Link} to={item.url} onMouseEnter={()=>onHover(item.id)} onMouseLeave={onHoverExited}>
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
						<BackgroundImage className='image' src={item.img} alt={item.alt} component={Link} to={item.url} onMouseEnter={()=>onHover(item.id)} onMouseLeave={onHoverExited}>
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
