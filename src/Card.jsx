import star from './assets/star.png'

export default function Card({ item, imagePath } = props) {
	const image = `${imagePath}/${item.coverImg}`

	let badgeText
	if (item.openSpots === 0) {
		badgeText = 'SOLD OUT'
	} else if (item.location === 'Online') {
		badgeText = 'ONLINE'
	}
	return (
		<div className="card">
			{badgeText && <div className="card--badge">{badgeText}</div>}

			<img src={image} className="card--image" alt="Main card image." />
			<div className="card--stats">
				<img src={star} className="card--star" alt="Star icon." />
				<span>{item.stats.rating}</span>
				<span className="gray">({item.stats.reviewCount}) • </span>
				<span className="gray"> {item.location}</span>
			</div>
			<h2>{item.title}</h2>
			<p>
				<strong>From ${item.price}</strong> / person
			</p>
		</div>
	)
}
