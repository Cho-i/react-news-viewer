import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const categories = [
	{
		name: 'all',
		text: '전체보기'
	},
	{
		name: 'business',
		text: '비즈니스'
	},
	{
		name: 'entertainment',
		text: '엔터테인먼트'
	},
	{
		name: 'health',
		text: '건강'
	},
	{
		name: 'science',
		text: '과학'
	},
	{
		name: 'sports',
		text: '스포츠'
	},
	{
		name: 'technology',
		text: '기술'
	},
]

function Categories() {
	return (
		<Navbar bg="primary" variant="dark">
			<Container>
				<Nav className="me-auto">
					{
						categories.map((category, i) => {
							return (
								<NavLink to={category.name} key={i} className="nav-link">{category.text}</NavLink>
							)
						})
					}
				</Nav>
			</Container>
		</Navbar>
	)
}

export default Categories;