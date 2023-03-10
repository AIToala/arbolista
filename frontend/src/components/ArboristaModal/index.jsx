import {
	Stack,
    Title,
    Text,
    Group,
    Button,
    Checkbox,
    ActionIcon,
    Select,
    Flex,
    Grid,
    Textarea,
    TextInput,
    NumberInput,
    Image,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { BiCheck, BiError } from 'react-icons/bi';
import { useState } from 'react';
import { openModal, closeAllModals, openConfirmModal, closeModal } from '@mantine/modals';
import { showNotification } from '@mantine/notifications';
import { GiPineTree } from 'react-icons/gi';
import { Navigate, useNavigate } from 'react-router-dom';

const ArboristaModal = ({setBurgerOpen}) => {

    const openArborista = () => {
        openModal({
            classNames: { title: 'modal-title', body: 'modal-body', actions: 'modal-actions'},
            size: '80%',
            centered: true,
			children: (
				<Stack className='modal-arbo'>
                    <Group className='btn-group centered'>
                        <GiPineTree className='icon-arbo' />
                        <Title className="modal-title">Arborista</Title>
                    </Group>
					<Text className='modal-text'>Herramienta de sugerencia de especie a sembrar en entorno deseado</Text>
                    <Group className='btn-group centered'>
						<Button color='teal' fullWidth onClick={firstQuestion}>Continuar</Button>
					</Group>
                </Stack>
			),
            onClose: () => {
                if(setBurgerOpen){setBurgerOpen(false)}
                closeModal();
            },
		});
    }
    const firstQuestion = () => {
        openConfirmModal({
            classNames: { title: 'modal-title', body: 'modal-body', actions: 'modal-actions'},
            title: 'Arborista - Pregunta 1',
            size: '75%',
            centered: true,
            closeOnConfirm: false,
            labels: { confirm: 'Continuar', cancel: 'Cancelar' },
            overflow: 'inside',
            children: (
                <Stack className='modal-arbo'>
                    <Title order={2} className="modal-title">??Qu?? desea de la especie a sembrar?</Title>
                    <Checkbox.Group className='modal-options'>
                        <Checkbox value="sombra" label="Otorgue sombra"></Checkbox>
                        <Checkbox value="fauna" label="Habitat para la fauna"></Checkbox>
                        <Checkbox value="alimento" label="Alimento para la fauna"></Checkbox>
                        <Checkbox value="ornamental" label="Ornamental"></Checkbox>
                        <Checkbox value="no ruido" label="Protecci??n contra el ruido"></Checkbox>
                        <Checkbox value="no contaminacion" label="Protecci??n contra contaminaci??n"></Checkbox>
                        <Checkbox value="seto" label="Deseo un seto"></Checkbox>
                        <Checkbox value="extincion" label="Proteger especie amenazada"></Checkbox>
                        <Checkbox value="restauracion" label="Restauraci??n Ecol??gica"></Checkbox>
                        <Checkbox value="recuperacion suelo" label="Mejore el suelo"></Checkbox>
                        <Checkbox value="alimento humano" label="Frutos comestibles"></Checkbox>
                        <Checkbox value="cerca" label="Quiero un cerco vivo"></Checkbox>
                        <Checkbox value="forrajero" label="Alimento para ganado"></Checkbox>
                        <Checkbox value="no viento" label="Protecci??n contra vientos fuertes"></Checkbox>
                        <Checkbox value="polinizador" label="Otorgue ayuda a polinizadores"></Checkbox>
                        <Checkbox value="material" label="Otorga materiales"></Checkbox>
                        <Checkbox value="medicinal" label="Medicinal"></Checkbox>
                    </Checkbox.Group>
                </Stack>
            ),
            onConfirm: () => {
                secondQuestion();
            },
            onCancel: () => {
                closeAllModals();
            },
        });
    }    
    const secondQuestion = () => {
        openConfirmModal({
            classNames: { title: 'modal-title', body: 'modal-body', actions: 'modal-actions'},
            title: 'Arborista - Pregunta 2',
            size: '75%',
            centered: true,
            closeOnConfirm: false,
            labels: { confirm: 'Continuar', cancel: 'Cancelar' },
            overflow: 'inside',
            children: (
                <Stack className='modal-arbo'>
                    <Title order={2} className="modal-title">Acerca del lugar de siembra</Title>
                    <Grid className='modal-grid'>
                        <Select label='??Existen cables u otros objetos urbanos?'  placeholder="Escoja una opci??n" data={['Si', 'No']}></Select>
                        <Select label='Disponibilidad de agua' placeholder="Escoja una opci??n" data={['Desconozco', 'Baja', 'Media', 'Alta']}></Select>
                        <Select label='Presencia de luz' placeholder="Escoja una opci??n" data={['Desconozco', 'Baja', 'Media', 'Alta']}></Select>
                        <Select label='Disponibilidad de suelo' placeholder="Escoja una opci??n" data={['Desconozco', 'Baja', 'Media', 'Alta']}></Select>
                        <Select label='Presencia de animales' placeholder="Escoja una opci??n" data={['Desconozco', 'Baja', 'Media', 'Alta']}></Select>
                    </Grid>
                    
                </Stack>
            ),
            onConfirm: () => {
                thirdQuestion();
            },
            onCancel: () => {
                closeAllModals();
            },
        });
    }
    const thirdQuestion = () => {
        openConfirmModal({
            classNames: { title: 'modal-title', body: 'modal-body', actions: 'modal-actions'},
            title: 'Arborista - Pregunta 3',
            size: '75%',
            centered: true,
            closeOnConfirm: false,
            labels: { confirm: 'Continuar', cancel: 'Cancelar' },
            children: (
                <Stack className='modal-arbo'>
                    <Title order={2} className="modal-title">Espacio para Sembrado</Title>
                    <Image className='img' fit='contain' height={300} src="/images/lugarSembrado.png"></Image>
                    <Grid className='modal-grid'>
                        <NumberInput label="Ancho del ??rea de sembrado (m)"
                            description="Representado por letra A"
                            defaultValue={0}
                            decimalSeparator=','
                            precision={2}
                            min={0}
                            step={0.05}
                        />
                        <NumberInput label="Largo del ??rea de sembrado (m)"
                            description="Representado por letra B"
                            defaultValue={0}
                            decimalSeparator=','
                            precision={2}
                            min={0}
                            step={0.05}
                        />
                        <NumberInput label="Distancia a tendido el??ctrico (m)"
                            description="Representado por letra C"
                            defaultValue={0}
                            decimalSeparator=','
                            precision={2}
                            min={0}
                            step={0.05}
                        />
                        <NumberInput label="Altura del tendido el??ctrico (m)"
                            description="Representado por letra D"
                            defaultValue={0}
                            decimalSeparator=','
                            precision={2}
                            min={0}
                            step={0.05}
                        />
                        <NumberInput label="Distancia hacia otras estructuras (m)"
                            description="Representado por letra E"
                            defaultValue={0}
                            decimalSeparator=','
                            precision={2}
                            min={0}
                            step={0.05}
                        />
                    </Grid>
                </Stack>
            ),
            onConfirm: () => {
                fourthQuestion();
            },
            onCancel: () => {
                closeAllModals();
            },
        });
    }
    const fourthQuestion = () => {
        openConfirmModal({
            classNames: { title: 'modal-title', body: 'modal-body', actions: 'modal-actions'},
            title: 'Arborista - Pregunta 4',
            size: '75%',
            centered: true,
            closeOnConfirm: false,
            labels: { confirm: 'Continuar', cancel: 'Cancelar' },
            children: (
                <Stack className='modal-arbo'>
                    <Title order={2} className="modal-title">Datos de la Especie</Title>
                    <Image radius="md" caption="Tipo de copas" height={500} fit='contain' src="/images/tipoCopas.png"></Image>
                    <Grid className='modal-grid text-left'>
                        <Select label="Usos en Espacio P??blico" placeholder="Escoja una opci??n" data={['Parques', 'Plazas', 'Edificios', 'Vias Peatonales', 'Cerros', 'Rotonda / Glorieta', 'Otros']}></Select>
                        <Select label="Tasa de crecimiento" placeholder="Escoja una opci??n" data={['Lento', 'Medio', 'R??pido', 'Lenta a Media', 'Media a Rapida', 'No determinado']}></Select>
                        <Select label="Longevidad" placeholder="Escoja una opci??n" data={['Baja (0 - 35 a??os)', 'Media (36 - 60 a??os)', 'Alta (> 60 a??os)', 'No determinado', 'Anual', 'Perenne']}></Select>
                        <Select label="Persistencia de la hoja" placeholder="Escoja una opci??n" data={['Caducifolia','Semicaducifolia','Perenne', 'No determinado']}></Select>
                        <Select label="Forma de Copa" placeholder="Escoja una opci??n" data={['Abanico', 'Columnar', 'Piramidal', 'Esferica', 'Extendida','Irregular','Ovoidal','Pendular','Parasol','No Determinado']}></Select>
                    </Grid>
                    <Grid className='modal-grid text-left centered-full col-grid-2'>
                        <Checkbox.Group className='modal-options align-start' label="Limitaciones de flores">
                            <Checkbox value="alergia" label="Alerg??nicas"></Checkbox>
                            <Checkbox value="odor" label="Olor desagradable"></Checkbox>
                            <Checkbox value="carnosas" label="Afectan movilidad de peatones"></Checkbox>
                            <Checkbox value="masivas" label="Afectan movilidad de vehiculos"></Checkbox>
                        </Checkbox.Group>
                        <Checkbox.Group className='modal-options align-start' label="Limitaciones de frutas">
                            <Checkbox value="pesado" label="Pesados"></Checkbox>
                            <Checkbox value="toxicos" label="Toxicos"></Checkbox>
                            <Checkbox value="masivos" label="Masivos"></Checkbox>
                            <Checkbox value="alergenicos" label="Alergenicos"></Checkbox>
                            <Checkbox value="carnosos" label="Carnosos"></Checkbox>
                            <Checkbox value="espinas" label="Con espinas"></Checkbox>
                            <Checkbox value="na" label="No aplica"></Checkbox>
                        </Checkbox.Group>
                    </Grid>
                </Stack>
            ),
            onConfirm: () => {
                notificationSearch();
            },
            onCancel: () => {
                closeAllModals();
            },
        });
    }                   
    const navigate = useNavigate();
    const notificationSearch = () => {
        closeAllModals();
        try{
            showNotification({
                title: 'Busqueda exitosa',
                message: 'Se encontraron 10 resultados',
                icon: <BiCheck />,
                color: 'teal',
                timeout: 5000,
            });
            navigate('/especies')
        } catch (error) {
            showNotification({
                title: 'Error',
                message: 'No se encontraron resultados',
                icon: <BiError />,
                color: 'red',
                timeout: 5000,
            });
        }
    }
    return (
        <>
            <Button variant='filled' color='teal' leftIcon={<GiPineTree/>}  onClick={openArborista}>Arborista</Button>
        </>
	);
};

export default ArboristaModal;