import { Stack, Group, Text, Image } from '@mantine/core';
import { Link } from 'react-router-dom';


const BurgerItems = ({setBurgerOpen}) => {
	const closeBurger = () => {
		setBurgerOpen(false);
	};
	return (
		<Stack className='burgerItems'>
			<Group>
				<Link to="/" onClick={closeBurger}>
					<Image className="logo" src="/logo-text.png" component={Link} to="/" />
				</Link>
			</Group>
			<hr className='line'></hr>
			<Text component={Link} to="/nosotros" onClick={closeBurger} className='link'>Nosotros</Text>
			<Text component={Link} to="/galeria" onClick={closeBurger} className='link'>Galería</Text>
			<Text component={Link} to="/especies" onClick={closeBurger} className='link'>Especies Nativas</Text>
			<Text component={Link} to="/viveros" onClick={closeBurger} className='link'>Viveros</Text>
			<Text component={Link} to="/contacto" onClick={closeBurger} className='link'>Contáctenos</Text>
		</Stack>
	);
};

export default BurgerItems;
