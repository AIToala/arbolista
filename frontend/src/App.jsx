import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

import { useState } from 'react';
import './index.css';

function App() {
	const [isUserLogged, setUserLogged] = useState(false);
	const [modalLogin, setModalLogin] = useState(false);
	return (
		<>
			<div className="app">
				<LoginModal setUserLogged={setUserLogged} modalLogin={modalLogin} setModalLogin={setModalLogin}></LoginModal>
				<Header isUserLogged={isUserLogged} setUserLogged={setUserLogged} setModalLogin={setModalLogin}/>
				<Outlet />
				<Footer />
			</div>
		</>
	);
}

export default App;
