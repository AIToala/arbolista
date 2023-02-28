import {
	Stack,
	Grid,
	Text,
	BackgroundImage
} from '@mantine/core';
import { Link } from 'react-router-dom';

const HomeActions = () => {
	return (
		<>
			<Grid className='actions'>
				<Grid.Col className='action' span={3}>
					<BackgroundImage className="image" src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Guaiacum_officinale_-_Köhler–s_Medizinal-Pflanzen-069.jpg">
						<Text className='action_text' component={Link} to="especies">Especies Nativas</Text>
					</BackgroundImage>
				</Grid.Col>
				<Grid.Col className='action' span={3}>
				<BackgroundImage className="image" src="">
						<Text className='action_text' component={Link} to="especies">Selector para Sembrío</Text>
					</BackgroundImage>
				</Grid.Col>
				<Grid.Col className='action' span={3}>
				<BackgroundImage className="image" src="">
						<Text className='action_text' component={Link} to="viveros">Viveros</Text>
					</BackgroundImage>
				</Grid.Col>
				<Grid.Col className='action' span={3}>
				<BackgroundImage className="image" src="">
						<Text className='action_text' component={Link} to="guias">Guías y Consejos</Text>
					</BackgroundImage>
				</Grid.Col>
			</Grid>
		</>
	);
};

export default HomeActions;
