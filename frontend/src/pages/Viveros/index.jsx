import {
	Stack,
	Title,
	Text,
} from '@mantine/core';
import HorizontalCard from '../../components/HorizontalCard';
import { useState } from 'react';

const ViverosPage = () => {
	const listaViveros = [
		{	
			id: 1,
			nombre: 'Viveros Jarrín',
			propietario: 'Sr. Alfonso Jarrín',
			direccion: 'KM 20 Autopista Duran - Boliche',
			telefonos: '0993040651',
			img: 'https://pbs.twimg.com/profile_images/1849031350/vivero_jarrin_400x400.jpg'

		},
		{
			id: 2,
			nombre: "Flores & Jardines",
			propietario: "Sr. Camilo Bottero",
			direccion: "Km 3 Vía Samborondón",
			telefonos: "O92834630",
			img: '/images/viveros/vivero2-logo.jpeg'
		},
		{
			id: 3,
			nombre: "Vivero D' Lirios ",
			propietario: "Sra. María del Carmén Chumaña",
			direccion: "Km 3 Vía Milagro - Naranjito",
			telefonos: "097094427",
			img: 'images/viveros/vivero3.jpeg'
		},
		{
			id: 4,
			nombre: "Jardinerías Freiga",
			propietario: "Ing. Gabriel Freiga",
			direccion: "Km 21\/2 Vía Milagro - Naranjito",
			telefonos: "O999280110",
			img: 'images/viveros/vivero4.jpeg'
		},
		{
			id: 5,
			nombre: "Vivero Aidita",
			propietario: "Ing. Omar Veliz",
			direccion: "Km 1 Vía Mariscal Sucre y Km 2 Vía Milagro Naranjito",
			telefonos: "O997554929",
			img: 'images/viveros/vivero5.jpg'
		},
		{
			id: 6,
			nombre: "Vivero Donoso",
			propietario: "Ing. José Donoso",
			direccion: "Km 6 1\/2 Vía Milagro - Mariscal Sucre",
			telefonos: "O994622548",
			img: ''
		},
		{
			id: 7,
			nombre: "Vivero Marbella",
			propietario: "Sr. Klever Conza Vargas",
			direccion: "Km 82 1\/2 Vía Guayaquil - Salinas",
			telefonos: "O993962796 - 0991911490",
			img: ''
		},
		{
			id: 8,
			nombre: "Vivero Cerro Blanco",
			propietario: "Fundación Pro Bosque",
			direccion: "Km 16 Vía Guayaquil - Salinas",
			telefonos: "O991565305",
			img: ''
		}
	];


	return (
		<Stack className='main'>
			<Title className='title'>Viveros</Title>
			<Text className='text'>Aquí encontrarás una lista de viveros de la provincia de Guayas. </Text>
			{ listaViveros.map((vivero) => {
				return <HorizontalCard key={vivero.id} cardData={vivero} />
			 }) }

		</Stack>
	);
};

export default ViverosPage;
