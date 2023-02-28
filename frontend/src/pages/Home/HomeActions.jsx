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
					<Link to="/especies" className='linked'>
						<BackgroundImage component='a' className="image" src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Guaiacum_officinale_-_Köhler–s_Medizinal-Pflanzen-069.jpg">
							<Text className='action_text'>Especies Nativas</Text>
						</BackgroundImage>
					</Link>
				</Grid.Col>
				
				<Grid.Col className='action' span={3}>
					<Link to="/especies" className='linked'>
						<BackgroundImage component='a' className="image" src="">
							<Text className='action_text'>Selector para Sembrío</Text>
						</BackgroundImage>
					</Link>
				</Grid.Col>
				<Grid.Col className='action' span={3}>
					<Link to="/viveros" className='linked'>
						<BackgroundImage component='a' className="image" src="">
							<Text className='action_text'>Viveros</Text>
						</BackgroundImage>
					</Link>
				</Grid.Col>
				<Grid.Col className='action' span={3}>
					<Link to="/guias" className='linked'>
						<BackgroundImage component='a' className="image" src="">
							<Text className='action_text'>Guías y Consejos</Text>
						</BackgroundImage>
					</Link>
				</Grid.Col>
			</Grid>
		</>
	);
};

export default HomeActions;
