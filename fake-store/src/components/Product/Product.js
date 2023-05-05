export default function Product(props) {
	return (
		<>
			<img src={props.image} alt='product' />
			<h2>{props.title}</h2>
			<h3>Price: £{props.price.toFixed(2)}</h3>
		</>
	);
}
