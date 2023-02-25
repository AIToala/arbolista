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
			url: '/'
		},
		{
			id: 2,
			img: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Passion_flower_2r.jpg',
			title: 'Passiflora Andina',
			url: '/'
		},
		{
			id: 3,
			img: 'https://www.ecuagenera.com/WebRoot/Store/Shops/ecuagenera/5555/590B/0845/6C6B/8E1D/C0A8/DA44/D9BD/Lepanthes_caprimulgus.jpg',
			title: 'Lepanthes Caprimulgus',
			url: '/'
		},
		{
			id: 4,
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Goya_blancs.JPG/1200px-Goya_blancs.JPG',
			title: 'Psidium Galapageium',
			url: '/'
		},
	]

	return (
		<Stack className='gallery'>
			<Title c="white">Galería de Especies Nativas</Title>
			<Text color='#EAEAEA'>Ayúdanos a promover su cuidado y protección</Text>
			<Grid className='m-0 gallery-cover' justify='center' align='center' w="100%" columns={4}>
				{galleryCover.map((item) => (
					<Grid.Col span={3} key={item.id} className='imgSq'>
						<BackgroundImage className='image' src={item.img} component='a' href={item.url} onMouseEnter={()=>onHover(item.id)} onMouseLeave={onHoverExited}>
							{hoveringID === item.id && <Center className='textBox'>
								<Title order={4}>{item.title}</Title>
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
