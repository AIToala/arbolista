import {
	Stack,
	Grid,
	Text
} from '@mantine/core';

const HomeActions = () => {
	return (
		<>
			<Grid className='actions'>
				<Grid.Col className='action' lg={3} md={3} sm={2} xs={1}>
					<Stack className='action_text'>
						<Text>Selector de Especies</Text>
					</Stack>
				</Grid.Col>
				<Grid.Col className='action' lg={3} md={3} sm={2} xs={1}>
					<Stack className='action_text'>
						<Text>Viveros</Text>
					</Stack>
				</Grid.Col>
				<Grid.Col className='action' lg={3} md={3} sm={2} xs={1}>
					<Stack className='action_text'>
						<Text>Guías y Consejos</Text>
					</Stack>
				</Grid.Col>
			</Grid>
		</>
	);
};

export default HomeActions;
