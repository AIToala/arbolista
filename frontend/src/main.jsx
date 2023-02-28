import './index.css';
import React from 'react';
import { router } from './router/';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<NotificationsProvider>
			<MantineProvider
				theme={{
					fontFamily: 'Open Sans, sans-serif',
					headings: { fontFamily: 'Montserrat, sans-serif' },
					colors: {
						'arb-theme': [
							'#FFFFFF',
							'#252525',
							'#FBEBCE',
							'#E4938F',
							'#EA6D66',
							'#FA4238',
							'#E33A30',
							'#C73831',
							'#A63F39',
							'#8B413D',
							'#76413E',
							'#000000',
						],
					},
				}}
			>
				<ModalsProvider>
					<RouterProvider router={router} />
				</ModalsProvider>
			</MantineProvider>
		</NotificationsProvider>
	</React.StrictMode>
);
