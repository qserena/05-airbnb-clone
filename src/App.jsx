import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import items from './data.js'

export default function App() {
	const imagePath = '../'
	const cards = items.map((x) => (
		<Card key={x.id} item={x} imagePath={imagePath} />
	))
	return (
		<div className="container">
			<Navbar />
			<Hero />
			<section className="cards">{cards}</section>
		</div>
	)
}
