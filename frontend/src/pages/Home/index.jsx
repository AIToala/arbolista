import {
	Stack,
} from '@mantine/core';
import HomeHero from './Hero';
import HomeActions from './HomeActions';

const HomePage = () => {
	return (
		<Stack className='content'>
			<HomeHero></HomeHero>
			<HomeActions></HomeActions>
		</Stack>
	);
};

export default HomePage;
