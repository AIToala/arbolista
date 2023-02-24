import LogoText from '../LogoText';
import { useState } from 'react';
import NavbarItems from './NavbarItems';
import { Grid, Burger, Drawer, Stack, Button } from '@mantine/core';
import { BiLogIn } from "react-icons/bi";

import { useMediaQuery } from '@mantine/hooks';
import BurgerItems from './BurgerItems';

const Header = () => {
	const isMobile = useMediaQuery('(max-width: 783px)');

	const [isBurgerOpen, setBurgerOpen] = useState(false);

	return (
		<Stack className='header'>
			<Grid className='topbar'>
				<Button leftIcon={<BiLogIn></BiLogIn>} variant='white'>Iniciar Sesión</Button>
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
				onClose={() => {
					setBurgerOpen(false);
				}}
				styles={(theme) => ({
					drawer: {
						backgroundColor: theme.colors.gray[9],
					},
				})}
			>
				<BurgerItems />
			</Drawer>
		</Stack>
	);
};

export default Header;
