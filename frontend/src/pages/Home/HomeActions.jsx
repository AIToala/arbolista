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
					<BackgroundImage className="image" src="https://orchidroots.com/static/utils/images/species/spc_000066957_000028564.jpg">
						<Text className='action_text' component={Link} to="especies">Especies Nativas</Text>
					</BackgroundImage>
				</Grid.Col>
				<Grid.Col className='action' span={3}>
				<BackgroundImage className="image" src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Guaiacum_officinale_-_Köhler–s_Medizinal-Pflanzen-069.jpg">
						<Text className='action_text' component={Link} to="especies">Selector para Sembrío</Text>
					</BackgroundImage>
				</Grid.Col>
				<Grid.Col className='action' span={3}>
				<BackgroundImage className="image" src="https://www.jardineriaon.com/wp-content/uploads/2020/08/viveros-de-plantas-caracteristicas.jpg">
						<Text className='action_text' component={Link} to="viveros">Viveros</Text>
					</BackgroundImage>
				</Grid.Col>
				<Grid.Col className='action' span={3}>
				<BackgroundImage className="image" src="https://images.contentstack.io/v3/assets/blt4469db6c4db68edf/blt66ff64c824d9c9bf/6363efa77e3fa67c6290c4d7/How_to_Plant_Almost_Anything.jpg">
						<Text className='action_text' component={Link} to="guias">Guías y Consejos</Text>
					</BackgroundImage>
				</Grid.Col>
			</Grid>
		</>
	);
};

export default HomeActions;
