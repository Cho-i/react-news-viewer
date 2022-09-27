import CardItem from "./CardItem";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Pagination } from 'react-bootstrap';
import Loading from "./Loading";

function CardList() {
	const { category } = useParams();
	const [articles, setArticles] = useState(null);
	const [loading, setLoading] = useState(false);
	const pageSize = 10;
	const [page, setPage] = useState(1);

	const pageItems = [];
	for (let number = 1; number <= 3; number++) {
		pageItems.push(
			<Pagination.Item key={number} active={number === page} onClick={() => {
				setPage(number);
			}}>
				{number}
			</Pagination.Item>
		);
	}

	useEffect(() => {
		setPage(1);
	}, [category]);

	useEffect(() => {
		// async를 사용하는 함수 따로 선언
		const fetchData = async () => {
			setLoading(true);
			try {
				const query = (category === 'all') ? '' : `&category=${category}`;
				const res = await axios.get(
					`https://newsapi.org/v2/top-headlines?country=kr${query}&pageSize=${pageSize}&page=${page}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`,
				);
				setArticles(res.data.articles);
			} catch (e) {
				console.log(e);
			}
			setLoading(false);
		};
		fetchData();
	}, [category, page]);

	// 대기 중일 때
	if (loading) {
		return <Loading />;
	}

	// 아직 articles 값이 설정되지 않았을 때
	if (!articles) {
		return null;
	}

	return (
		<>
			<ul className="card-wrap mt-5">
				{
					articles.map((article, i) => {
						return (
							<CardItem article={article} key={i} />
						)
					})
				}
			</ul>
			<Pagination>{pageItems}</Pagination>
		</>
	)
}

export default CardList;