import { Image, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

const LogoText = () => {
	return (
		<Group className='logo'>
			<Image className="imgLogo" src="/logo-w.png" component={Link} to="/" />
		</Group>
	);
};

export default LogoText;
