import {
	Stack,
    Title,
    Text,
} from '@mantine/core';


const SelectorModal = () => {
    
	return (
        <Stack className='modal-content modal-bg'>
            <Title>¿Desconoces la especie?</Title>
            <Text className='modal-text'>Responde las siguientes preguntas</Text>
            <Stack className='question-box'>
                <Text className='question'>¿Cuál es el color de la flor?</Text>
                <Checkbox.Group>
                    <Checkbox value='rojas'>Rojas</Checkbox>
                    <Checkbox value='rosadas'>Amarillas</Checkbox>
                    <Checkbox value='blancas'>Blancas</Checkbox>
                    <Checkbox value='otro'>Otro</Checkbox>
                </Checkbox.Group>
            </Stack>
        </Stack>
	);
};

export default SelectorModal;