import { Divider, Group, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import ArboristaModal from '../ArboristaModal';

const NavbarItems = ({setBurgerOpen}) => {
	return (
		<Group className='navItems'>
			<Text className="nav-link" component={Link} to="/nosotros">Nosotros</Text>
			<Text className="nav-link" component={Link} to="/galeria">Galería</Text>
			<Text className="nav-link" component={Link} to="/especies">Especies Nativas</Text>
			<Text className="nav-link" component={Link} to="/viveros">Viveros</Text>
			<Divider orientation='vertical'/>
			<ArboristaModal setBurgerOpen={setBurgerOpen}/>
		</Group>
	);
};

export default NavbarItems;
