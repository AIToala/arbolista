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
	Chip,
	Image,
	createStyles,
	Divider,
} from '@mantine/core';
import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { useMediaQuery } from '@mantine/hooks';
import { openModal, openConfirmModal, closeAllModals } from '@mantine/modals';
import { showNotification } from '@mantine/notifications';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme, _params, getRef)=>({
	label: {
		'&[data-checked]': {
		  '&, &:hover': {
			backgroundColor: theme.colors.blue[7],
			color: theme.white,
		  },
	
		  [`& .${getRef('iconWrapper')}`]: {
			color: theme.white,
		  },
		},
		width: '100%',
	},
	
	iconWrapper: {
		ref: getRef('iconWrapper'),
	},
	root: {
		width: '100%!important',
	},
}));

const EspeciesPage = () => {
	const isMobile = useMediaQuery('(max-width: 783px)');
	const [filterByType, setFilterByType] = useState('Nombre Común');
	const [results, setResults] = useState(0);
	const [activePage, setPage] = useState(1);
	const { classes } = useStyles();
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
	const advanceFilterModal = () => {
		openModal({
			size: '80%',
			centered: true,
			children: (
				<Stack className='modal-content'>
					<Title className="modal-title">Filtro Avanzado</Title>
					<Text className='modal-text'>Selecciona los filtros que deseas aplicar</Text>
					<Divider sx={{width: '100%'}}/>
					<Stack w={"100%"}>
						<Title order={4}>Caracteristicas Generales</Title>
						<Grid className='modal-grid'>
							<Select label="Habito de crecimiento" placeholder='Escoja una opción' data={[
								'Herbácea',
								'Arbustiva',
								'Arbórea',
								'Cactus',
								'Trepadora',
								'Otros',
							]}></Select>
							<Select label="Estado de conservación" placeholder='Escoja una opción' data={[
								'Extinta',
								'Extinta en estado salvaje',
								'En peligro critico',
								'En peligro',
								'Vulnerable',
								'Casi amenazada',
								'Preocupación menor',
								'Datos insuficientes',
								'No evaluada',
							]}></Select>
							<Select label="Altura máxima" placeholder='Escoja una opción' data={['menor a 6 m', 'entre 6 m y 16 m', 'mayor a 16 m']}></Select>
							<Select label="Limitaciones flores" placeholder='Escoja una opción' data={[
								'Alergenicas',
								'Olor desagradable',
								'Toxicas',
								'Carnosas',
								'Masivas',
								'Grandes',
								'Ninguna',
								'No determinado',
							]}></Select>
							<Select label="Limitaciones frutos" placeholder='Escoja una opción' data={[
								'Alergenicas',
								'Con espinas',
								'Toxicos',
								'Carnosos',
								'Masivos',
								'Pesados',
								'Ninguna',
								'No determinado',
							]}></Select>
							<Select label="Uso en espacio publico" placeholder='Escoja una opción' data={[
								'Cerros',
								'Parques',
								'Jardines',
								'Plazas',
								'Redondeles',
								'Edificios publicos',
								'No determinado',
								'Vias peatonales',
								'Otros',
							]}></Select>
							<Select label="Longevidad" placeholder='Escoja una opción' data={[
								'Perenne',
								'Anual',
								'Alta',
								'Media',
								'Baja',
								'No determinado',
							]}></Select>
							<Select label="Atracción fauna" placeholder='Escoja una opción' data={[
								'Baja',
								'Media',
								'Alta',
								'No determinado',
							]}></Select>
							<Select label="Requerimiento de luminosidad" placeholder='Escoja una opción' data={[
								'Sombra',
								'Sombra parcial',
								'Luz solar',
								'Luz solar directa',
								'No determinado',
							]}></Select>
							<Select label="Amplitud de copa" placeholder='Escoja una opción' data={[
								'Nula',
								'Pequeña',
								'Media',
								'Grande',
								'No determinado',
							]}></Select>
							<Select label="Forma de copa" placeholder='Escoja una opción' data={[
								'Aparasolada',
								'Columnar',
								'Estratificada',
								'Globosa',
								'Irregular',
								'Oval',
								'Pendula',
								'Piramidal',
								'Semiglobosa',
								'Otra',
								'No determinado',
							]}></Select>
							<Select label="Densidad del follaje" placeholder='Escoja una opción' data={[
								'Baja',
								'Media',
								'Alta',
								'No determinado',
							]}></Select>
							<Select label="Zona humedad" placeholder='Escoja una opción' data={[
								'Seca',
								'Humeda',
								'Muy humeda',
								'No determinado',
							]}></Select>
						</Grid>
						<Divider sx={{width: '100%'}}/>
						<Title order={4}>Tallo</Title>
						<Grid className='modal-grid'>
							<Select label="Atributos de corteza" placeholder='Escoja una opción' data={[
								'lisa', 
								'espinas', 
								'anillos',
								'estrias', 
								"fisurada",
								'otro',
								'no determinado', 
							]}></Select>
							<Select label="Color de corteza" placeholder='Escoja una opción' data={[
								'Blanco',
								'Verdoso',
								'Gris',
								'Otro',
								'No determinado'
							]}></Select>							
						</Grid>
						<Divider sx={{width: '100%'}}/>
						<Title order={4}>Raiz</Title>
						<Grid className='modal-grid'>
							<Select label="Forma de reproducción" placeholder='Escoja una opción' data={[
								'Semillas',
								'Por estaca',
								'Por bulbo',
								'Por tuberculo',
								'Por rizoma',
								'Division de pie',
								'Por estolon',
								'Por acodo',
								'Otro',
								'No determinado', 
							]}></Select>
							<Select label="Color de corteza" placeholder='Escoja una opción' data={[
								'Blanco',
								'Verdoso',
								'Gris',
								'Otro',
								'No determinado'
							]}></Select>
							<Select label="Forma de raiz" placeholder='Escoja una opción' data={[
								'Radicular',
								'Fibrosa',
								'Glandular',
								'No determinado',
							]}></Select>
							<Select label="Tipo de enraizamiento" placeholder='Escoja una opción' data={[
								'Profundo',
								'Medio',
								'Superficial',
								'No determinado',
							]}></Select>
						</Grid>
						<Divider sx={{width: '100%'}}/>
						<Title order={4}>Flor</Title>
						<Grid className='modal-grid'>
							<Select label="Color de la flor" placeholder='Escoja una opción' data={[
								'Blanco',
								'Amarillo',
								'Rojo',
								'Otro',
							]}></Select>
							<Select label="Disposicion de la flor" placeholder='Escoja una opción' data={[
								'Solitaria',
								'Espiga',
								'Racimo',
								'Panicula',
								'Corimbo',
								'Amento',
								'Otro',
								'No determinado',
							]}></Select>
							<Select label="Sistema de polinizacion" placeholder='Escoja una opción' data={[
								'Viento',
								'Agua',
								'Insectos',
								'Aves',
								'Mamiferos',
								'Aves nectarivoras',
								'Otros animales',
								'No determinado',
							]}></Select>
							<Select label="Estacion de floracion" placeholder='Escoja una opción' data={[
								'Permanente',
								'Estacional',
								'Estacion seca',
								'Estacion lluviosa',
								'No determinado',
								'No aplica',
							]}></Select>
							<Select label="Meses de floracion" placeholder='Escoja una opción' data={[
								'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'
							]}></Select>
						</Grid>
						<Divider sx={{width: '100%'}}/>
						<Title order={4}>Hoja</Title>
						<Grid className='modal-grid'>
							<Select label="Forma de hoja" placeholder='Escoja una opción' data={[
								'Lineal',
								'Lineal-lanceolada',
								'Lanceolada',
								'Ovada',
								'Elliptica',
								'Elipsoide',
								'Oblonga',
								'Otro',
								'No determinado',
							]}></Select>
							<Select label="Persistencia de hoja" placeholder='Escoja una opción' data={[
								'Perenne',
								'Caducifolia',
								'Semicaducifolia',
								'No determinado',
								'No aplica',
							]}></Select>
							<Select label="Posicion de hoja en tallo" placeholder='Escoja una opción' data={[
								'Alterna',
								'Opuesta',
								'Fasciculada',
								'Roseta',
								'Verticilada',
								'No determinado',
							]}></Select>
							<Select label="Composicion de hoja" placeholder='Escoja una opción' data={[
								'Simple',
								'Digitado Compuesta',
								'Compuesta paripinnada',
								'Compuesta imparipinnada',
								'Compuesta bifoliada',
								'Compuesta trifoliada',
								'No determinado',
							]}></Select>	
						</Grid>
						<Divider sx={{width: '100%'}}/>
						<Title order={4}>Fruto / Semilla</Title>
						<Grid className='modal-grid'>
							<Select label="Forma de fruto" placeholder='Escoja una opción' data={[
								'Capsula',
								'Legumbre',
								'Foliculo',
								'Samara',
								'Baya',
								'Otro',
								'No aplica',
								'No determinado',
							]}></Select>
							<Select label="Color de fruto" placeholder='Escoja una opción' data={[
								'Blanco',
								'Rojo',
								'Verde',
								'Otro',
								'No determinado',
								'No aplica',
							]}></Select>
							<Select label="Sistema de dispersión de frutos" placeholder='Escoja una opción' data={[
								'Viento',
								'Agua',
								'Gravedad',
								'Insectos',
								'Aves',
								'Mamiferos',
								'Aves nectarivoras',
								'Otros animales',
								'No determinado',
								'No aplica',
							]}></Select>
							<Select label="Meses de fructificacion" placeholder='Escoja una opción' data={[
								'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'
							]}></Select>
						</Grid>
						<Divider sx={{width: '100%'}}/>
						<Title order={4}>Ecologia / Etnobotanica</Title>
						<Grid className='modal-grid'>
							<Select label="Rango altitudinal" placeholder='Escoja una opción' data={[
								'0 - 1000 msnm',
								'1000 - 2000 msnm',
								'2000 - 3000 msnm',
								'> 3000 msnm',
								'No determinado',
							]}></Select>
							<Select label="Categoria de uso" placeholder='Escoja una opción' data={[
								'Alimenticia',
								'Artesanal',
								'Medicinal',
								'Ornamental',
								'Otros',
								'No determinado',
							]}></Select>
						</Grid>
					</Stack>
					
					
					<Group className='btn-group centered'>
						<Button color='dark'>Limpiar</Button>
						<Button onClick={notificationSearch}>Filtrar</Button>
					</Group>
				</Stack>
			),
			
		})
	}
	const openSpeciesSelector = () => {
		openConfirmModal({
			title: '1/4 - Selector de especies',
			closeOnConfirm: false,
			labels: { confirm: 'Siguiente', cancel: 'Buscar' },
			children: (
				<Stack className='modal-content'>
					<Title className="modal-title">¿Desconoces la especie?</Title>
					<Text className='modal-text'>Responde las siguientes preguntas</Text>
					<Stack className='question-box'>
						<Text className='question'>¿Cuál es el color de la flor?</Text>
						<Image radius="md" src="/images/colorFlor.jpg" className='img' fit='contain'></Image>
						<Chip.Group className='chips' required>
							<Chip classNames={classes} radius='md' value='rojas' >Rojas</Chip>
							<Chip classNames={classes} radius='md' value='amarillas' >Amarillas</Chip>
							<Chip classNames={classes} radius='md' value='blancas' >Blancas</Chip>
							<Chip classNames={classes} radius='md' value='otro' >Otro</Chip>
						</Chip.Group>
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
			title: '2/4 - Selector de especies',
			closeOnConfirm: false,
			labels: { confirm: 'Siguiente', cancel: 'Buscar' },
			children: (
				<Stack className='modal-content '>
					<Stack className='question-box'>
						<Text className='question'>¿De qué forma son sus hojas?</Text>
						<Image src="/images/tipoHojas.png" className='img' fit='contain' height={300}></Image>
						<Chip.Group className='chips' required>
							<Chip classNames={classes} radius="md" value='simple' >Simple</Chip>
							<Chip classNames={classes} radius="md" value='bifoliada' >Bifoliada</Chip>
							<Chip classNames={classes} radius="md" value='trifoliada' >Trifoliada</Chip>
							<Chip classNames={classes} radius="md" value='palmada' >Palmada</Chip>
							<Chip classNames={classes} radius="md" value='paripinnada' >Paripinnada</Chip>
							<Chip classNames={classes} radius="md" value='imparipinnada' >Imparipinnada</Chip>
							<Chip classNames={classes} radius="md" value='otro' >Otra</Chip>
						</Chip.Group>
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
			title: '3/4 - Selector de especies',
			closeOnConfirm: false,
			labels: { confirm: 'Siguiente', cancel: 'Buscar' },
			children: (
				<Stack className='modal-content '>
					<Stack className='question-box'>
						<Text className='question'>¿Como era la corteza del tronco?</Text>
						<Image src="/images/tipoCorteza.png" className='img' fit='contain'></Image>
						<Chip.Group className='chips' required>
							<Chip classNames={classes} radius='md' value='lisa' >Lisa</Chip>
							<Chip classNames={classes} radius='md' value='espinas' >Con Espinas</Chip>
							<Chip classNames={classes} radius='md' value='anillos' >Con Anillos</Chip>
							<Chip classNames={classes} radius='md' value='estrias' >Con Estrías / Lineas de Color</Chip>
							<Chip classNames={classes} radius='md' value="fisurada" >Fisurada / Zurcos</Chip>
							<Chip classNames={classes} radius='md' value='otro' >Otro</Chip>
							<Chip classNames={classes} radius='md' value='desconozco' >Desconozco</Chip>
						</Chip.Group>
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
			title: '4/4 - Selector de especies',
			closeOnConfirm: false,
			labels: { confirm: 'Siguiente', cancel: 'Buscar' },
			children: (
				<Stack className='modal-content '>
					<Stack className='question-box'>
						<Text className='question'>¿Qué tipo de fruto poseía?</Text>
						<Image src="/images/tipoFruta.png" className='img' fit='contain'></Image>
						<Chip.Group className='chips' required>
							<Chip classNames={classes} radius='md' value='samara'>Samara / Alado</Chip>
							<Chip classNames={classes} radius='md' value='baya' >Baya</Chip>
							<Chip classNames={classes} radius='md' value='capsula' >Capsula</Chip>
							<Chip classNames={classes} radius='md' value='vaina' >Vaina / Legumbre</Chip>
							<Chip classNames={classes} radius='md' value='desconozco' >Desconozco</Chip>
						</Chip.Group>
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
			scientificName: 'Cedrela odorata',
			commonName: 'Cedro',
			family: 'Meliaceae',
		},
		{
			id: 2,
			scientificName: 'Swietenia Macrophylla',
			commonName: 'Caoba',
			family: 'Meliaceae',
			
		},
		{
			id: 3,
			scientificName: 'Prosopis juliflora',
			commonName: 'Algarrobos',
			family: 'Fabaceae',
			
		},
		{
			id: 4,
			scientificName: 'Gustavia angustifolia',
			commonName: 'Membrillo',
			family: 'Lecythidaceae',
		},
		{
			id: 5,
			scientificName: 'Handroanthus chrysanthus',
			commonName: 'Guayacán',
			family: 'Bignoniaceae',
			
		},
		{
			id: 6,
			scientificName: 'Vitex gigantea',
			commonName: 'Pechiche',
			family: 'Lamiaceae',

		},
		{
			id: 7,
			scientificName: 'Cordia alliodora',
			commonName: 'Laurel',
			family: 'Boraginaceae',
		},
		{
			id: 8,
			scientificName: 'Sapindus saponaria',
			commonName: 'Jaboncillo',
			family: 'Sapindaceae',
		},
		{
			id: 9,
			scientificName: 'Pseudobombax millei',
			commonName: 'Beldaco',
			family: 'Malvaceae',
		},
		{
			id: 10,
			scientificName: 'Guaiacum officinale',
			commonName: 'Guayacán Negro',	
			family: 'Bignoniaceae',			
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
				<Button variant='outline' onClick={advanceFilterModal}>Búsqueda Avanzada</Button>
				<Button variant='outline' onClick={openSpeciesSelector}>¿Desconoces la especie?</Button>
			</Group>
			<Stack className='species' w="100%">
				<Group className='btn-group'>
					<Text>{results} resultados encontrados</Text>
					<Button sx={{display:'none'}} rightIcon={<FaPlus />}>Agregar Especie</Button>
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
								<td><Text component={Link} to="/especies/nombre">{plant.family}</Text></td>
								<td><Text component={Link} to="/especies/nombre">{plant.scientificName}</Text></td>
								<td><Text component={Link} to="/especies/nombre">{plant.commonName}</Text></td>
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
