import {
	Stack,
	Grid,
	Text,
	BackgroundImage
} from '@mantine/core';

const HomeActions = () => {
	return (
		<>
			<Grid className='actions'>
				<Grid.Col className='action' span={3}>
					<BackgroundImage component='a' href='/especies'  className="image" src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Guaiacum_officinale_-_Köhler–s_Medizinal-Pflanzen-069.jpg">
						<Text className='action_text'>Especies Nativas</Text>
					</BackgroundImage>
				</Grid.Col>
				<Grid.Col className='action' span={3}>
				<BackgroundImage component='a' href='/especies'  className="image" src="">
						<Text className='action_text'>Selector para Sembrío</Text>
					</BackgroundImage>
				</Grid.Col>
				<Grid.Col className='action' span={3}>
				<BackgroundImage component='a' href='/viveros'  className="image" src="">
						<Text className='action_text'>Viveros</Text>
					</BackgroundImage>
				</Grid.Col>
				<Grid.Col className='action' span={3}>
				<BackgroundImage component='a' href='/guias'  className="image" src="">
						<Text className='action_text'>Guías y Consejos</Text>
					</BackgroundImage>
				</Grid.Col>
			</Grid>
		</>
	);
};

export default HomeActions;
