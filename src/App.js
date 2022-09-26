import './App.scss';
import { useEffect } from 'react';
import Categories from './components/Categories';
import CardList from './components/CardList';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

function App() {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname == '/') {
			navigate('/all')
		}
	})

	return (
		<>
			<Categories />
			<Routes>
				<Route path="/:category" element={<CardList />} />
				<Route path="*" element={<div>없는페이지임</div>} />
			</Routes>
		</>
	);
}

export default App;
