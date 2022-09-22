import './App.scss';
import { useEffect, useState } from 'react';
import axios from "axios";
import Categories from './components/Categories';
import CardList from './components/CardList';
import { Route, Routes } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function App() {

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
