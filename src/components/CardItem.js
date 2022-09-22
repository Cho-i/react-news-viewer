import { Button, Card } from 'react-bootstrap';

function CardItem({ article }) {
	return (
		<Card style={{ width: '20rem' }} className="mb-2">
			<Card.Img variant="top" src={article.urlToImage} />
			<Card.Body>
				<Card.Title>{article.title}</Card.Title>
				<Button variant="primary">상세</Button>
			</Card.Body>
		</Card>
	)
}

export default CardItem;