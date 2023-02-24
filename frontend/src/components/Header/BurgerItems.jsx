import { Stack, Group, Text, Image } from '@mantine/core';
import { Link } from 'react-router-dom';


const BurgerItems = () => {
	return (
		<Stack className='burgerItems'>
			<Group>
				<Link to="/">
					<Image className="logo" src="/logo-text.png" component={Link} to="/" />
				</Link>
			</Group>
			<hr className='line'></hr>
			<Text component={Link} to="/nosotros" className='link'>Nosotros</Text>
			<Text component={Link} to="/galeria" className='link'>Galería</Text>
			<Text component={Link} to="/especies" className='link'>Especies Nativas</Text>
			<Text component={Link} to="/viveros" className='link'>Viveros</Text>
			<Text component={Link} to="/contacto" className='link'>Contáctenos</Text>
		</Stack>
	);
};

export default BurgerItems;
