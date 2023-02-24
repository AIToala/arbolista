import Logo from '../Logo';
import { Grid, Stack, Text } from '@mantine/core';
import FooterNav from './FooterNav';


const Footer = () => {
	
	return (
		<Stack className='footer'>
			<Logo />
			<FooterNav />
			<Text className='thanks'>Con el apoyo de <a href='https://ciifen.org' target='_blank' rel='noopener noreferrer'>CIIFEN</a> y en colaboración del <a href='https://ciifen.org' target='_blank' rel='noopener noreferrer'>Jardín Botánico de Guayaquil</a></Text>
			<Text className='footer__copy'>© 2023, Team Arbolista</Text>
		</Stack>
	);
};

export default Footer;
