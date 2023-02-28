import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import HomePage from '../pages/Home';
import NosotrosPage from '../pages/Nosotros';
import GaleriaPage from '../pages/Galeria';
import EspeciesPage from '../pages/Especies';
import ViverosPage from '../pages/Viveros';
import ContactoPage from '../pages/Contacto';
import GuiasPage from '../pages/Guias';
import Especie from '../pages/Especies/Especie';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <div>404</div>,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/nosotros',
				element: <NosotrosPage />,
			},
			{
				path: '/galeria',
				element: <GaleriaPage />,
			},
			{
				path: '/especies',
				element: <EspeciesPage />,
			},
			{
				path: '/viveros',
				element: <ViverosPage />,
			},
			{
				path: '/contacto',
				element: <ContactoPage />,
			},
			{
				path: '/guias',
				element: <GuiasPage />,
			},
			{
				path: '/especies/nombre',
				element: <Especie />,
			}
		],
	},
]);
