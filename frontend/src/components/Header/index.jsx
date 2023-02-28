import LogoText from '../LogoText';
import { useState } from 'react';
import NavbarItems from './NavbarItems';
import { Grid, Burger, Drawer, Stack, Button, Group } from '@mantine/core';
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { showNotification } from '@mantine/notifications';
import { useMediaQuery } from '@mantine/hooks';
import BurgerItems from './BurgerItems';
import { TbMoodHappy, TbMoodSad } from 'react-icons/tb';

const Header = ({setModalLogin, isUserLogged, setUserLogged}) => {
	const isMobile = useMediaQuery('(max-width: 783px)');

	const [isBurgerOpen, setBurgerOpen] = useState(false);

	const closeBurger = () => {
		setBurgerOpen(false);
	};
	const userLogout = () => {
		try{
			showNotification({
				title: 'Cierre de sesión exitoso',
				message: 'Hasta pronto',
				color: 'teal',
				icon: <TbMoodHappy />,
				position: 'top-right',
				timeout: 5000,
			});
			setUserLogged(false);
		} catch (error) {
			showNotification({
				title: 'Error al cerrar sesión',
				message: 'Por favor, intente de nuevo',
				color: 'red',
				icon: <TbMoodSad />,
				position: 'top-right',
				timeout: 5000,
			});
		}
	}

	return (
		<Stack className='header'>
			<Grid className='topbar'>
				{!isUserLogged ? (
					<Button onClick={()=>{setModalLogin(true)}} leftIcon={<BiLogIn></BiLogIn>} variant='white'>Iniciar Sesión</Button>					
				) : (
					<Group>
						<Button leftIcon={<CgProfile></CgProfile>} variant='white'>Mi Perfil</Button>
						<Button onClick={userLogout} leftIcon={<BiLogOut></BiLogOut>} variant='white'>Cerrar Sesión</Button>
					</Group>
				)}
			</Grid>
			<Grid className='navH'>
				<LogoText />
				{isMobile && (
					<Burger
						color="#FFFFFF"
						opened={isBurgerOpen}
						onClick={() => {
							setBurgerOpen(true);
						}}
					/>
				)}
				{!isMobile && <NavbarItems />}
			</Grid>
			<Drawer
				size="sm"
				padding="xl"
				position="right"
				opened={isBurgerOpen}
				withCloseButton={false}
				onClose={()=>{setBurgerOpen(false)}}
				styles={(theme) => ({
					drawer: {
						backgroundColor: theme.colors.gray[9],
					},
				})}
			>
				<BurgerItems setBurgerOpen={setBurgerOpen}/>
			</Drawer>
		</Stack>
	);
};

export default Header;
