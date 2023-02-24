import { Group, Text } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';


const NavbarItems = () => {
	return (
		<Group className='navItems'>
			<Text component={Link} to="/nosotros">Nosotros</Text>
			<Text component={Link} to="/galeria">Galería</Text>
			<Text component={Link} to="/especies">Especies Nativas</Text>
			<Text component={Link} to="/viveros">Viveros</Text>
			<Text component={Link} to="/contacto">Contáctenos</Text>
		</Group>
	);
};

export default NavbarItems;
