import { Stack, Grid, Title, Text, Divider} from '@mantine/core';
import { Link } from 'react-router-dom';


const FooterNav = () => {
	return (
		<Grid className='footer__nav'>
			<Grid.Col sm={1} md={3} lg={3} className='item'>
				<Title order={5} className='title'>Especies</Title>
				<Stack>
					<Text component={Link} to="/galeria" className='link'>Galería</Text>
					<Text component={Link} to="/especies" className='link'>Listado de especies</Text>
					<Text component={Link} to="/especies" className='link'>Selector para sembríos</Text>
					<Text component={Link} to="/" className='link'>Guías y consejos</Text>
				</Stack>
			</Grid.Col>
			<Divider orientation='vertical'/>
			<Grid.Col sm={1} md={3} lg={3} className='item'>
				<Title order={5} className='title'>Viveros</Title>
				<Stack>
					<Text component={Link} to="/viveros" className='link'>Viveros</Text>
				</Stack>
			</Grid.Col>
			<Divider orientation='vertical'/>
			<Grid.Col sm={1} md={3} lg={3} className='item'>
				<Title order={5} className='title'>Nosotros</Title>
				<Stack>
					<Text component={Link} to="/nosotros#mision" className='link'>Misión / Visión</Text>
					<Text component={Link} to="/contacto" className='link'>Contáctenos</Text>
					<Text component={Link} to="/nosotros#unete" className='link'>Únete a la misión</Text>
				</Stack>
			</Grid.Col>
		</Grid>
	);
};

export default FooterNav;
/*

*/