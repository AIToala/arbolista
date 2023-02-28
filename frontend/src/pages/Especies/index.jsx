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
	Checkbox,
} from '@mantine/core';
import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { useMediaQuery } from '@mantine/hooks';
import { openConfirmModal, closeAllModals } from '@mantine/modals';
import { showNotification } from '@mantine/notifications';

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
				<Button key={letter} className='btnAZ' color='teal' uppercase>{letter}</Button>
			);
		}
		return buttonsAZ;
	};
	const filterByLetter = (letter) => {
		console.log(letter);
	};
	const openSpeciesSelector = () => {
		openConfirmModal({
			
			closeOnConfirm: false,
			labels: { confirm: 'Siguiente', cancel: 'Buscar' },
			children: (
				<Stack className='modal-content'>
					<Title className="modal-title">¿"Desconoces la especie?</Title>
					<Text className='modal-text'>Responde las siguientes preguntas</Text>
					<Stack className='question-box'>
						<Text className='question'>¿Cuál es el color de la flor?</Text>
						<Checkbox.Group className='options' orientation='vertical'>
							<Checkbox className="option" value='rojas' label="Rojas"></Checkbox>
							<Checkbox className="option" value='amarillas' label="Amarillas"></Checkbox>
							<Checkbox className="option" value='blancas' label="Blancas"></Checkbox>
							<Checkbox className="option" value='otro' label="Otro"></Checkbox>
						</Checkbox.Group>
					</Stack>
				</Stack>
			),
			onConfirm: (secondSelectorModal),
			onCancel: () => { 
				
				notificationSearch();
			},
		});
	}
	const secondSelectorModal = () => {
		openConfirmModal({
			closeOnConfirm: false,
			labels: { confirm: 'Siguiente', cancel: 'Buscar' },
			children: (
				<Stack className='modal-content '>
					<Title className="modal-title">¿"Desconoces la especie?</Title>
					<Text className='modal-text'>Responde las siguientes preguntas</Text>
					<Stack className='question-box'>
						<Text className='question'>¿De qué forma son sus hojas?</Text>
						<Checkbox.Group className='options' orientation='vertical'>
							<Checkbox className="option" value='simple' label="Simple"></Checkbox>
							<Checkbox className="option" value='trifoliada' label="Trifoliada"></Checkbox>
							<Checkbox className="option" value='paripinnada' label="Paripinnada"></Checkbox>
							<Checkbox className="option" value='imparipinnada' label="Imparipinnada"></Checkbox>
							<Checkbox className="option" value="palmada" label="Palmada"></Checkbox>
							<Checkbox className="option" value='otro' label="Otra"></Checkbox>
						</Checkbox.Group>
					</Stack>
				</Stack>
			),
			onConfirm: (thirdSelectorModal),
			onCancel: () => { 
				
				notificationSearch();
			},
		});
	}
	const thirdSelectorModal = () => {
		openConfirmModal({
			
			closeOnConfirm: false,
			labels: { confirm: 'Siguiente', cancel: 'Buscar' },
			children: (
				<Stack className='modal-content '>
					<Title className="modal-title">¿"Desconoces la especie?</Title>
					<Text className='modal-text'>Responde las siguientes preguntas</Text>
					<Stack className='question-box'>
						<Text className='question'>¿Como era la corteza del tronco?</Text>
						<Checkbox.Group className='options' orientation='vertical'>
							<Checkbox className="option" value='lisa' label="Lisa"></Checkbox>
							<Checkbox className="option" value='espinas' label="Con Espinas"></Checkbox>
							<Checkbox className="option" value='anillos' label="Con Anillos"></Checkbox>
							<Checkbox className="option" value='estrias' label="Con Estrías / Lineas de Color"></Checkbox>
							<Checkbox className="option" value="fisurada" label="Fisurada / Zurcos"></Checkbox>
							<Checkbox className="option" value='otro' label="Otro"></Checkbox>
						</Checkbox.Group>
					</Stack>
				</Stack>
			),
			onConfirm: (fourthSelectorModal),
			onCancel: () => { 
				
				notificationSearch();
			},
		});
	}
	const fourthSelectorModal = () => {
		openConfirmModal({
			
			closeOnConfirm: false,
			labels: { confirm: 'Siguiente', cancel: 'Buscar' },
			children: (
				<Stack className='modal-content '>
					<Title className="modal-title">¿"Desconoces la especie?</Title>
					<Text className='modal-text'>Responde las siguientes preguntas</Text>
					<Stack className='question-box'>
						<Text className='question'>¿Qué tipo de fruto poseía?</Text>
						<Checkbox.Group className='options' orientation='vertical'>
							<Checkbox className="option" value='samara' label="Samara / Alado"></Checkbox>
							<Checkbox className="option" value='baya' label="Baya"></Checkbox>
							<Checkbox className="option" value='capsula' label="Capsula"></Checkbox>
							<Checkbox className="option" value='vaina' label="Vaina / Legumbre"></Checkbox>
							<Checkbox className="option" value='nose' label="No lo se"></Checkbox>
						</Checkbox.Group>
					</Stack>
				</Stack>
			),
			onConfirm: () => {
				
				notificationSearch();
			},
			onCancel: () => { 
				notificationSearch();
			},
		});
	}
	const notificationSearch = () => {
		closeAllModals();
		showNotification({
			title: 'Especie Encontrada',
			message: 'Mostrando especie encontrada',
			color: 'teal',
			icon: <BiSearchAlt2 />,
		});
	};
	const plants = [
		{
			id: 1,
			scientificName: 'Pelargonium Peltatum',
			commonName: 'Gitanilla',
			family: 'Geraniaceae',
		},
		{
			id: 2,
			scientificName: 'Passiflora Andina',
			commonName: 'Flor de Pasión',
			family: 'Passifloraceae',
			
		},
		{
			id: 3,
			scientificName: 'Lepanthes Caprimulgus',
			commonName: '',
			family: 'Orchidaceae',
			
		},
		{
			id: 4,
			scientificName: 'Psidium Galapageium',
			commonName: 'Guayaba de Galápagos',
			family: 'Myrtaceae',
		},
		{
			id: 5,
			scientificName: 'Licaria Exserta',
			commonName: 'Licaria',
			family: 'Orchidaceae',
			
		},
		{
			id: 6,
			scientificName: 'Encyclia Angustiloba',
			commonName: '',
			family: 'Orchidaceae',

		},
		{
			id: 7,
			scientificName: 'Bomarea Ceratophora',
			commonName: '',
			family: 'Alstroemeriaceae',
		},
		{
			id: 8,
			scientificName: 'Gentianella Jamesonii',
			commonName: '',
			family: 'Gentianaceae',
		},
		{
			id: 9,
			scientificName: 'Odontonema Strictum',
			commonName: 'Espiga de Fuego',
			family: 'Acanthaceae',
		},
		{
			id: 10,
			scientificName: 'Eudema Nubigena',
			commonName: '',
			family: 'Brassicaceae',			
		},
	]
	return (
		<Stack className='main'>
			<Title className='title'>Especies Nativas</Title>
			<Grid className='m-0 filterName' justify='center' align='flex-end' w={'100%'}>
				<Grid.Col span={3}>
					<Select label="Filtro por Nombre" value={filterByType} onChange={setFilterByType} data={['Nombre Común','Nombre Científico','Familia']}></Select>
				</Grid.Col>
				<Grid.Col span={9}>
					<Input label="Filtro" placeholder="Ingrese nombre de especie" rightSection={<Button><BiSearchAlt2></BiSearchAlt2></Button>} ></Input>
				</Grid.Col>
			</Grid>
			<Grid className='m-0' justify='center' align='center' w={"100%"} >
				<Grid.Col align="center">
					<Group spacing="xs" className='btn-group-az align-center'>
						{prepareAZFilter()}
					</Group>
				</Grid.Col>
			</Grid>
			<Group className='btn-group'>
				<Button variant='outline'>Búsqueda Avanzada</Button>
				<Button variant='outline' onClick={openSpeciesSelector}>¿Desconoces la especie?</Button>
			</Group>
			<Stack className='species' w="100%">
				<Group className='btn-group'>
					<Text>{results} resultados encontrados</Text>
					<Button rightIcon={<FaPlus />}>Agregar Especie</Button>
				</Group>
				<Table className='table' highlightOnHover withBorder withColumnBorders verticalSpacing="md">
					<thead>
						<tr>
							<th>Familia</th>
							<th>Nombre Científico</th>
							<th>Nombre Común</th>
						</tr>
					</thead>
					<tbody>
						{plants.map((plant) => (
							<tr key={plant.id}>
								<td>{plant.family}</td>
								<td>{plant.scientificName}</td>
								<td>{plant.commonName}</td>
							</tr>
						))}
					</tbody>
				</Table>
				<Grid justify='center'><Pagination color='teal' page={activePage} onChange={setPage}></Pagination></Grid>	
			</Stack>
		</Stack>
	);
};

export default EspeciesPage;
