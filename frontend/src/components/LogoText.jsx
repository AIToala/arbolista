import { Image, Group, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

const LogoText = () => {
	return (
		<Group className='logo'>
			<Image className="imgLogo" src="/logo-text.png" component={Link} to="/" />
			<Title component={Link} to="/">Catalogo de especies de plantas nativas de Guayaquil</Title>
		</Group>
	);
};

export default LogoText;
