import {
	Stack,
	Select,
	Grid,
	Input,
	Button,
	Title,
	Group,
	Text,
	Table,
	Pagination,
} from '@mantine/core';
import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { useMediaQuery } from '@mantine/hooks';

const EspeciesPage = () => {
	const isMobile = useMediaQuery('(max-width: 783px)');
	const [filterByType, setFilterByType] = useState('Nombre Común');
	const [results, setResults] = useState(0);
	const [activePage, setPage] = useState(1);
	const prepareAZFilter = () => {
		let buttonsAZ = [];
		for (let i = 65; i <= 90; i++) {
			let letter = String.fromCharCode(i);
			buttonsAZ.push(
				<Button key={letter} color='teal' uppercase>{letter}</Button>
			);
		}
		return buttonsAZ;
	};
	return (
		<Stack className='main'>
			<Title>Especies Nativas</Title>
			<Grid className='m-0' justify='center' align='flex-end' w={'100%'}>
				<Grid.Col span={3} md={3} sm={6} xs={6}>
					<Select label="Filtro por Nombre" value={filterByType} onChange={setFilterByType} data={['Nombre Común','Nombre Científico','Familia']}></Select>
				</Grid.Col>
				<Grid.Col span={9} md={9} sm={12} xs={12}>
					<Input label="Filtro" placeholder="Ingrese nombre de especie que desea buscar" rightSection={<Button><BiSearchAlt2></BiSearchAlt2></Button>} ></Input>
				</Grid.Col>
			</Grid>
			{!isMobile && (
				<Grid className='m-0' justify='center' align='center' w={"100%"} >
					<Grid.Col align="center">
						<Group spacing="xs" className='align-center'>
							{prepareAZFilter()}
						</Group>
					</Grid.Col>
				</Grid>
			)}
			<Group className='btn-group'>
				<Button variant='outline'>Búsqueda Avanzada</Button>
				<Button variant='outline'>¿Desconoces la especie?</Button>
			</Group>
			<Stack className='species' w="100%">
				<Group className='btn-group'>
					<Text>{results} resultados encontrados</Text>
					<Button rightIcon={<FaPlus />}>Agregar Especie</Button>
				</Group>
				<Table className='table' highlightOnHover withBorder striped withColumnBorders verticalSpacing="md">
					<thead>
						<tr>
							<th>Familia</th>
							<th>Nombre Científico</th>
							<th>Nombre Común</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Malvaceae</td>
							<td>Malva parviflora</td>
							<td>Malva</td>
						</tr>
					</tbody>
				</Table>
				<Grid justify='center'><Pagination color='teal' page={activePage} onChange={setPage}></Pagination></Grid>	
			</Stack>
		</Stack>
	);
};

export default EspeciesPage;
