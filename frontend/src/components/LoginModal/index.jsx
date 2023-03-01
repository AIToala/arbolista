import {
    Modal,
	Stack,
    Title,
    Text,
    Group,
    Button,
    TextInput,
    PasswordInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { BiCheck, BiError } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const LoginModal = ({modalLogin, setUserLogged, setModalLogin}) => {
    const form = useForm({
        initialValues: {
            username: '',
            password: '',
        },
        validate: {
            username: (value) => {
                value.length > 0 || 'El nombre de usuario es requerido';
            },
            password: (value) => {
                value.length > 0 || 'La contraseña es requerida';
            },
        },
    })
    const onSubmit = async(values) => {
        console.log(values);
        try{
            form.reset(['username','password']);
            showNotification({
                title: 'Inicio de sesión exitoso',
                message: 'Bienvenido',
                color: 'teal',
                icon: <BiCheck />,
                position: 'top-right',
                timeout: 5000,
            });
            setUserLogged(true);
            setModalLogin(false);
        } catch (error) {
            showNotification({
                title: 'Error al iniciar sesión',
                message: 'Por favor, intente de nuevo',
                color: 'red',
                icon: <BiError />,
                position: 'top-right',
                timeout: 5000,
            });
        }
    }
	return (
        <Modal centered
            opened={modalLogin}
            overlayColor="rgba(0, 0, 0, 0.75)"
            onClose={() => setModalLogin(false)}
            className='modal'
            color='teal'
            radius='sm'
            size="80%"
            overlayBlur={2}
        >
            <Stack className='modal-content'>
                <Title className='modal-title'>INICIAR SESIÓN</Title>
                <Text>Ingresa tus credenciales de inicio de sesión</Text>
                <Stack className='form'>
                    <form onSubmit={form.onSubmit((values)=> onSubmit(values))}>
                        <TextInput data-autoFocus size='md' withAsterisk label="Nombre de Usuario" placeholder='Ingresa tu usuario' {...form.getInputProps('username')} required/>
                        <PasswordInput size='md' required label="Contraseña" placeholder='Ingresa tu contraseña' {...form.getInputProps('password')} />
                        <Group position="right">
                            <Link to="contacto">
                                <Button className='btn-text' onClick={()=>setModalLogin(false)} variant="subtle" color='teal' >¿Olvidaste tu contraseña?</Button>
                            </Link>
                        </Group>
                        <Stack>
                        <Button type="submit" size='lg' className='btnLogin' variant="filled" disabled={!form.isValid}>Iniciar Sesión</Button>
                        <Group position="center" spacing="xs">
                            <Text>¿No tienes cuenta?</Text>
                            <Link to="contacto">
                                <Button onClick={()=>setModalLogin(false)} className='btn-text' variant='subtle' color='teal'>Contáctenos</Button>
                            </Link>
                        </Group>
                        </Stack>
                    </form>
                </Stack>
            </Stack>
        </Modal>
	);
};

export default LoginModal;